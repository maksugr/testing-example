import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import { Counter } from ".";

describe("Counter Component", () => {
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
});
