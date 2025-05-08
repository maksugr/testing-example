import { useState, useCallback } from "react";

export function useCounter(initialCount = 0) {
    const [count, setCount] = useState(initialCount);

    const increment = useCallback(() => setCount((c) => c + 1), []);
    const decrement = useCallback(() => {
        setCount((c) => (c > 0 ? c - 1 : 0));
    }, []);
    const reset = useCallback(() => setCount(initialCount), [initialCount]);

    return { count, increment, decrement, reset };
}
