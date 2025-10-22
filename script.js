// Game Database Configuration
const gameDatabase = {
    cs2: {
        name: 'Counter-Strike 2',
        supportsFOV: true,
        defaultFOV: 103,
        minFOV: 70,
        maxFOV: 150,
        sensitivityMultiplier: 1.0,
        baseFOV: 103
    },
    valorant: {
        name: 'Valorant',
        supportsFOV: false,
        defaultFOV: 103,
        minFOV: 103,
        maxFOV: 103,
        sensitivityMultiplier: 0.314, // Valorant sensitivity is much lower than CS2
        baseFOV: 103
    },
    overwatch2: {
        name: 'Overwatch 2',
        supportsFOV: true,
        defaultFOV: 103,
        minFOV: 70,
        maxFOV: 150,
        sensitivityMultiplier: 0.094, // Overwatch uses different sensitivity scaling
        baseFOV: 103
    },
    apex: {
        name: 'Apex Legends',
        supportsFOV: true,
        defaultFOV: 110,
        minFOV: 70,
        maxFOV: 150,
        sensitivityMultiplier: 1.0, // Similar to CS2
        baseFOV: 110
    },
    r6: {
        name: 'Rainbow Six Siege',
        supportsFOV: true,
        defaultFOV: 90,
        minFOV: 70,
        maxFOV: 150,
        sensitivityMultiplier: 0.082, // R6 uses different sensitivity scaling
        baseFOV: 90
    },
    warzone: {
        name: 'Call of Duty: Warzone',
        supportsFOV: true,
        defaultFOV: 120,
        minFOV: 70,
        maxFOV: 150,
        sensitivityMultiplier: 0.75, // COD uses different sensitivity scaling
        baseFOV: 120
    },
    fortnite: {
        name: 'Fortnite',
        supportsFOV: true,
        defaultFOV: 80,
        minFOV: 70,
        maxFOV: 150,
        sensitivityMultiplier: 14.29, // Fortnite uses very different sensitivity scaling
        baseFOV: 80
    },
    delta: {
        name: 'Delta Force',
        supportsFOV: true,
        defaultFOV: 90,
        minFOV: 70,
        maxFOV: 150,
        sensitivityMultiplier: 1.0, // Similar to CS2
        baseFOV: 90
    }
};

// 职业选手配置库
const proConfigs = [
    // CS2 配置
    { game: 'cs2', player: 's1mple', sensitivity: 1.2, dpi: 400, edpi: 480, role: 'AWPer', mouse: 'Logitech G Pro X Superlight', team: 'NAVI' },
    { game: 'cs2', player: 'ZywOo', sensitivity: 1.4, dpi: 400, edpi: 560, role: 'Rifler', mouse: 'Logitech G Pro X Superlight', team: 'Vitality' },
    { game: 'cs2', player: 'device', sensitivity: 1.0, dpi: 400, edpi: 400, role: 'AWPer', mouse: 'Logitech G Pro X Superlight', team: 'Astralis' },
    { game: 'cs2', player: 'ropz', sensitivity: 1.8, dpi: 400, edpi: 720, role: 'Rifler', mouse: 'Logitech G Pro X Superlight', team: 'FaZe' },
    { game: 'cs2', player: 'EliGE', sensitivity: 2.0, dpi: 400, edpi: 800, role: 'Rifler', mouse: 'Logitech G Pro X Superlight', team: 'Team Liquid' },
    
    // Valorant 配置
    { game: 'valorant', player: 'TenZ', sensitivity: 0.35, dpi: 800, edpi: 280, role: 'Duelist', mouse: 'Finalmouse Starlight-12', team: 'Sentinels' },
    { game: 'valorant', player: 'ScreaM', sensitivity: 0.4, dpi: 800, edpi: 320, role: 'Duelist', mouse: 'Logitech G Pro X Superlight', team: 'Team Liquid' },
    { game: 'valorant', player: 'Derke', sensitivity: 0.3, dpi: 800, edpi: 240, role: 'Duelist', mouse: 'Logitech G Pro X Superlight', team: 'Fnatic' },
    { game: 'valorant', player: 'Jinggg', sensitivity: 0.25, dpi: 800, edpi: 200, role: 'Duelist', mouse: 'Logitech G Pro X Superlight', team: 'Paper Rex' },
    { game: 'valorant', player: 'f0rsakeN', sensitivity: 0.28, dpi: 800, edpi: 224, role: 'Flex', mouse: 'Logitech G Pro X Superlight', team: 'Paper Rex' },
    
    // Overwatch 2 配置
    { game: 'overwatch2', player: 'Carpe', sensitivity: 3.0, dpi: 800, edpi: 2400, role: 'DPS', mouse: 'Logitech G Pro X Superlight', team: 'Philadelphia Fusion' },
    { game: 'overwatch2', player: 'Profit', sensitivity: 4.0, dpi: 800, edpi: 3200, role: 'DPS', mouse: 'Logitech G Pro X Superlight', team: 'Seoul Dynasty' },
    { game: 'overwatch2', player: 'Lip', sensitivity: 2.5, dpi: 800, edpi: 2000, role: 'DPS', mouse: 'Logitech G Pro X Superlight', team: 'Shanghai Dragons' },
    
    // Apex Legends 配置
    { game: 'apex', player: 'Aceu', sensitivity: 1.5, dpi: 800, edpi: 1200, role: 'Fragger', mouse: 'Logitech G Pro X Superlight', team: 'NRG' },
    { game: 'apex', player: 'Hal', sensitivity: 2.0, dpi: 800, edpi: 1600, role: 'IGL', mouse: 'Logitech G Pro X Superlight', team: 'TSM' },
    { game: 'apex', player: 'Sweetdreams', sensitivity: 1.8, dpi: 800, edpi: 1440, role: 'IGL', mouse: 'Logitech G Pro X Superlight', team: 'NRG' },
    
    // Rainbow Six Siege 配置
    { game: 'r6', player: 'Beaulo', sensitivity: 12, dpi: 400, edpi: 4800, role: 'Entry Fragger', mouse: 'Logitech G Pro X Superlight', team: 'TSM' },
    { game: 'r6', player: 'Shaiiko', sensitivity: 8, dpi: 400, edpi: 3200, role: 'Fragger', mouse: 'Logitech G Pro X Superlight', team: 'BDS' },
    
    // Warzone 配置
    { game: 'warzone', player: 'Biffle', sensitivity: 5.0, dpi: 800, edpi: 4000, role: 'Aggressive', mouse: 'Logitech G Pro X Superlight', team: 'NRG' },
    { game: 'warzone', player: 'Swagg', sensitivity: 6.0, dpi: 800, edpi: 4800, role: 'Aggressive', mouse: 'Logitech G Pro X Superlight', team: 'FaZe' },
    
    // Fortnite 配置
    { game: 'fortnite', player: 'Bugha', sensitivity: 0.08, dpi: 800, edpi: 64, role: 'Builder', mouse: 'Logitech G Pro X Superlight', team: 'Sentinels' },
    { game: 'fortnite', player: 'Mongraal', sensitivity: 0.1, dpi: 800, edpi: 80, role: 'Aggressive', mouse: 'Logitech G Pro X Superlight', team: 'FaZe' },
    
    // Delta Force 配置
    { game: 'delta', player: 'DeltaPro', sensitivity: 0.5, dpi: 800, edpi: 400, role: 'Sniper', mouse: 'Logitech G Pro X Superlight', team: 'Delta Squad' },
    { game: 'delta', player: 'ForceMaster', sensitivity: 0.8, dpi: 800, edpi: 640, role: 'Assault', mouse: 'Logitech G Pro X Superlight', team: 'Elite Force' }
];

// Game Style Recommendation Configuration
const playstyleConfigs = {
    'Precision Aim': {
        minEdpi: 0,
        maxEdpi: 400,
        advantage: 'Accurate positioning, higher headshot rate',
        disadvantage: 'Slower turning, requires large mousepad',
        suitableGames: ['CS2', 'Valorant', 'Rainbow Six Siege', 'Delta Force'],
        description: 'Perfect for players pursuing precision shooting, excellent performance in scenarios requiring precise aiming.'
    },
    'Balanced': {
        minEdpi: 400,
        maxEdpi: 800,
        advantage: 'Balanced precision and flexibility',
        disadvantage: 'Requires more practice to master',
        suitableGames: ['CS2', 'Valorant', 'Overwatch 2', 'Delta Force'],
        description: 'Achieves balance between precision and flexibility, suitable for most gaming scenarios.'
    },
    'Tracking Focused': {
        minEdpi: 800,
        maxEdpi: 1600,
        advantage: 'Fast turning, smooth tracking',
        disadvantage: 'High precision control requirements',
        suitableGames: ['Apex Legends', 'Overwatch 2', 'Fortnite'],
        description: 'Suitable for games requiring quick reactions and tracking, excellent performance in close combat.'
    },
    'Ultra High Sensitivity': {
        minEdpi: 1600,
        maxEdpi: Infinity,
        advantage: 'Extremely fast turning speed',
        disadvantage: 'Extremely difficult precision control',
        suitableGames: ['Fortnite', 'Overwatch 2', 'Apex Legends'],
        description: 'Suitable for games requiring extremely fast reaction speeds, but requires extensive practice to master precision.'
    }
};

// 全局变量
let currentCalculation = null;

// DOM 元素
const elements = {
    sourceGame: document.getElementById('source-game'),
    targetGame: document.getElementById('target-game'),
    sourceSensitivity: document.getElementById('source-sensitivity'),
    dpi: document.getElementById('dpi'),
    sourceFov: document.getElementById('source-fov'),
    targetFov: document.getElementById('target-fov'),
    sourceFovGroup: document.getElementById('source-fov-group'),
    targetFovGroup: document.getElementById('target-fov-group'),
    calculateBtn: document.getElementById('calculate-btn'),
    resultDisplay: document.getElementById('result-display'),
    playstyleRecommendation: document.getElementById('playstyle-recommendation'),
    gameFilter: document.getElementById('game-filter'),
    configsGrid: document.getElementById('configs-grid'),
    sourceFovHint: document.getElementById('source-fov-hint'),
    targetFovHint: document.getElementById('target-fov-hint')
};

// Utility Functions
function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}

function radToDeg(radians) {
    return radians * (180 / Math.PI);
}

function hasValidFOV(game) {
    return gameDatabase[game] && gameDatabase[game].supportsFOV;
}

// Game-specific yaw values (degrees per count)
const gameYawValues = {
    cs2: 0.022,
    valorant: 0.069,
    overwatch2: 0.0066,
    apex: 0.022,
    r6: 0.005729577951308233,
    warzone: 0.0066,
    fortnite: 0.005729577951308233,
    delta: 0.022
};

// Calculate centimeters per 360-degree turn
function calculateCm360(sensitivity, dpi, gameData) {
    const gameId = Object.keys(gameDatabase).find(key => gameDatabase[key] === gameData);
    const yaw = gameYawValues[gameId] || 0.022;
    
    // Formula: cm/360 = (360 / (sensitivity * yaw * dpi)) * 2.54
    const cm360 = (360 / (sensitivity * yaw * dpi)) * 2.54;
    return cm360;
}

// Calculate sensitivity from cm/360
function calculateSensitivityFromCm360(cm360, dpi, gameData) {
    const gameId = Object.keys(gameDatabase).find(key => gameDatabase[key] === gameData);
    const yaw = gameYawValues[gameId] || 0.022;
    
    // Formula: sensitivity = (360 / (cm360 / 2.54)) / (yaw * dpi)
    const sensitivity = (360 / (cm360 / 2.54)) / (yaw * dpi);
    return sensitivity;
}

function calculateSensitivity() {
    const sourceGame = elements.sourceGame.value;
    const targetGame = elements.targetGame.value;
    const sourceSensitivity = parseFloat(elements.sourceSensitivity.value);
    const dpi = parseInt(elements.dpi.value);
    const sourceFov = parseFloat(elements.sourceFov.value);
    const targetFov = parseFloat(elements.targetFov.value);

    // 验证输入
    if (!sourceGame || !targetGame || !sourceSensitivity || !dpi) {
        showError('Please fill in all required fields');
        return null;
    }

    if (sourceSensitivity <= 0 || dpi <= 0) {
        showError('Sensitivity and DPI must be greater than 0');
        return null;
    }

    // 1. Calculate eDPI (effective DPI)
    const eDPI = sourceSensitivity * dpi;

    // 2. Convert to target game sensitivity using industry-standard formula
    // First, normalize the source sensitivity to cm/360 (centimeters per 360-degree turn)
    const sourceGameData = gameDatabase[sourceGame];
    const targetGameData = gameDatabase[targetGame];
    
    // Calculate cm/360 for source game
    const sourceCm360 = calculateCm360(sourceSensitivity, dpi, sourceGameData);
    
    // Convert cm/360 to target game sensitivity
    let targetSensitivity = calculateSensitivityFromCm360(sourceCm360, dpi, targetGameData);

    // 3. Apply FOV correction if both games support FOV and values are provided
    let requiresFOV = false;
    if (hasValidFOV(sourceGame) && hasValidFOV(targetGame) && sourceFov && targetFov) {
        if (sourceFov < 70 || sourceFov > 150 || targetFov < 70 || targetFov > 150) {
            showError('FOV values must be between 70-150 degrees');
            return null;
        }
        
        // Use the more accurate FOV correction formula
        const sourceFovRad = degToRad(sourceFov / 2);
        const targetFovRad = degToRad(targetFov / 2);
        const fovFactor = Math.tan(targetFovRad) / Math.tan(sourceFovRad);
        
        targetSensitivity *= fovFactor;
        requiresFOV = true;
    }

    // Calculate target eDPI
    const targetEDPI = Math.round(targetSensitivity * dpi);

    return {
        sourceGame,
        targetGame,
        sourceSensitivity,
        targetSensitivity: parseFloat(targetSensitivity.toFixed(3)),
        dpi,
        sourceEDPI: Math.round(eDPI), // Source eDPI
        targetEDPI: targetEDPI, // Target eDPI
        sourceFov,
        targetFov,
        requiresFOV
    };
}

function showError(message) {
    elements.resultDisplay.innerHTML = `
        <div class="result-error">
            <i class="fas fa-exclamation-triangle"></i>
            <p>${message}</p>
        </div>
    `;
}

function displayResult(calculation) {
    const { targetSensitivity, sourceEDPI, targetEDPI, requiresFOV, sourceGame, targetGame } = calculation;
    
    elements.resultDisplay.innerHTML = `
        <div class="result-content fade-in-up">
            <div class="result-sensitivity">${targetSensitivity}</div>
            <div class="result-edpi-info">
                <div class="edpi-comparison">
                    <div class="edpi-item">
                        <span class="edpi-label">Source eDPI:</span>
                        <span class="edpi-value">${sourceEDPI}</span>
                    </div>
                    <div class="edpi-item">
                        <span class="edpi-label">Target eDPI:</span>
                        <span class="edpi-value">${targetEDPI}</span>
                    </div>
                </div>
            </div>
            <div class="result-info">
                ${gameDatabase[sourceGame].name} → ${gameDatabase[targetGame].name}
                ${requiresFOV ? ' (FOV correction applied)' : ''}
            </div>
        </div>
    `;

    // Show playstyle recommendation based on target eDPI
    showPlaystyleRecommendation(targetEDPI);
    
    // Save calculation result
    currentCalculation = calculation;
}

function showPlaystyleRecommendation(edpi) {
    let recommendedStyle = null;
    
    for (const [styleName, config] of Object.entries(playstyleConfigs)) {
        if (edpi >= config.minEdpi && edpi < config.maxEdpi) {
            recommendedStyle = { name: styleName, ...config };
            break;
        }
    }
    
    if (recommendedStyle) {
        elements.playstyleRecommendation.style.display = 'block';
        elements.playstyleRecommendation.querySelector('.playstyle-content').innerHTML = `
            <div class="playstyle-type">${recommendedStyle.name}</div>
            <div class="playstyle-description">${recommendedStyle.description}</div>
            <div class="playstyle-details">
                <div class="playstyle-advantage">
                    <strong>Advantages:</strong> ${recommendedStyle.advantage}
                </div>
                <div class="playstyle-disadvantage">
                    <strong>Disadvantages:</strong> ${recommendedStyle.disadvantage}
                </div>
            </div>
            <div class="playstyle-games">
                <strong>Suitable Games:</strong> ${recommendedStyle.suitableGames.join(', ')}
            </div>
        `;
    }
}


function updateFOVInputs() {
    const sourceGame = elements.sourceGame.value;
    const targetGame = elements.targetGame.value;
    
    // 更新源游戏FOV输入
    if (sourceGame && hasValidFOV(sourceGame)) {
        elements.sourceFovGroup.style.display = 'block';
        elements.sourceFov.value = gameDatabase[sourceGame].defaultFOV;
        elements.sourceFov.min = gameDatabase[sourceGame].minFOV;
        elements.sourceFov.max = gameDatabase[sourceGame].maxFOV;
        showFOVHint('source', sourceGame);
    } else {
        elements.sourceFovGroup.style.display = 'none';
        elements.sourceFovHint.innerHTML = '';
    }
    
    // 更新目标游戏FOV输入
    if (targetGame && hasValidFOV(targetGame)) {
        elements.targetFovGroup.style.display = 'block';
        elements.targetFov.value = gameDatabase[targetGame].defaultFOV;
        elements.targetFov.min = gameDatabase[targetGame].minFOV;
        elements.targetFov.max = gameDatabase[targetGame].maxFOV;
        showFOVHint('target', targetGame);
    } else {
        elements.targetFovGroup.style.display = 'none';
        elements.targetFovHint.innerHTML = '';
    }
}

function showFOVHint(type, game) {
    const gameData = gameDatabase[game];
    const hintElement = type === 'source' ? elements.sourceFovHint : elements.targetFovHint;
    
    if (gameData.supportsFOV) {
        hintElement.innerHTML = `
            <i class="fas fa-info-circle"></i>
            <span><strong>${gameData.name}</strong> default FOV: <strong>${gameData.defaultFOV}°</strong> (adjustable ${gameData.minFOV}°-${gameData.maxFOV}°)</span>
        `;
    } else {
        hintElement.innerHTML = `
            <i class="fas fa-lock"></i>
            <span><strong>${gameData.name}</strong> has fixed FOV: <strong>${gameData.defaultFOV}°</strong> (cannot be changed)</span>
        `;
    }
}

function renderProConfigs(gameFilter = '') {
    const filteredConfigs = gameFilter ? 
        proConfigs.filter(config => config.game === gameFilter) : 
        proConfigs;
    
    elements.configsGrid.innerHTML = filteredConfigs.map(config => `
        <div class="config-card" onclick="useProConfig('${config.game}', ${config.sensitivity}, ${config.dpi})">
            <div class="config-header">
                <div class="config-player">${config.player}</div>
                <div class="config-game">${gameDatabase[config.game].name}</div>
            </div>
            <div class="config-stats">
                <div class="config-stat">
                    <div class="config-stat-value">${config.sensitivity}</div>
                    <div class="config-stat-label">Sensitivity</div>
                </div>
                <div class="config-stat">
                    <div class="config-stat-value">${config.dpi}</div>
                    <div class="config-stat-label">DPI</div>
                </div>
                <div class="config-stat">
                    <div class="config-stat-value">${config.edpi}</div>
                    <div class="config-stat-label">eDPI</div>
                </div>
                <div class="config-stat">
                    <div class="config-stat-value">${config.role}</div>
                    <div class="config-stat-label">Role</div>
                </div>
            </div>
            <div class="config-details">
                <div class="config-role">Team: ${config.team}</div>
                <div class="config-mouse">Mouse: ${config.mouse}</div>
            </div>
        </div>
    `).join('');
}

function useProConfig(game, sensitivity, dpi) {
    // 填充表单
    elements.sourceGame.value = game;
    elements.sourceSensitivity.value = sensitivity;
    elements.dpi.value = dpi;
    
    // 更新FOV输入
    updateFOVInputs();
    
    // Scroll to converter
    document.getElementById('converter').scrollIntoView({ behavior: 'smooth' });
    
    // Show notification
    showToast(`Loaded ${gameDatabase[game].name} configuration`);
}

function showToast(message) {
    // 创建toast元素
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    // 显示动画
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // 自动隐藏
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// 事件监听器
document.addEventListener('DOMContentLoaded', function() {
    // 游戏选择变化
    elements.sourceGame.addEventListener('change', updateFOVInputs);
    elements.targetGame.addEventListener('change', updateFOVInputs);
    
    // 计算按钮
    elements.calculateBtn.addEventListener('click', function() {
        const calculation = calculateSensitivity();
        if (calculation) {
            displayResult(calculation);
        }
    });
    
    
    // 游戏筛选
    elements.gameFilter.addEventListener('change', function() {
        renderProConfigs(this.value);
    });
    
    // Input validation
    elements.sourceSensitivity.addEventListener('input', function() {
        const value = parseFloat(this.value);
        if (value !== undefined && value >= 0.001) {
            this.value = value;
        }
    });
    
    elements.dpi.addEventListener('input', function() {
        this.value = Math.max(0, parseInt(this.value) || 0);
    });
    
    elements.sourceFov.addEventListener('input', function() {
        const game = elements.sourceGame.value;
        if (game && gameDatabase[game]) {
            this.value = Math.max(gameDatabase[game].minFOV, 
                                Math.min(gameDatabase[game].maxFOV, 
                                        parseFloat(this.value) || gameDatabase[game].defaultFOV));
        }
    });
    
    elements.targetFov.addEventListener('input', function() {
        const game = elements.targetGame.value;
        if (game && gameDatabase[game]) {
            this.value = Math.max(gameDatabase[game].minFOV, 
                                Math.min(gameDatabase[game].maxFOV, 
                                        parseFloat(this.value) || gameDatabase[game].defaultFOV));
        }
    });
    
    // 初始渲染职业配置
    renderProConfigs();
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // 导航栏滚动效果
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const navbar = document.querySelector('.navbar');
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // 向下滚动
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // 向上滚动
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
});

// 全局函数（用于HTML onclick）
window.useProConfig = useProConfig;
