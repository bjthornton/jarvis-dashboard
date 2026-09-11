// JARVIS Dashboard Script

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeClock();
    initializeRadar();
    initializeCommandLine();
    animateSystemValues();
});

// Clock
function initializeClock() {
    const updateClock = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        document.getElementById('timestamp').textContent = `${hours}:${minutes}:${seconds}`;
    };
    
    updateClock();
    setInterval(updateClock, 1000);
}

// Radar Canvas
function initializeRadar() {
    const canvas = document.getElementById('radarCanvas');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const maxRadius = 120;

    function drawRadar() {
        // Clear canvas
        ctx.fillStyle = 'rgba(0, 20, 40, 0.3)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw grid circles
        ctx.strokeStyle = 'rgba(0, 212, 255, 0.3)';
        ctx.lineWidth = 1;
        for (let i = 1; i <= 3; i++) {
            ctx.beginPath();
            ctx.arc(centerX, centerY, (maxRadius / 3) * i, 0, Math.PI * 2);
            ctx.stroke();
        }

        // Draw crosshairs
        ctx.strokeStyle = 'rgba(0, 212, 255, 0.5)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY - maxRadius - 20);
        ctx.lineTo(centerX, centerY + maxRadius + 20);
        ctx.moveTo(centerX - maxRadius - 20, centerY);
        ctx.lineTo(centerX + maxRadius + 20, centerY);
        ctx.stroke();

        // Draw rotating sweep
        const now = Date.now();
        const angle = (now / 3000) % (Math.PI * 2);
        ctx.strokeStyle = 'rgba(0, 212, 255, 0.6)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(
            centerX + Math.cos(angle - Math.PI / 2) * maxRadius,
            centerY + Math.sin(angle - Math.PI / 2) * maxRadius
        );
        ctx.stroke();

        // Draw random blips
        ctx.fillStyle = 'rgba(0, 255, 65, 0.8)';
        for (let i = 0; i < 5; i++) {
            const blipAngle = (angle + (i * Math.PI * 2 / 5)) % (Math.PI * 2);
            const blipDistance = maxRadius * (0.3 + Math.random() * 0.7);
            const x = centerX + Math.cos(blipAngle - Math.PI / 2) * blipDistance;
            const y = centerY + Math.sin(blipAngle - Math.PI / 2) * blipDistance;
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2);
            ctx.fill();
        }

        // Draw center dot
        ctx.fillStyle = '#00d4ff';
        ctx.beginPath();
        ctx.arc(centerX, centerY, 4, 0, Math.PI * 2);
        ctx.fill();

        requestAnimationFrame(drawRadar);
    }

    drawRadar();
}

// Command Line Input
function initializeCommandLine() {
    const input = document.getElementById('commandInput');
    
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const command = input.value.trim();
            executeCommand(command);
            input.value = '';
        }
    });
}

// Execute Commands
function executeCommand(command) {
    const lower = command.toLowerCase();
    
    if (lower.includes('hello') || lower.includes('hi')) {
        showAlert('Good day, sir. How may I be of service?', 'info');
    } else if (lower.includes('status')) {
        showAlert('All systems nominal. No threats detected.', 'success');
    } else if (lower.includes('power')) {
        showAlert('Arc reactor at 100% capacity.', 'success');
    } else if (lower.includes('help')) {
        showAlert('Try commands: hello, status, power, weather, or just chat!', 'info');
    } else if (lower.includes('weather')) {
        showAlert('Current conditions: Clear skies over Stark Tower. 72°F', 'info');
    } else if (command) {
        showAlert(`Processing: "${command}"`, 'info');
    }
}

// Show Alert
function showAlert(message, type = 'info') {
    const alertsContainer = document.querySelector('.alerts-container');
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    
    const icons = {
        'success': '✓',
        'warning': '⚠',
        'info': '⚡'
    };
    
    alert.innerHTML = `
        <span class="alert-icon">${icons[type] || '⚡'}</span>
        <span class="alert-text">${message}</span>
    `;
    
    alertsContainer.insertBefore(alert, alertsContainer.firstChild);
    
    // Remove after 5 seconds
    setTimeout(() => {
        alert.remove();
    }, 5000);
}

// Animate System Values
function animateSystemValues() {
    setInterval(() => {
        const items = document.querySelectorAll('.status-item');
        items.forEach(item => {
            const fill = item.querySelector('.status-fill');
            const value = item.querySelector('.status-value');
            
            // Random fluctuation
            const current = parseInt(fill.style.width);
            const change = (Math.random() - 0.5) * 10;
            const newValue = Math.max(20, Math.min(95, current + change));
            
            fill.style.width = newValue + '%';
            value.textContent = Math.round(newValue) + '%';
        });
    }, 2000);
}

// Easter egg: JARVIS voice commands (visual only)
document.addEventListener('keydown', (e) => {
    if (e.key === '?' && e.ctrlKey) {
        showAlert('J.A.R.V.I.S. v2.0 - Stark Industries Defense System', 'info');
    }
});
