// Default configuration
const defaultConfig = {
    brand_name: 'ColorAPI',
    login_title: 'Chào mừng trở lại',
    register_title: 'Tạo tài khoản mới',
    primary_color: '#fbbf24',
    secondary_color: '#f59e0b',
    background_color: '#0f172a',
    text_color: '#ffffff',
    muted_color: '#9ca3af'
};

let config = { ...defaultConfig };

// Initialize Lucide icons
lucide.createIcons();

// DOM Elements
const loginTab = document.getElementById('login-tab');
const registerTab = document.getElementById('register-tab');
const loginPage = document.getElementById('login-page');
const registerPage = document.getElementById('register-page');

// Tab switching
loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    loginPage.classList.remove('hidden');
    registerPage.classList.add('hidden');
});

registerTab.addEventListener('click', () => {
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    registerPage.classList.remove('hidden');
    loginPage.classList.add('hidden');
});

// Password visibility toggle
function setupPasswordToggle(toggleId, inputId) {
    const toggle = document.getElementById(toggleId);
    const input = document.getElementById(inputId);
    
    toggle.addEventListener('click', () => {
        const type = input.type === 'password' ? 'text' : 'password';
        input.type = type;
        const icon = toggle.querySelector('i');
        icon.setAttribute('data-lucide', type === 'password' ? 'eye' : 'eye-off');
        lucide.createIcons();
    });
}

setupPasswordToggle('toggle-login-pass', 'login-password');
setupPasswordToggle('toggle-register-pass', 'register-password');

// Password strength checker
const registerPassword = document.getElementById('register-password');
const strengthBars = [
    document.getElementById('strength-1'),
    document.getElementById('strength-2'),
    document.getElementById('strength-3'),
    document.getElementById('strength-4')
];
const strengthText = document.getElementById('strength-text');

registerPassword.addEventListener('input', (e) => {
    const password = e.target.value;
    let strength = 0;
    
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;
    
    const colors = ['#ef4444', '#f97316', '#eab308', '#22c55e'];
    const texts = ['Yếu', 'Trung bình', 'Khá', 'Mạnh'];
    
    strengthBars.forEach((bar, index) => {
        if (index < strength) {
            bar.style.background = colors[strength - 1];
        } else {
            bar.style.background = '#374151';
        }
    });
    
    if (password.length > 0) {
        strengthText.textContent = texts[strength - 1] || 'Quá yếu';
        strengthText.style.color = colors[strength - 1] || '#ef4444';
    } else {
        strengthText.textContent = '';
    }
});

// Form submissions
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if (email && password) {
        document.getElementById('login-success').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('login-success').classList.add('hidden');
        }, 3000);
    }
});

document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirm = document.getElementById('register-confirm').value;
    const terms = document.getElementById('terms-checkbox').checked;
    
    if (name && email && password && confirm && terms) {
        if (password === confirm) {
            document.getElementById('register-success').classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('register-success').classList.add('hidden');
            }, 3000);
        }
    }
});

// Element SDK integration
async function onConfigChange(cfg) {
    document.getElementById('brand-name').textContent = cfg.brand_name || defaultConfig.brand_name;
    document.getElementById('login-title').textContent = cfg.login_title || defaultConfig.login_title;
    document.getElementById('register-title').textContent = cfg.register_title || defaultConfig.register_title;
}

function mapToCapabilities(cfg) {
    return {
        recolorables: [
            {
                get: () => cfg.background_color || defaultConfig.background_color,
                set: (value) => {
                    cfg.background_color = value;
                    window.elementSdk.setConfig({ background_color: value });
                }
            },
            {
                get: () => cfg.primary_color || defaultConfig.primary_color,
                set: (value) => {
                    cfg.primary_color = value;
                    window.elementSdk.setConfig({ primary_color: value });
                }
            },
            {
                get: () => cfg.text_color || defaultConfig.text_color,
                set: (value) => {
                    cfg.text_color = value;
                    window.elementSdk.setConfig({ text_color: value });
                }
            }
        ],
        borderables: [],
        fontEditable: undefined,
        fontSizeable: undefined
    };
}

function mapToEditPanelValues(cfg) {
    return new Map([
        ['brand_name', cfg.brand_name || defaultConfig.brand_name],
        ['login_title', cfg.login_title || defaultConfig.login_title],
        ['register_title', cfg.register_title || defaultConfig.register_title]
    ]);
}

// Initialize SDK
if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
    });
}