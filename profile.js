/**
 * User Profile Manager
 * Handles loading, saving, and displaying user profile data.
 */

const STORAGE_KEY = 'user-profile';

/**
 * Load profile data from localStorage.
 * @returns {{ name: string, email: string, bio: string } | null}
 */
function loadProfile() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : null;
    } catch {
        return null;
    }
}

/**
 * Save profile data to localStorage.
 * @param {{ name: string, email: string, bio: string }} profile
 */
function saveProfile(profile) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
}

/**
 * Get the initials from a name string.
 * @param {string} name
 * @returns {string}
 */
function getInitials(name) {
    if (!name || !name.trim()) return '?';
    return name
        .trim()
        .split(/\s+/)
        .map(word => word[0])
        .join('')
        .slice(0, 2);
}

/**
 * Validate an email address.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Render the profile view with the given data.
 * @param {{ name: string, email: string, bio: string } | null} profile
 */
function renderProfile(profile) {
    const displayName = document.getElementById('display-name');
    const displayEmail = document.getElementById('display-email');
    const displayBio = document.getElementById('display-bio');
    const avatarDisplay = document.getElementById('avatar-display');

    if (profile) {
        displayName.textContent = profile.name;
        displayEmail.textContent = profile.email;
        displayBio.textContent = profile.bio || '';
        avatarDisplay.textContent = getInitials(profile.name);
    } else {
        displayName.textContent = 'No Name Set';
        displayEmail.textContent = '';
        displayBio.textContent = '';
        avatarDisplay.textContent = '?';
    }
}

/**
 * Show a toast notification.
 * @param {string} message
 */
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 2000);
}

/**
 * Switch between profile view and edit mode.
 * @param {boolean} editing
 */
function toggleEditMode(editing) {
    const viewEl = document.getElementById('profile-view');
    const editEl = document.getElementById('profile-edit');

    if (editing) {
        viewEl.classList.add('hidden');
        editEl.classList.remove('hidden');
    } else {
        viewEl.classList.remove('hidden');
        editEl.classList.add('hidden');
    }
}

function init() {
    const profile = loadProfile();
    renderProfile(profile);

    const editBtn = document.getElementById('edit-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    const form = document.getElementById('profile-form');

    editBtn.addEventListener('click', () => {
        const current = loadProfile();
        if (current) {
            document.getElementById('name').value = current.name;
            document.getElementById('email').value = current.email;
            document.getElementById('bio').value = current.bio || '';
        }
        toggleEditMode(true);
    });

    cancelBtn.addEventListener('click', () => {
        toggleEditMode(false);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const bio = document.getElementById('bio').value.trim();

        if (!name) {
            showToast('Name is required');
            return;
        }
        if (!isValidEmail(email)) {
            showToast('Please enter a valid email');
            return;
        }

        const profileData = { name, email, bio };
        saveProfile(profileData);
        renderProfile(profileData);
        toggleEditMode(false);
        showToast('Profile saved!');
    });
}

// Export for testing (Node.js environment)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { loadProfile, saveProfile, getInitials, isValidEmail };
}

// Initialize when DOM is ready
if (typeof document !== 'undefined' && document.addEventListener) {
    document.addEventListener('DOMContentLoaded', init);
}
