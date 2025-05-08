import { type FC } from "react";
import { Button } from "../Button";
import { useCounter } from "../../hooks/use-counter";

export interface ICounterProps {
    readonly initialCount?: number;
}

export const Counter: FC<ICounterProps> = ({ initialCount = 0 }) => {
    const { count, increment, decrement, reset } = useCounter(initialCount);

    return (
        <div data-testid="counter">
            <h2>
                Counter: <span data-testid="count-value">{count}</span>
            </h2>
            <div style={{ display: "flex", gap: "12px" }}>
                <Button
                    label="Increment"
                    onClick={increment}
                    data-testid="increment-button"
                />
                <Button
                    label="Decrement"
                    onClick={decrement}
                    data-testid="decrement-button"
                />
                <Button
                    label="Reset"
                    onClick={reset}
                    data-testid="reset-button"
                />
            </div>
        </div>
    );
};
