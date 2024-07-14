<div align="center">
  <br />
    <h1 align="center">ProMedix</h1>
    <img src="https://github.com/user-attachments/assets/2a89d93b-d8d6-4301-9956-f862eeb8a52b" alt="adminDas" />
  <br />
  <h3 align="center">A HealthCare Management System</h3>
  
  <div align="center">
    Building a healthcare platform that streamlines patient registration, appointment scheduling, and medical records, and learn to implement complex forms and SMS notifications.
  </div>

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
  </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🔗 [Credits](#credits)

## <a name="introduction">🤖 Introduction</a>

A healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors, featuring administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications, all built using Next.js.

If you're getting started and need assistance or face any bugs, kindly open a new issue and I'm more than happy to help you. Moreover, if you have more amazing ideas to innovate this product do reach out to me on twitter: 
[![Twitter Badge](https://img.shields.io/badge/-@BharatPaliwal23-1ca0f1?style=flat&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/BharatPaliwal23)](https://twitter.com/BharatPaliwal23)



## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- Appwrite
- Typescript
- TailwindCSS
- ShadCN
- Twilio


## <a name="features">🔋 Features</a>

👉 **Register as a Patient**: Users can sign up and create a personal profile as a patient.

👉 **Book a New Appointment with Doctor**: Patients can schedule appointments with doctors at their convenience and can book multiple appointments.

👉 **Manage Appointments on Admin Side**: Administrators can efficiently view and handle all scheduled appointments.

👉 **Confirm/Schedule Appointment from Admin Side**: Admins can confirm and set appointment times to ensure they are properly scheduled.

👉 **Cancel Appointment from Admin Side**: Administrators have the ability to cancel any appointment as needed.

👉 **Send SMS on Appointment Confirmation**: Patients receive SMS notifications to confirm their appointment details.

👉 **Complete Responsiveness**: The application works seamlessly on all device types and screen sizes.

👉 **File Upload Using Appwrite Storage**: Users can upload and store files securely within the app using Appwrite storage services.

👉 **Manage and Track Application Performance Using Sentry**: The application uses Sentry to monitor and track its performance and detect any errors.

and many more, including code architecture and reusability


## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/bharatpaliwal-169/HMS.git
cd healthcare
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
#APPWRITE
NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
PROJECT_ID=
API_KEY=
DATABASE_ID=
PATIENT_COLLECTION_ID=
APPOINTMENT_COLLECTION_ID=
NEXT_PUBLIC_BUCKET_ID=

NEXT_PUBLIC_ADMIN_PASSKEY=111111
```

Replace the placeholder values with your actual Appwrite credentials. You can obtain these credentials by signing up on the [Appwrite website](https://appwrite.io/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.


## <a name="credits">🔗 Credits</a>

- Huge Thanks to <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a> for bringing out the most from the Next.js and helping devs to learn new tech.

