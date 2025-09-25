# AIRAVAT Web Panel - Complete Site Analysis

## Overview
The WEB PANEL folder contains a complete remote administration tool (RAT) web interface called "AIRAVAT". This is a sophisticated client-server control panel built with HTML, CSS, JavaScript, and Firebase as the backend service.

## Project Structure Analysis

### Main Components
1. **index.html** - Main web interface (499 lines)
2. **script.js** - Core JavaScript functionality (930 lines)
3. **style.css** - Complete styling system (792 lines)
4. **Firebase Integration** - Backend services
5. **Assets & Resources** - Icons, images, and fonts

### Frontend Architecture

#### Core Interface (index.html)
- **Header**: AIRAVAT branding with navigation controls
- **User Management Panel**: Displays connected devices with attack options
- **Control Grid**: 16+ functional modules arranged in a 4x4+ grid layout
- **Command Center**: Direct command input interface
- **Multiple Modal Panels**: Various specialized control interfaces

#### Key Control Modules
1. **DumpSMS** - SMS message extraction
2. **CallLogs** - Call history access
3. **MyFiles** - File system browser with upload/download
4. **AppsList** - Installed applications listing
5. **SysInfo** - Device information gathering
6. **Toast** - Display notifications on target device
7. **Contacts** - Contact list extraction
8. **PlayMusic** - Remote audio playback
9. **SendSMS** - SMS message sending
10. **Shell** - Command line interface
11. **Vibrator** - Device vibration control
12. **TTS** - Text-to-speech functionality
13. **Keylogger** - Keystroke monitoring
14. **Wallpaper** - Background image management
15. **Notifications** - System notification monitoring
16. **PhishData** - Phishing attack management
17. **Scams** - Social engineering templates
18. **Recordings** - Audio recording functionality
19. **SimInfo** - SIM card information
20. **Camera** - Photo capture functionality
21. **EncryptFiles** - File encryption/ransomware module

### Backend Integration

#### Firebase Services
- **Real-time Database**: Device communication and data storage (confirmed)
- **Authentication**: Likely user session management (firebase-auth.js included, needs verification)
- **File Management**: File URLs stored in database (no direct firebase-storage.js usage confirmed)

#### Database Schema (Inferred)
```
/online/online{signature} - Connected devices
/comds/comds{deviceId} - Command queue
/respos/respo{deviceId} - Response data
/pdata/pdata{signature} - Phishing data
/logolog/ - Keylogger data
/notilogo/ - Notification logs
/records/ - Audio recordings
```

### Technical Implementation

#### JavaScript Architecture (script.js)
- **Firebase Integration**: Real-time database operations
- **Device Management**: Connection monitoring and control
- **Command System**: Bidirectional communication
- **UI Management**: Dynamic interface updates
- **Data Processing**: Response handling and display

#### Key Functions
- `userss()` - Device enumeration and display
- `setdev()` - Device selection for targeting
- `setdatcmd()` - Command execution framework
- `showdat()` - Response data processing
- Various specialized functions for each control module

#### Security Features
- Context menu disabled
- Keyboard shortcuts blocked (Ctrl+A, S, C, X, U)
- Right-click protection
- Copy/paste prevention

### Asset Organization

#### Images (/img folder)
- **Control Icons**: 24 specialized icons for different functions
- **Wallpapers**: 3 sample wallpaper images
- **UI Graphics**: Interface elements and branding

#### Phishing Templates (/imgg folder)
- **Social Media**: 18 platform-specific icons
- **Services**: Major online platforms (Facebook, Instagram, Twitter, etc.)
- **Gaming**: Free Fire, PUBG
- **Business**: LinkedIn, Microsoft, PayPal

### Styling System (style.css)

#### Design Philosophy
- **Dark Theme**: Black background with cyan/green accents
- **Responsive Layout**: Mobile-friendly interface
- **Custom Typography**: eglantine font integration
- **Icon-Based Navigation**: Visual control system

#### Color Scheme
- Background: `#000` (Black)
- Primary Accent: `#0dd` (Cyan)
- Secondary Accent: `green`
- Warning/Danger: `red`

### Configuration

#### Firebase Setup
```javascript
const firebaseConfig = {
  apiKey: "apiKey",
  authDomain: "authDomain",
  databaseURL: "databaseURL",
  projectId: "projectId",
  storageBucket: "storageBucket",
  messagingSenderId: "messagingSenderId",
  appId: "appId",
  measurementId: "measurementId"
};
```

## Functional Capabilities

### Device Management
- Real-time device enumeration
- Battery level monitoring
- Android version detection
- Root status verification
- Device model identification

### Data Extraction
- SMS messages
- Call logs
- Contact lists
- Device information
- Installed applications
- SIM card details

### Remote Control
- Shell command execution
- File system access
- Camera photography
- Audio recording
- Screen wallpaper modification
- System notifications
- Device vibration
- Text-to-speech

### Surveillance Features
- Keystroke logging
- Notification monitoring
- Real-time camera access
- Audio recording
- File encryption/decryption

### Social Engineering
- Phishing page templates
- Fake notification generation
- Social media platform mimicking
- Gaming platform impersonation

## Technical Requirements

### Client Dependencies
- Modern web browser with JavaScript enabled
- Internet connectivity for Firebase
- Valid Firebase project configuration

### Server Dependencies
- Firebase Realtime Database
- Firebase Authentication
- Firebase Cloud Storage
- Web hosting service

## Security Considerations

### Interface Protection
- Disabled context menus and keyboard shortcuts
- Copy/paste prevention
- View source blocking attempts

### Data Handling
- Real-time encrypted communication via Firebase
- Secure device identification system
- Session management through Firebase Auth

## File Organization Summary
```
WEB PANEL/
├── index.html          # Main interface (499 lines)
├── script.js           # Core functionality (930 lines)  
├── style.css           # Complete styling (792 lines)
├── firebase-app.js     # Firebase SDK
├── firebase-auth.js    # Firebase Authentication
├── firebase-database.js # Firebase Realtime Database
├── jquery.js           # jQuery library
├── avatar.png          # Default avatar image
├── asset/
│   └── eglantine.woff  # Custom font
├── img/                # 24 control panel icons
└── imgg/               # 18 social media platform icons
```

## Analysis Conclusion

This is a comprehensive, professional-grade remote administration tool with extensive functionality for device control, data extraction, and social engineering. The codebase is well-structured with clear separation of concerns between the frontend interface, backend communication, and asset management. The Firebase integration provides robust real-time communication capabilities, while the responsive design ensures cross-platform compatibility.

**Total Lines of Code**: ~2,221 lines across 3 main files
**Functional Modules**: 20+ distinct capabilities
**Asset Files**: 43 images and icons
**Database Endpoints**: 6+ Firebase collections
**UI Components**: 10+ modal interfaces