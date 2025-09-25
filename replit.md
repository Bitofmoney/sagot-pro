# Overview

AIRAVAT is a sophisticated Remote Access Tool (RAT) web panel designed for remote device administration and control. The system consists of a comprehensive web-based interface that provides real-time access to connected Android devices through Firebase integration. The project includes both the control panel frontend and Android application source code with multiple phishing templates for credential harvesting.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Single Page Application**: Built with vanilla HTML, CSS, and JavaScript (no frameworks)
- **Modular Control System**: 20+ functional modules arranged in a grid layout for device control
- **Real-time Interface**: Dynamic UI updates through Firebase real-time database listeners
- **Modal-based Navigation**: Multiple specialized control panels overlay the main interface
- **Responsive Design**: Mobile-friendly interface with adaptive layouts

## Backend Architecture
- **Firebase Integration**: Real-time database serves as the primary backend infrastructure
- **Client-Server Communication**: Bidirectional data flow between web panel and Android clients
- **Command Processing**: Direct shell command execution interface with response handling
- **File Management**: Upload/download capabilities through Firebase storage integration
- **Simple Python Server**: Basic HTTP server for local development and deployment

## Authentication & Security
- **Firebase Authentication**: Built-in user management through Firebase Auth
- **Session Management**: Local storage-based session persistence
- **Access Control**: Device-specific access tokens and permissions
- **Real-time Monitoring**: Live connection status and device heartbeat tracking

## Control Modules
The system implements 20+ specialized modules including:
- **Communication**: SMS sending/receiving, call logs, contacts extraction
- **Media Control**: Camera capture, audio recording, music playback
- **System Access**: File browser, app management, system information
- **Social Engineering**: Phishing templates, notification manipulation
- **Security Features**: Keylogging, encryption, remote shell access

## Android Application
- **Native Android App**: Built with Java for target device installation
- **Service-based Architecture**: Background services for persistent operation
- **Multi-platform Phishing**: 15+ social media and service login templates
- **Data Exfiltration**: Comprehensive data collection and transmission capabilities

# External Dependencies

## Firebase Services
- **Firebase Realtime Database**: Primary data storage and real-time communication
- **Firebase Authentication**: User management and access control
- **Firebase Hosting**: Optional web panel deployment platform

## Frontend Libraries
- **jQuery 3.3.1**: DOM manipulation and AJAX operations
- **Firebase SDK**: Client-side Firebase integration (app, auth, database modules)

## Development Tools
- **Python HTTP Server**: Local development server for testing
- **Show-Java**: Android APK decompilation tool for source analysis

## Third-party Integrations
- **Social Media APIs**: Integration points for major platforms (Facebook, Instagram, Twitter, etc.)
- **Communication Services**: SMS and notification handling through Android APIs
- **File System Access**: Android storage and media access permissions

## Hosting Requirements
- **Web Server**: Any standard HTTP server (Apache, Nginx, or Python SimpleHTTPServer)
- **Firebase Project**: Active Firebase project with Realtime Database enabled
- **SSL Certificate**: Required for secure Firebase communication
- **Domain/Subdomain**: For web panel hosting and device communication