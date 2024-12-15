// import { vi } from "vitest";
//newbie way to mock prismaClient
// export const prismaClient = {
//   request: {
//     create: vi.fn(),
//     delete: vi.fn(),
//     count: vi.fn(),
//   },
// };

import { PrismaClient } from "@prisma/client";
import { mockDeep } from "vitest-mock-extended";

export const prismaClient = mockDeep<PrismaClient>();
