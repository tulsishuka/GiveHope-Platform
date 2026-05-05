// import express from "express";
// import cors from "cors";

// import authRouter from "./routes/authRouter";
// import paymentRoutes from "./routes/paymentRoutes";
// import userRoutes from "./routes/user.routes";
// import charityRoutes from "./routes/charityRoutes";
// import scoreRoutes from "./routes/scoreRoutes";
// import drawRoutes from "./routes/drawRoutes";
// import prizeRoutes from "./routes/prizeRoutes";
// import resultRoutes from "./routes/resultRoutes";
// import adminRoutes from "./routes/adminRoutes";

// const app = express();

// app.use(express.json());
// app.use(cors());

// app.use("/api/v1/auth", authRouter);
// app.use("/api/payment", paymentRoutes);
// app.use("/api/user", userRoutes);
// app.use("/api/charity", charityRoutes);
// app.use("/api/score", scoreRoutes);
// app.use("/api/draw", drawRoutes);
// app.use("/api/prize", prizeRoutes);
// app.use("/api/results", resultRoutes);
// app.use("/api/admin", adminRoutes);

// export default app;
















import express from "express";
import cors from "cors";

import authRouter from "./routes/authRouter";
import paymentRoutes from "./routes/paymentRoutes";
import userRoutes from "./routes/user.routes";
import charityRoutes from "./routes/charityRoutes";
import scoreRoutes from "./routes/scoreRoutes";
import drawRoutes from "./routes/drawRoutes";
import prizeRoutes from "./routes/prizeRoutes";
import resultRoutes from "./routes/resultRoutes";
import adminRoutes from "./routes/adminRoutes";

const app = express();

// 🔥 Middleware
app.use(express.json());

// ✅ FIXED CORS (important for Render + frontend)
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5173",
      "https://your-frontend-url.onrender.com" // 👉 change this
    ],
    credentials: true,
  })
);

// Optional: allow preflight requests
app.options("*", cors());

// 🔥 Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/payment", paymentRoutes);
app.use("/api/user", userRoutes);
app.use("/api/charity", charityRoutes);
app.use("/api/score", scoreRoutes);
app.use("/api/draw", drawRoutes);
app.use("/api/prize", prizeRoutes);
app.use("/api/results", resultRoutes);
app.use("/api/admin", adminRoutes);

export default app;