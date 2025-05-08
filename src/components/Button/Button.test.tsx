import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import { Button } from ".";

describe("Button component", () => {
    it("renders with the correct label", () => {
        const onClick = vi.fn();
        render(<Button label="Click Me" onClick={onClick} />);

        const button = screen.getByTestId("button");
        expect(button).toBeInTheDocument();
        expect(button.textContent).toBe("Click Me");
    });

    it("calls onClick when clicked", () => {
        const onClick = vi.fn();
        render(<Button label="Click Me" onClick={onClick} />);

        const button = screen.getByTestId("button");
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("applies disabled state correctly", () => {
        const onClick = vi.fn();
        render(<Button label="Click Me" onClick={onClick} disabled={true} />);

        const button = screen.getByTestId("button");
        expect(button).toBeDisabled();

        fireEvent.click(button);
        expect(onClick).not.toHaveBeenCalled();
    });
});

describe("Button component snapshot", () => {
    it("matches default snapshot", () => {
        const { container } = render(
            <Button label="Click me" onClick={() => {}} />
        );
        expect(container).toMatchSnapshot();
    });

    it("matches disabled snapshot", () => {
        const { container } = render(
            <Button label="Can't click" onClick={() => {}} disabled />
        );
        expect(container).toMatchSnapshot();
    });
});
