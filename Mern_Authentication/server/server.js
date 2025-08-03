import app from "./app.js";

const PORT = process.env.PORT || 5000; // fallback for local dev

app.listen(PORT, () => {
  console.log(`Server Listening on port ${PORT}`);
});
