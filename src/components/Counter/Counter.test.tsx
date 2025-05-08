import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import { Counter } from ".";

describe("Counter component", () => {
    it("renders with initial count of 0 by default", () => {
        render(<Counter />);

        const countValue = screen.getByTestId("count-value");
        expect(countValue.textContent).toBe("0");
    });

    it("renders with the provided initial count", () => {
        render(<Counter initialCount={10} />);

        const countValue = screen.getByTestId("count-value");
        expect(countValue.textContent).toBe("10");
    });

    it("increments the count when increment button is clicked", () => {
        render(<Counter initialCount={5} />);

        const incrementButton = screen.getByText("Increment");
        fireEvent.click(incrementButton);

        const countValue = screen.getByTestId("count-value");
        expect(countValue.textContent).toBe("6");
    });

    it("decrements the count when decrement button is clicked", () => {
        render(<Counter initialCount={5} />);

        const decrementButton = screen.getByText("Decrement");
        fireEvent.click(decrementButton);

        const countValue = screen.getByTestId("count-value");
        expect(countValue.textContent).toBe("4");
    });

    it("resets the count to initial value when reset button is clicked", () => {
        render(<Counter initialCount={5} />);

        const incrementButton = screen.getByText("Increment");
        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);

        const countValue = screen.getByTestId("count-value");
        expect(countValue.textContent).toBe("7");

        const resetButton = screen.getByText("Reset");
        fireEvent.click(resetButton);

        expect(countValue.textContent).toBe("5");
    });

    it("does not decrement below zero", () => {
        render(<Counter initialCount={0} />);
        const decrementButton = screen.getByText("Decrement");

        fireEvent.click(decrementButton);
        fireEvent.click(decrementButton);

        const countValue = screen.getByTestId("count-value");
        expect(countValue.textContent).toBe("0");
    });

    it("calls onChange with updated count", () => {
        const handleChange = vi.fn();

        render(<Counter initialCount={2} onChange={handleChange} />);
        const incrementButton = screen.getByText("Increment");

        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);

        expect(handleChange).toHaveBeenCalledTimes(3);
        expect(handleChange).toHaveBeenNthCalledWith(1, 2);
        expect(handleChange).toHaveBeenNthCalledWith(2, 3);
        expect(handleChange).toHaveBeenNthCalledWith(3, 4);
    });
});

describe("Counter component snapshot", () => {
    it("matches snapshot with initialCount", () => {
        const { container } = render(<Counter initialCount={42} />);
        expect(container).toMatchSnapshot();
    });
});
