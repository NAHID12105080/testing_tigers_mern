import express from "express";
import request from "supertest";
import { describe, expect, it, vi } from "vitest";
import app from "../index";
import { prismaClient } from "../db";

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

vi.mock("../db");

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
