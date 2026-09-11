# J.A.R.V.I.S. Dashboard

A futuristic, interactive dashboard inspired by the Iron Man movies' J.A.R.V.I.S. AI system. Features a sleek blue sci-fi aesthetic with real-time system monitoring and tactical displays.

## Features

✨ **Iconic JARVIS Aesthetics**
- Glowing cyan blue theme matching the Iron Man films
- Grid background with futuristic animations
- Pulsing status indicators and glowing text effects
- Flickering animations for authentic sci-fi feel

📊 **Real-Time Monitoring**
- Live system status display (CPU, Memory, Network, Storage)
- Animated status bars with fluctuating values
- Digital clock with live timestamp updates

🎯 **Tactical Display**
- Rotating radar with threat assessment
- Animated radar sweep and blip detection
- Crosshair grid system
- Real-time coordinate tracking

⚠️ **Alert System**
- Dynamic notification panel
- Color-coded alerts (success, warning, info)
- Auto-dismissing alerts after 5 seconds
- Quick system status updates

⌨️ **Interactive Command Line**
- Terminal-style command input
- Try commands: `hello`, `status`, `power`, `weather`, `help`
- Real-time command feedback

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Enjoy the JARVIS experience!

## Usage

### Commands
- **hello** - JARVIS greeting
- **status** - System status report
- **power** - Arc reactor status
- **weather** - Current weather conditions
- **help** - Command help
- Any other text for general processing

### Easter Eggs
- Press `Ctrl + ?` for system information

## File Structure

```
jarvis-dashboard/
├── index.html      # Main dashboard HTML
├── styles.css      # JARVIS styling and animations
├── script.js       # Interactive functionality
└── README.md       # This file
```

## Features Breakdown

### Styling (styles.css)
- CSS Grid layout for responsive design
- Glowing shadow effects and text effects
- Smooth animations and transitions
- Custom scrollbar styling
- Media queries for responsiveness

### HTML Structure (index.html)
- Semantic HTML5 markup
- Header with status indicators
- Three-column dashboard layout
- Footer command line interface
- Canvas-based radar display

### Interactivity (script.js)
- Real-time clock updates
- Animated radar canvas with rotating sweep
- Command line processor
- Dynamic alert system
- Fluctuating system value animations

## Customization

### Change Colors
Edit the CSS variables in `styles.css`:
- Primary glow: `#00d4ff` (cyan)
- Secondary: `#0088dd` (blue)
- Success: `#00ff41` (green)

### Add More Alerts
Use the `showAlert()` function in script.js:
```javascript
showAlert('Your message here', 'success'); // 'info', 'warning', 'success'
```

### Modify System Values
Adjust ranges and labels in the status grid section of `index.html`

## Browser Support

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Inspired By

Iron Man (2008) - Stark's AI system interface
Directors: Jon Favreau, Joss Whedon, and the MCU team

## License

MIT License - Feel free to use for personal or commercial projects

---

**"I am neither man nor machine. I am JARVIS."**

Enjoy your futuristic dashboard! 🚀
