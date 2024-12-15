import { describe, expect, it } from "vitest";
import request from "supertest";
import app from "../index";

describe("Tests the sum function", () => {
  it("should return 3 when 1 + 2", async () => {
    const res = await request(app).post("/sum").send({
      a: 1,
      b: 2,
    });

    expect(res.body.answer).toBe(3);
    expect(res.statusCode).toBe(200);
  });

  it("should fail when a number is too big", async () => {
    const res = await request(app).post("/sum").send({
      a: 1000001,
      b: 2,
    });

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("Invalid input");
  });
});
