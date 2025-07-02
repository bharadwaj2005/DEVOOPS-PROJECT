// E-Hospital Management System JavaScript

// Global variables
let currentUser = null;
let currentRole = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Show home page by default
    showPage('home');
    
    // Initialize form handlers
    initializeFormHandlers();
    
    // Initialize navigation
    initializeNavigation();
});

// Page Navigation Functions
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

function showLogin() {
    showPage('login');
}

function showRegister() {
    showPage('register');
}

function showHome() {
    showPage('home');
}

// Authentication Functions
function initializeFormHandlers() {
    // Login form handler
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Registration form handler
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegistration);
    }
}

function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const role = document.getElementById('userRole').value;
    
    // Basic validation
    if (!email || !password || !role) {
        showAlert('Please fill in all fields', 'danger');
        return;
    }
    
    // Simulate authentication (in real app, this would be an API call)
    if (authenticateUser(email, password, role)) {
        currentUser = email;
        currentRole = role;
        
        // Redirect to appropriate dashboard
        redirectToDashboard(role);
        showAlert('Login successful!', 'success');
    } else {
        showAlert('Invalid credentials', 'danger');
    }
}

function handleRegistration(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData);
    
    // Basic validation
    if (!validateRegistrationData(userData)) {
        return;
    }
    
    // Simulate registration (in real app, this would be an API call)
    if (registerUser(userData)) {
        showAlert('Registration successful! Please login.', 'success');
        showLogin();
    } else {
        showAlert('Registration failed. Please try again.', 'danger');
    }
}

function authenticateUser(email, password, role) {
    // Simulate authentication logic
    // In a real application, this would make an API call to verify credentials
    return true; // For demo purposes, always return true
}

function registerUser(userData) {
    // Simulate user registration
    // In a real application, this would make an API call to create user
    return true; // For demo purposes, always return true
}

function validateRegistrationData(data) {
    // Basic validation
    if (!data.fullName || !data.email || !data.password) {
        showAlert('Please fill in all required fields', 'danger');
        return false;
    }
    
    if (!isValidEmail(data.email)) {
        showAlert('Please enter a valid email address', 'danger');
        return false;
    }
    
    if (data.password.length < 6) {
        showAlert('Password must be at least 6 characters long', 'danger');
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Dashboard Navigation Functions
function redirectToDashboard(role) {
    const dashboardMap = {
        'patient': 'patient-dashboard',
        'doctor': 'doctor-dashboard',
        'lab': 'lab-dashboard',
        'pharmacist': 'pharmacist-dashboard',
        'billing': 'billing-dashboard',
        'admin': 'admin-dashboard'
    };
    
    const dashboardId = dashboardMap[role];
    if (dashboardId) {
        showPage(dashboardId);
    }
}

// Patient Dashboard Functions
function showPatientTab(tabId) {
    // Hide all patient tabs
    const tabs = document.querySelectorAll('#patient-dashboard .tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Show selected tab
    const targetTab = document.getElementById(`patient-${tabId}`);
    if (targetTab) {
        targetTab.classList.add('active');
    }
    
    // Update navigation
    updateNavigation('#patient-dashboard', tabId);
}

// Doctor Dashboard Functions
function showDoctorTab(tabId) {
    // Hide all doctor tabs
    const tabs = document.querySelectorAll('#doctor-dashboard .tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Show selected tab
    const targetTab = document.getElementById(`doctor-${tabId}`);
    if (targetTab) {
        targetTab.classList.add('active');
    }
    
    // Update navigation
    updateNavigation('#doctor-dashboard', tabId);
}

// Lab Dashboard Functions
function showLabTab(tabId) {
    // Hide all lab tabs
    const tabs = document.querySelectorAll('#lab-dashboard .tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Show selected tab
    const targetTab = document.getElementById(`lab-${tabId}`);
    if (targetTab) {
        targetTab.classList.add('active');
    }
    
    // Update navigation
    updateNavigation('#lab-dashboard', tabId);
}

// Pharmacist Dashboard Functions
function showPharmacistTab(tabId) {
    // Hide all pharmacist tabs
    const tabs = document.querySelectorAll('#pharmacist-dashboard .tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Show selected tab
    const targetTab = document.getElementById(`pharmacist-${tabId}`);
    if (targetTab) {
        targetTab.classList.add('active');
    }
    
    // Update navigation
    updateNavigation('#pharmacist-dashboard', tabId);
}

// Billing Dashboard Functions
function showBillingTab(tabId) {
    // Hide all billing tabs
    const tabs = document.querySelectorAll('#billing-dashboard .tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Show selected tab
    const targetTab = document.getElementById(`billing-${tabId}`);
    if (targetTab) {
        targetTab.classList.add('active');
    }
    
    // Update navigation
    updateNavigation('#billing-dashboard', tabId);
}

// Admin Dashboard Functions
function showAdminTab(tabId) {
    // Hide all admin tabs
    const tabs = document.querySelectorAll('#admin-dashboard .tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Show selected tab
    const targetTab = document.getElementById(`admin-${tabId}`);
    if (targetTab) {
        targetTab.classList.add('active');
    }
    
    // Update navigation
    updateNavigation('#admin-dashboard', tabId);
}

// Navigation Helper Functions
function updateNavigation(dashboardSelector, activeTab) {
    const navLinks = document.querySelectorAll(`${dashboardSelector} .nav-link`);
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Find and activate the corresponding nav link
    const activeLink = document.querySelector(`${dashboardSelector} .nav-link[onclick*="${activeTab}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

function initializeNavigation() {
    // Add smooth scrolling to navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add loading state
            const originalText = this.innerHTML;
            this.innerHTML = '<span class="loading"></span> Loading...';
            
            setTimeout(() => {
                this.innerHTML = originalText;
            }, 500);
        });
    });
}

// Appointment Functions
function bookAppointment(doctorName) {
    const modal = new bootstrap.Modal(document.getElementById('bookAppointmentModal'));
    document.getElementById('selectedDoctor').value = doctorName;
    modal.show();
}

// Utility Functions
function showAlert(message, type = 'info') {
    // Create alert element
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    alertDiv.style.cssText = 'top: 100px; right: 20px; z-index: 9999; min-width: 300px;';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    // Add to page
    document.body.appendChild(alertDiv);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.parentNode.removeChild(alertDiv);
        }
    }, 5000);
}

function logout() {
    currentUser = null;
    currentRole = null;
    showAlert('Logged out successfully', 'info');
    showHome();
}

// Data Management Functions
function loadPatientData() {
    // Simulate loading patient data
    // In a real application, this would fetch data from an API
    return {
        appointments: [],
        prescriptions: [],
        labResults: []
    };
}

function loadDoctorData() {
    // Simulate loading doctor data
    return {
        appointments: [],
        patients: [],
        schedule: []
    };
}

// Form Validation Functions
function validateForm(formId) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('is-invalid');
            isValid = false;
        } else {
            input.classList.remove('is-invalid');
        }
    });
    
    return isValid;
}

// Search and Filter Functions
function searchPatients(query) {
    // Simulate patient search
    console.log('Searching patients:', query);
}

function filterAppointments(criteria) {
    // Simulate appointment filtering
    console.log('Filtering appointments:', criteria);
}

// Print Functions
function printInvoice(invoiceId) {
    // Simulate invoice printing
    showAlert('Invoice sent to printer', 'success');
}

function downloadReport(reportType) {
    // Simulate report download
    showAlert(`${reportType} report downloaded`, 'success');
}

// Real-time Updates (WebSocket simulation)
function initializeRealTimeUpdates() {
    // Simulate real-time updates
    setInterval(() => {
        updateDashboardStats();
    }, 30000); // Update every 30 seconds
}

function updateDashboardStats() {
    // Simulate updating dashboard statistics
    console.log('Updating dashboard stats...');
}

// Initialize real-time updates when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeRealTimeUpdates();
});

// Export functions for global access
window.showLogin = showLogin;
window.showRegister = showRegister;
window.showHome = showHome;
window.showPatientTab = showPatientTab;
window.showDoctorTab = showDoctorTab;
window.showLabTab = showLabTab;
window.showPharmacistTab = showPharmacistTab;
window.showBillingTab = showBillingTab;
window.showAdminTab = showAdminTab;
window.bookAppointment = bookAppointment;
window.logout = logout;
window.printInvoice = printInvoice;
window.downloadReport = downloadReport;