// User preferences object
const defaultPreferences = {
    theme: 'light',
    notifications: 'enabled',
    language: 'english'
};

// Load preferences from localStorage or use defaults
function loadPreferences() {
    const saved = localStorage.getItem('userPreferences');
    return saved ? JSON.parse(saved) : { ...defaultPreferences };
}

// Save preferences to localStorage
function savePreferences(preferences) {
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
}

// Update the display with current preferences
function updatePreferencesDisplay(preferences) {
    document.getElementById('currentTheme').textContent = 
        preferences.theme.charAt(0).toUpperCase() + preferences.theme.slice(1);
    document.getElementById('currentNotifications').textContent = 
        preferences.notifications.charAt(0).toUpperCase() + preferences.notifications.slice(1);
    document.getElementById('currentLanguage').textContent = 
        preferences.language.charAt(0).toUpperCase() + preferences.language.slice(1);
}

// Populate form with current preferences
function populateForm(preferences) {
    document.getElementById('theme').value = preferences.theme;
    document.getElementById('notifications').value = preferences.notifications;
    document.getElementById('language').value = preferences.language;
}

// Open dialog
function openDialog() {
    const dialog = document.getElementById('preferencesDialog');
    const preferences = loadPreferences();
    populateForm(preferences);
    dialog.classList.add('active');
}

// Close dialog
function closeDialog() {
    const dialog = document.getElementById('preferencesDialog');
    dialog.classList.remove('active');
}

// Show toast notification
function showToast(message, duration = 3000) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    const messageSpan = toast.querySelector('span');
    if (!messageSpan) return;
    
    messageSpan.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// Initialize the app
function init() {
    // Load and display current preferences
    const preferences = loadPreferences();
    updatePreferencesDisplay(preferences);
    
    // Event listeners
    document.getElementById('openPreferences').addEventListener('click', openDialog);
    document.getElementById('closeDialog').addEventListener('click', closeDialog);
    document.getElementById('cancelBtn').addEventListener('click', closeDialog);
    
    // Close dialog when clicking outside
    document.getElementById('preferencesDialog').addEventListener('click', (e) => {
        if (e.target.id === 'preferencesDialog') {
            closeDialog();
        }
    });
    
    // Form submission
    document.getElementById('preferencesForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newPreferences = {
            theme: document.getElementById('theme').value,
            notifications: document.getElementById('notifications').value,
            language: document.getElementById('language').value
        };
        
        savePreferences(newPreferences);
        updatePreferencesDisplay(newPreferences);
        closeDialog();
        
        // Show success message
        showToast('✓ Preferences saved successfully!');
    });
    
    // Keyboard support - Escape key to close dialog
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const dialog = document.getElementById('preferencesDialog');
            if (dialog.classList.contains('active')) {
                closeDialog();
            }
        }
    });
}

// Run init when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
