import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Practice Server Is Running Properly!');
});

export default app;

// app.get('/', (req, res) => { ... })
// What it does: Defines a route handler for GET requests to the root path /.

// dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
// Why Use It: It prevents you from hardcoding secrets directly into your code, which is a major security risk. If you commit code to a repository (like GitHub), you don't want your secret keys exposed. You add .env to your .gitignore file to prevent it from being committed

// cors is a Node.js middleware for Express that sets CORS (Cross-Origin Resource Sharing) response headers
// Why Use It: If you have a frontend app (like Next.js) running on a different port or domain than your Express API, you'll need CORS to allow them to communicate. Without it, the browser will throw a CORS error.

// app.use(cors()); // 🌍 Allow any origin (dev-friendly)
// app.use(...) — Tells Express: "Run this middleware on every incoming request, regardless of the route or HTTP method."

// app.use(express.json());
// What it does: Registers the built-in JSON body parser middleware globally.
// express.json() — A middleware function built into Express (since v4.16) that:
// Checks if an incoming request has a Content-Type: application/json header.
// If yes, reads the raw request body stream.
// Parses the JSON string into a JavaScript object.
// Attaches it to req.body.
// Effect: In your route handlers, req.body will contain the parsed JSON object instead of undefined.