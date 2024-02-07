import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handlleInputChange(newValue, inputIdentifier) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            required
            onChange={(e) =>
              handlleInputChange(e.target.value, "initialInvestment")
            }
          />
        </p>
        <p>
          <label>Anual Investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            required
            onChange={(e) =>
              handlleInputChange(e.target.value, "annualInvestment")
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            required
            onChange={(e) =>
              handlleInputChange(e.target.value, "expectedReturn")
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userInput.duration}
            required
            onChange={(e) => handlleInputChange(e.target.value, "duration")}
          />
        </p>
      </div>
    </section>
  );
}
