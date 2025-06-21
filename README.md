# 🛣️ Highway Delite – Notes App with OTP & Google Authentication

Highway Delite is a full-stack, mobile-friendly note-taking app that allows users to securely sign up or log in using **Email OTP verification** or **Google OAuth**. After authentication, users can create and delete personal notes. All protected actions are authorized using **JWT tokens**.

---

## ✨ Features

- ✅ Sign up/Login via **Email OTP**
- ✅ **Google OAuth** Authentication
- ✅ **JWT Authorization** for secure access
- ✅ Create and Delete personal notes
- ✅ View your **user profile** (name + email)
- ✅ Fully responsive UI (mobile-friendly)
- ✅ Beautiful UI using **ShadCN** + TailwindCSS
- ✅ Real-time feedback with toast notifications

---

## 🛠 Tech Stack

| Layer         | Tech Used                                |
|---------------|-------------------------------------------|
| Frontend      | React (TypeScript), Vite, ShadCN, Tailwind |
| Backend       | Node.js, Express (TypeScript)             |
| Auth          | SendGrid (Email OTP), Google OAuth        |
| Database      | MongoDB (Mongoose)                        |
| Auth Tokens   | JSON Web Token (JWT)                      |
| Deployment    | Vercel (Frontend), Render (Backend)       |

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/highway-delite.git
cd highway-delite

## 2. Backend Setup
cd server
npm install

## Create a .env file inside the server folder:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
SENDGRID_API_KEY=your_sendgrid_api_key
GOOGLE_CLIENT_ID=your_google_client_id

Run the server:
npm run dev

3. Frontend Setup
cd ../client
npm install

Create a .env file inside the client folder:
VITE_API_BASE_URL=http://localhost:5000/api
VITE_GOOGLE_CLIENT_ID=your_google_client_id

npm run dev

🚀 Deployment
Frontend (Vercel)

Connect repo and set VITE_API_BASE_URL, VITE_GOOGLE_CLIENT_ID

Backend (Render)

Add MONGO_URI, JWT_SECRET, SENDGRID_API_KEY, GOOGLE_CLIENT_ID

📂 Folder Structure
highway-delite/
│
├── client/              # React Frontend
│   └── src/
│       ├── pages/
│       ├── components/
│       ├── lib/
│
├── server/              # Node.js Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── middlewares/
│
└── README.md
