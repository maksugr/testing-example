import { useState } from "react";
import { Counter } from "./components/Counter";

function App() {
    const [counterValue, setCounterValue] = useState(0);

    return (
        <div>
            <Counter onChange={setCounterValue} />
            {counterValue >= 10 ? (
                <div style={{ marginTop: "10px" }}>✅ {counterValue}</div>
            ) : null}
            <div
                data-testid="color-box"
                style={{
                    marginTop: "20px",
                    height: "20px",
                    width: "20px",
                    background: counterValue >= 10 ? "green" : "red",
                }}
            ></div>
        </div>
    );
}

export default App;
