import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
function App() {
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
        [inputIdentifier]: +newValue,
      };
    });
  }

  const inputIsValid = userInput.duration > 0;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handlleInputChange} />
      {!inputIsValid && <p>Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
