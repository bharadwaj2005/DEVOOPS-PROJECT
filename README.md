# 🏥 E-Hospital Management System

A web-based E-Hospital platform that enables seamless communication and operations between patients, doctors, lab admins, pharmacists, and billing departments — all under one digital ecosystem.

---

## 📌 Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [User Roles](#user-roles)
- [How It Works](#how-it-works)
- [Screenshots](#screenshots)
- [Setup Instructions](#setup-instructions)
- [Folder Structure](#folder-structure)
- [Contributors](#contributors)

---

## ✨ Features

✔️ Role-based login and dashboard access  
✔️ Patients can book appointments and view prescriptions  
✔️ Doctors can approve/reject appointments and write prescriptions  
✔️ Pharmacists can view prescriptions and print them  
✔️ Lab Admins and Billing staff modules included (expandable)  
✔️ Data persistence via `localStorage` for demo purpose  
✔️ Single Page Application (SPA) style UI with Bootstrap

---

## 🧑‍💻 Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript  
- **UI Framework**: Bootstrap 5  
- **State Management**: Browser `localStorage` & `sessionStorage`  
- **No backend**: Ideal for frontend or academic demos

---

## 👥 User Roles

| Role         | Access / Features                                            |
|--------------|--------------------------------------------------------------|
| Patient      | Book appointments, view prescriptions and lab results       |
| Doctor       | Manage appointments, write and store prescriptions          |
| Pharmacist   | View prescriptions, print prescriptions                     |
| Lab Admin    | (Coming soon) Upload lab results                            |
| Billing Staff| (Coming soon) Generate bills based on service records       |

---

## 🔄 How It Works

1. **Homepage** → Users select their role and log in
2. **Session-based Login** → User is redirected to their role dashboard
3. **Patients** book appointments, **Doctors** manage requests
4. Prescriptions are stored and shared using `localStorage`
5. Pharmacists can access and print prescriptions from their dashboard

---

## 📸 Screenshots

| ![Patient Dashboard](screenshots/patient_dashboard.png) | ![Doctor Dashboard](screenshots/doctor_dashboard.png) |
|---------------------------------------------------------|--------------------------------------------------------|

---

## ⚙️ Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/Chanduparipelli/E-Hospital.git
cd E-Hospital
Open index.html in your browser

Use the following demo credentials to log in:

Role	Email	Password
Patient	patient@example.com	patient123
Doctor	doctor@example.com	doctor123
Pharmacist	pharma@example.com	pharma123

🗂 Folder Structure
cpp
Copy
Edit
E-Hospital/
├── index.html
├── doctor.html
├── patient.html
├── pharmacist.html
├── lab.html
├── billing.html
├── style.css (optional)
└── assets/ (optional: screenshots, icons, etc.)
👨‍💼 Contributors
👤 Chandu Paripelli — Developer

💡 You! Feel free to fork and contribute!

📢 Feedback & Suggestions
Have ideas to improve this project?
Open an issue or drop a suggestion — we’d love to hear from you!!!!!!!

