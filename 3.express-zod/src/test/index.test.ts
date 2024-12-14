import { describe, expect, it } from "@jest/globals";
import request from "supertest";
import app from "../index";

describe("POST /sum", () => {
  it("should return 200 and the sum of a and b", async () => {
    const response = await request(app)
      .post("/sum")
      .send({ a: 1, b: 2 })
      .expect(200);

    expect(response.body.answer).toBe(3);
  });

  it("should return 400 if a is not a number", async () => {
    await request(app)
      .post("/sum")
      .send({ a: "not a number", b: 2 })
      .expect(400);
  });
});
