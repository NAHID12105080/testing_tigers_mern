import express from "express";
import request from "supertest";
import { describe, expect, it, vi } from "vitest";
import app from "../index";
import { prismaClient } from "../__mocks__/db";

// vi.mock("../db", () => {
//   return {
//     prismaClient: {
//       request: {
//         create: vi.fn(),
//         delete: vi.fn(),
//         count: vi.fn(),
//       },
//     },
//   };
// });
//sepearate out the logic to new __mock__ folder
vi.mock("../db");

describe("Tests the sum function", () => {
  it("should return 3 when 1 + 2", async () => {
    prismaClient.request.create.mockResolvedValueOnce({
      id: 1,
      a: 1,
      b: 2,
      answer: 3,
      type: "Sum",
    });

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

describe("Tests the multiply function", () => {
  it("should return 6 when 2 * 3", async () => {
    const res = await request(app).post("/multiply").send({
      a: 2,
      b: 3,
    });

    expect(res.body.answer).toBe(6);
    expect(res.statusCode).toBe(200);
  });
});
