<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Highway Delite - Notes App README</title>
  <style>
    body {
      font-family: system-ui, sans-serif;
      line-height: 1.6;
      max-width: 800px;
      margin: 2rem auto;
      padding: 0 1rem;
    }
    h1, h2, h3 {
      color: #1e40af;
    }
    pre {
      background-color: #f3f4f6;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 0.5rem;
    }
    code {
      background-color: #f3f4f6;
      padding: 0.2rem 0.4rem;
      border-radius: 0.3rem;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 2rem;
    }
    th, td {
      border: 1px solid #d1d5db;
      padding: 0.5rem;
      text-align: left;
    }
    th {
      background-color: #e5e7eb;
    }
    ul {
      list-style-type: disc;
      margin-left: 1.5rem;
    }
    hr {
      margin: 2rem 0;
    }
  </style>
</head>
<body>

  <h1>🛣️ Highway Delite – Notes App with OTP & Google Authentication</h1>

  <p>
    Highway Delite is a full-stack, mobile-friendly note-taking app that allows users to securely sign up or log in using <strong>Email OTP verification</strong> or <strong>Google OAuth</strong>. After authentication, users can create and delete personal notes. All protected actions are authorized using <strong>JWT tokens</strong>.
  </p>

  <hr/>

  <h2>✨ Features</h2>
  <ul>
    <li>✅ Sign up/Login via <strong>Email OTP</strong></li>
    <li>✅ <strong>Google OAuth</strong> Authentication</li>
    <li>✅ <strong>JWT Authorization</strong> for secure access</li>
    <li>✅ Create and Delete personal notes</li>
    <li>✅ View your <strong>user profile</strong> (name + email)</li>
    <li>✅ Fully responsive UI (mobile-friendly)</li>
    <li>✅ Beautiful UI using <strong>ShadCN</strong> + TailwindCSS</li>
    <li>✅ Real-time feedback with toast notifications</li>
  </ul>

  <hr/>

  <h2>🛠 Tech Stack</h2>
  <table>
    <thead>
      <tr>
        <th>Layer</th>
        <th>Tech Used</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Frontend</td><td>React (TypeScript), Vite, ShadCN, Tailwind</td></tr>
      <tr><td>Backend</td><td>Node.js, Express (TypeScript)</td></tr>
      <tr><td>Auth</td><td>SendGrid (Email OTP), Google OAuth</td></tr>
      <tr><td>Database</td><td>MongoDB (Mongoose)</td></tr>
      <tr><td>Auth Tokens</td><td>JSON Web Token (JWT)</td></tr>
      <tr><td>Deployment</td><td>Vercel (Frontend), Render (Backend)</td></tr>
    </tbody>
  </table>

  <hr/>

  <h2>📦 Installation & Setup</h2>

  <h3>1. Clone the Repository</h3>
  <pre><code>git clone https://github.com/your-username/highway-delite.git
cd highway-delite</code></pre>

  <h3>2. Backend Setup</h3>
  <pre><code>cd server
npm install</code></pre>

  <p><strong>Create a <code>.env</code> file inside the <code>server</code> folder:</strong></p>
  <pre><code>PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
SENDGRID_API_KEY=your_sendgrid_api_key
GOOGLE_CLIENT_ID=your_google_client_id</code></pre>

  <p><strong>Run the server:</strong></p>
  <pre><code>npm run dev</code></pre>

  <h3>3. Frontend Setup</h3>
  <pre><code>cd ../client
npm install</code></pre>

  <p><strong>Create a <code>.env</code> file inside the <code>client</code> folder:</strong></p>
  <pre><code>VITE_API_BASE_URL=http://localhost:5000/api
VITE_GOOGLE_CLIENT_ID=your_google_client_id</code></pre>

  <p><strong>Run the frontend:</strong></p>
  <pre><code>npm run dev</code></pre>

  <hr/>

  <h2>🚀 Deployment</h2>

  <h3>Frontend (Vercel)</h3>
  <ul>
    <li>Connect your repo</li>
    <li>Set environment variables:
      <ul>
        <li><code>VITE_API_BASE_URL</code></li>
        <li><code>VITE_GOOGLE_CLIENT_ID</code></li>
      </ul>
    </li>
  </ul>

  <h3>Backend (Render)</h3>
  <ul>
    <li>Add environment variables:
      <ul>
        <li><code>MONGO_URI</code></li>
        <li><code>JWT_SECRET</code></li>
        <li><code>SENDGRID_API_KEY</code></li>
        <li><code>GOOGLE_CLIENT_ID</code></li>
      </ul>
    </li>
  </ul>

  <hr/>

  <h2>📂 Folder Structure</h2>
  <pre><code>highway-delite/
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
└── README.md</code></pre>

</body>
</html>
