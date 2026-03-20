# Healthcare Clinic Management System

A web-based clinic management system that provides patient appointment booking, doctor information, and clinic management features.

## 📋 Project Overview

This is a clinic management application built with HTML, CSS, and JavaScript. The system allows patients to view clinic information, book appointments, view available doctors, and manage their account through login and signup functionality.

## ✨ Features

- **Home Page**: Landing page with clinic information and services
- **Doctor Directory**: Browse available doctors and their specialties
- **Appointment Booking**: Schedule appointments with available doctors
- **User Authentication**: Secure login and signup functionality
- **About Section**: Learn more about the clinic
- **Contact Page**: Get in touch with the clinic
- **24/7 Availability**: Clinic operates round the clock

## 🗂️ Project Structure

```
clinic/
├── cms.html              # Main navigation and landing page
├── cms.css               # Styling for all pages
├── cms.js                # JavaScript for authentication and functionality
├── home.html             # Home page
├── doctors.html          # Doctor listing page
├── appointents.html      # Appointment booking page
├── about.html            # About clinic page
├── contact.html          # Contact information page
├── login.html            # User login page
├── signup.html           # User registration page
└── clincoutput.pdf       # Documentation/output file
```

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Storage**: Browser LocalStorage for user data persistence
- **Version Control**: Git

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server-side installation required

### Installation

1. Clone or download the repository:
   ```bash
   git clone <repository-url>
   cd clinic
   ```

2. Open the application:
   - Open `cms.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     ```
   - Navigate to `http://localhost:8000`

## 📝 Usage

### For Patients

1. **Browse Doctors**: Visit the Doctors page to see available medical professionals
2. **Book Appointment**: Use the Appointments page to schedule a visit
3. **Create Account**: Sign up with email and password
4. **Login**: Access your account with registered credentials
5. **Contact**: Reach out through the Contact page for queries

### User Authentication

- New users can register via the Signup page
- Passwords must match during registration
- Credentials are stored in browser LocalStorage
- Login validates stored credentials

## 📞 Contact Information

- **Email**: support@healthcare.com
- **Phone**: 123-456-7890
- **Hours**: Monday–Saturday, 9AM–6PM
- **Service**: Available 24/7

## 📄 License

© 2026 HealthCare. All rights reserved.

## 🤝 Contributing

Contributions are welcome. Please ensure code quality and test all features before submitting changes.

## 📌 Notes

- User data is stored locally in the browser
- Clear browser cache to reset login credentials
- Ensure JavaScript is enabled for full functionality

---

**Last Updated**: March 2026
