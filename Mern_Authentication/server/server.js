import app from "./app.js";

app.listen(process.env.PORT, () => {
  console.log(`Server Listening from port ${process.env.PORT}`);
});
