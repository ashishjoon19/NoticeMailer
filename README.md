# 📬 **NoticeMailer**

**NoticeMailer** is a full-stack web application that allows an admin to create **notices** for employees or clients by **department**, save them to a **MongoDB** database, and automatically **send email notifications** to the matched recipients using **Nodemailer**.

---

## 📌 **Features**

✅ **Create & Send Notices** — Draft notices with heading, department, and rich content.
✅ **Role-based Recipient Filtering** — Send to `employees` by department or `clients` in bulk.
✅ **Dynamic Email Notifications** — Uses Gmail & Nodemailer with App Passwords.
✅ **MongoDB Storage** — Saves all notices for future reference.
✅ **Frontend with React + Vite** — Modern, clean, responsive UI.
✅ **Backend with Express + Mongoose** — Handles all API routes and DB logic.

---

## ⚙️ **Tech Stack**

* **Frontend:** React, Vite, Tailwind CSS
* **Backend:** Node.js, Express, Mongoose, Nodemailer
* **Database:** MongoDB (local or Atlas)
* **Mailer:** Gmail SMTP + App Password

---

## 🚀 **How to Run Locally**

### 1️⃣ **Clone the repo**

```bash
git clone https://github.com/YOUR_USERNAME/NoticeMailer.git
cd NoticeMailer
```

---

### 2️⃣ **Setup the Backend**

```bash
cd MailSetup
npm install
```

Create a `.env` in `MailSetup`:

```env
MONGO_URI=mongodb://localhost:27017/mail
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your_gmail_app_password
```

✅ **Gmail App Password:**

1. Enable **2FA** on your Google account
2. Generate an [App Password](https://myaccount.google.com/apppasswords) → select **Mail** → name it `NoticeMailer` → copy the 16-character password.

---

### 3️⃣ **Seed Users**

Run once to add test users:

```bash
node seedData.js
```

---

### 4️⃣ **Start the Backend**

```bash
npm run dev
```

Server runs at `http://localhost:5000`

---

### 5️⃣ **Run the Frontend**

Open a new terminal:

```bash
cd ../Frontend
npm install
npm run dev
```

Frontend runs at `http://localhost:5173`

---

## ✅ **How It Works**

1. Admin creates a notice with type (`employees` or `clients`), department, heading, and content.
2. Backend filters `User` collection:

   * `role: employee` + `department` if `employees`
   * `role: client` if `clients`
3. Backend saves the notice and sends email to matched recipients.
4. MongoDB stores all notices.
5. Recipients receive the notice via Gmail SMTP.

---

## 🔒 **Security**

* Uses Gmail App Password — your main password is never stored.
* `.env` file keeps secrets local — **never commit it to GitHub**.
* Uses `cors` and `express.json` for clean API handling.

---

## 🗂️ **Folder Structure**

```
NoticeMailer/
├── Frontend/        # React + Vite + Tailwind
│   ├── src/
│   └── package.json
├── MailSetup/       # Express API + Mongoose + Nodemailer
│   ├── models/
│   │   ├── notice.model.js
│   │   └── User.model.js
│   ├── Routes/
│   │   └── noticeroutes.js
│   ├── utils/
│   │   └── email.js
│   ├── server.js
│   ├── seedData.js
│   ├── .env         # Not committed!
│   └── package.json
```

---

## 📨 **API Endpoints**

| Method | Endpoint                    | Description                    |
| ------ | --------------------------- | ------------------------------ |
| POST   | `/api/notices`              | Create new notice + send email |
| GET    | `/api/notices` *(optional)* | Future: Get all notices        |

---

## 🧩 **Improvements**

* [ ] Add **authentication** for admins.
* [ ] Add a **View Notices** page in the frontend.
* [ ] Add attachments to emails.
* [ ] Deploy to **Render/Netlify/Vercel + MongoDB Atlas**.

---

## 🙌 **Contributing**

PRs welcome! Please open an issue first to discuss any big changes.

---

## 📄 **License**

This project is open source and free for educational or personal use.

---

## ✨ **Acknowledgements**

* Built with 💙 using **React**, **Express**, **MongoDB**, **Nodemailer**, and **Vite**.

---
