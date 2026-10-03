import app from "./app";

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log('Server is running properly!');
});

export default app;

// app.listen(PORT, () => { ... })
// What it does: Starts the HTTP server so it can accept incoming requests.
// app.listen(PORT, ...) — Tells Express to bind to a network port (e.g., 3000) and start listening for HTTP traffic. Before this runs, your app object is configured but not actually serving anything.