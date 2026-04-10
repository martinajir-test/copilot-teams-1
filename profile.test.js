const { getInitials, isValidEmail, loadProfile, saveProfile } = require('./profile');

// Mock localStorage
const localStorageMock = (() => {
    let store = {};
    return {
        getItem: (key) => store[key] ?? null,
        setItem: (key, value) => { store[key] = String(value); },
        removeItem: (key) => { delete store[key]; },
        clear: () => { store = {}; },
    };
})();

Object.defineProperty(global, 'localStorage', { value: localStorageMock });

beforeEach(() => {
    localStorage.clear();
});

describe('getInitials', () => {
    test('returns ? for empty input', () => {
        expect(getInitials('')).toBe('?');
        expect(getInitials(null)).toBe('?');
        expect(getInitials(undefined)).toBe('?');
    });

    test('returns single initial for one-word name', () => {
        expect(getInitials('Alice')).toBe('A');
    });

    test('returns two initials for multi-word name', () => {
        expect(getInitials('John Doe')).toBe('JD');
    });

    test('limits initials to two characters', () => {
        expect(getInitials('Mary Jane Watson')).toBe('MJ');
    });

    test('handles extra whitespace', () => {
        expect(getInitials('  Bob  Smith  ')).toBe('BS');
    });
});

describe('isValidEmail', () => {
    test('accepts valid emails', () => {
        expect(isValidEmail('user@example.com')).toBe(true);
        expect(isValidEmail('first.last@domain.org')).toBe(true);
    });

    test('rejects invalid emails', () => {
        expect(isValidEmail('')).toBe(false);
        expect(isValidEmail('notanemail')).toBe(false);
        expect(isValidEmail('missing@domain')).toBe(false);
        expect(isValidEmail('@no-local.com')).toBe(false);
    });
});

describe('saveProfile / loadProfile', () => {
    test('returns null when no profile is saved', () => {
        expect(loadProfile()).toBeNull();
    });

    test('saves and loads a profile', () => {
        const profile = { name: 'Jane Doe', email: 'jane@example.com', bio: 'Hello!' };
        saveProfile(profile);
        expect(loadProfile()).toEqual(profile);
    });

    test('overwrites an existing profile', () => {
        saveProfile({ name: 'Old', email: 'old@test.com', bio: '' });
        const updated = { name: 'New', email: 'new@test.com', bio: 'Updated' };
        saveProfile(updated);
        expect(loadProfile()).toEqual(updated);
    });
});
