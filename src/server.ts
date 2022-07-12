import { app } from "./app";

const PORT = 3001;

app.listen(PORT, () => {
  console.info(`HTTP server started at port ${PORT}`);
});
