# JWT Authentication in Node.js 

A simple Node.js and Express project demonstrating **JWT (JSON Web Token) authentication** with **access and refresh tokens**.

---

## **Project Overview**

This project implements a **full authentication flow** using JWT:

- **Access Token:** Short-lived token used to access protected routes.
- **Refresh Token:** Long-lived token used to obtain new access tokens.
- **Login, Protected Routes, Token Refresh, Logout** functionality.

---

### **Features**

1. **Login**
   - Users can login with a username (or email/password in real apps).
   - Generates **access token** (short-lived) and **refresh token** (long-lived).

2. **Protected Routes**
   - Example route: `/posts`.
   - Only accessible with a valid access token.

3. **Refresh Token**
   - When access token expires, clients can send refresh token to `/token`.
   - Server validates it and issues a new access token.

4. **Logout**
   - Invalidates the refresh token.

---

### **Project Flow**

1. `POST /login` → Get access + refresh tokens.  
2. `GET /posts` → Access protected content using access token.  
3. `POST /token` → Get a new access token using refresh token.  
4. `DELETE /logout` → Logout and invalidate refresh token.  

---

### **Tech Stack**

- Node.js
- Express.js
- JWT (`jsonwebtoken`)
- dotenv

---

### **Installation**

1. Clone the repository:

```bash
git clone https://github.com/yourusername/jwt-auth-node.git
cd jwt-auth-node
