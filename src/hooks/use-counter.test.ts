import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./use-counter";

describe("useCounter", () => {
    it("returns default initial count 0", () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.count).toBe(0);
    });

    it("respects custom initial count", () => {
        const { result } = renderHook(() => useCounter(5));
        expect(result.current.count).toBe(5);
    });

    it("increments count", () => {
        const { result } = renderHook(() => useCounter(1));

        act(() => result.current.increment());
        expect(result.current.count).toBe(2);
    });

    it("decrements count", () => {
        const { result } = renderHook(() => useCounter(3));

        act(() => result.current.decrement());
        expect(result.current.count).toBe(2);
    });

    it("resets count to initial", () => {
        const { result } = renderHook(() => useCounter(10));

        act(() => {
            result.current.increment();
            result.current.increment();
            result.current.reset();
        });

        expect(result.current.count).toBe(10);
    });

    it("does not decrement below 0", () => {
        const { result } = renderHook(() => useCounter(1));

        act(() => {
            result.current.decrement();
            result.current.decrement();
            result.current.decrement();
        });

        expect(result.current.count).toBe(0);
    });
});
