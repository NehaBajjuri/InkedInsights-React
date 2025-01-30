
# Inked Insights - Blog Website

## Overview

Inked Insights is a fully functional blog website where users can create, manage, and explore blogs on various topics. This platform provides an intuitive and seamless experience for content creators and readers alike, with a clean UI and a robust backend to support user interactions.

---

## Features

- **Create Blogs**: Users can write and publish their own blogs with ease.
- **Explore Blogs**: Browse blogs by categories, tags, or recent posts.
- **User Authentication**: Secure sign-up and login functionality.
- **Responsive Design**: Accessible on all devices - mobile, tablet, and desktop.
- **Dynamic UI**: Powered by React for a fast and interactive user experience.

---

## Tech Stack

### Frontend:

- **React.js**: Dynamic and responsive user interface.
- **CSS**: Styling for a modern and clean design.

### Backend:

- **Node.js**: Server-side environment.
- **Express.js**: Framework for API development.
- **MongoDB**: Database for storing blog data and user details.

---

## Installation

Follow the steps below to set up the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/NehaBajjuri/InkedInsights-React.git
   ```

2. Navigate to the project directory:

   ```bash
   cd inkedinsights
   ```

3. Install dependencies for both frontend and backend:

   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

4. Create an `.env` file in the `server` directory and add the following:

   ```env
   MONGO_URI=<Your MongoDB Connection String>
   JWT_SECRET=<Your Secret Key>
   PORT=5000
   ```

5. Start the development servers:

   ```bash
   # In the client directory
   npm start

   # In the server directory
   npm run dev
   ```

6. Open the app in your browser at `http://localhost:3000` (Frontend) and `http://localhost:5000` (Backend).

---

## Folder Structure

```plaintext
inkedinsights/
├── client/            # React frontend
│   ├── public/       # Public assets
│   ├── src/          # React components, pages, and styles
│   └── package.json  # Frontend dependencies
├── server/            # Node.js backend
│   ├── models/       # MongoDB schemas
│   ├── routes/       # API endpoints
│   ├── controllers/  # Business logic
│   └── package.json  # Backend dependencies
└── README.md          # Documentation
```

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact

For any queries or suggestions, feel free to contact:

- **Name**: Neha Bajjuri
- **GitHub**: [NehaBajjuri](https://github.com/NehaBajjuri)
- **Email**: [nehabajjuri244@gmail.com](nehabajjuri244@gmail.com)

---

Happy Blogging! ✉️

