import { describe, it, expect } from "vitest";

import { increment, decrement, reset } from ".";

describe("counterUtils", () => {
    it("increment increases number by 1", () => {
        expect(increment(0)).toBe(1);
        expect(increment(10)).toBe(11);
    });

    it("decrement decreases number by 1", () => {
        expect(decrement(0)).toBe(-1);
        expect(decrement(5)).toBe(4);
    });

    it("reset returns initial value", () => {
        expect(reset(0)).toBe(0);
        expect(reset(100)).toBe(100);
    });
});
