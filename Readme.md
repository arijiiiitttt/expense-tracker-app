# 💰 Expense Tracker Web App

![App Screenshot](/assets/images/screenshot.png) <!-- Add your screenshot path here -->

A beautiful and secure expense tracking web application with user authentication, built with HTML, CSS, and JavaScript, deployed on Vercel.

## ✨ Features

- 🔒 Secure user authentication system
- 📊 Visual expense tracking dashboard
- 📅 Date-based expense filtering
- 🏷️ Category-based expense organization
- 📱 Fully responsive design
- 💾 Local storage for data persistence
- 🎨 Modern UI with smooth animations

## 🚀 Quick Start

1. **Access the app**:  
   Visit [your-vercel-app.vercel.app]()

2. **Test credentials**:  
create your account and use it to track your expenses...

## 🛠️ Project Structure


## 🔐 Authentication Flow

```mermaid
sequenceDiagram
    User->>+root.html: Access app
    root.html->>+LocalStorage: Check auth
    alt Authenticated
        LocalStorage-->>-root.html: User data
        root.html->>+exp.html: Redirect
    else Not Authenticated
        root.html->>+login.html: Redirect
        login.html->>User: Show login form
        User->>auth.js: Submit credentials
        auth.js->>LocalStorage: Store session
        auth.js->>exp.html: Redirect
    end

 # Clone repository
git clone https://github.com/yourusername/expense-tracker.git

# Navigate to project
cd expense-tracker

# Open in browser (no build needed)
open root.html

## 🌐 Deployment
Deployed automatically on Vercel with zero configuration through the vercel.json file.

## 🤝 Contributing
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some amazing feature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

## 📄 License
Distributed under the MIT License. See LICENSE for more information.

Made with ❤️ by [arijiiiitttt] 