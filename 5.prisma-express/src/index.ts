import express from "express";
import { prismaClient } from "./db";

const app = express();
app.use(express.json());

app.post("/sum", (req: any, res: any) => {
  const a = req.body.a;
  const b = req.body.b;

  if (a > 1000000 || b > 1000000) {
    return res.status(400).json({
      message: "Invalid input",
    });
  }
  const result = a + b;
  prismaClient.request.create({
    data: {
      a: a,
      b: b,
      answer: result,
      type: "Sum",
    },
  });
  res.json({ answer: result });
});

app.post("/multiply", (req: any, res: any) => {
  const a = req.body.a;
  const b = req.body.b;
  const result = a * b;
  prismaClient.request.create({
    data: {
      a: a,
      b: b,
      answer: result,
      type: "Multiply",
    },
  });
  res.json({ answer: result });
});

export default app;
