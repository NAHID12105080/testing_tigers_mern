import express from "express";
import { Request, Response } from "express-serve-static-core";
import { z } from "zod";

const app = express();
app.use(express.json());

const sumInputSchema = z.object({
  a: z.number(),
  b: z.number(),
});

app.post("/sum", (req: any, res: any) => {
  const parsedResponse = sumInputSchema.safeParse(req.body);

  if (!parsedResponse.success) {
    return res.status(400).json({
      message: "Invalid input",
    });
  }

  const answer = parsedResponse.data.a + parsedResponse.data.b;
  res.json({ answer });
});

app.get("/sum", (req: Request, res: any) => {
  const parsedResponse = sumInputSchema.safeParse({
    a: Number(req.headers["a"]),
    b: Number(req.headers["b"]),
  });

  if (!parsedResponse.success) {
    return res.status(411).json({
      message: "Invalid input",
    });
  }

  const answer = parsedResponse.data.a + parsedResponse.data.b;
  res.json({ answer });
});

export default app;
