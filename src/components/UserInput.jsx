export default function UserInput({ userInput, onChangeInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            required
            onChange={(e) => onChangeInput(e.target.value, "initialInvestment")}
          />
        </p>
        <p>
          <label>Anual Investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            required
            onChange={(e) => onChangeInput(e.target.value, "annualInvestment")}
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
            onChange={(e) => onChangeInput(e.target.value, "expectedReturn")}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userInput.duration}
            required
            onChange={(e) => onChangeInput(e.target.value, "duration")}
          />
        </p>
      </div>
    </section>
  );
}
