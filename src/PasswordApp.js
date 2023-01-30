import React, { useState } from "react";

function PasswordApp() {
  const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerSet = "abcdefghijklmnopqrstuvwxyz";
  const numberSet = "1234567890";
  const symbolSet = "~!@#$%^&*()_-/+";

  const [passBox, setPassBox] = useState(0);
  const [totalChar, setTotalChar] = useState(0);
  const [upperInput, setUpperInput] = useState();
  const [lowerInput, setLowerInput] = useState();
  const [numberInput, setNumberInput] = useState();
  const [symbolInput, setSymbolInput] = useState();

  const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet)];
  };
  // console.log(getRandomData(symbolSet));

  const generatePassword = (password = "") => {
    if (upperInput.checked) {
      password += getRandomData(upperSet);
    }
    if (lowerInput.checked) {
      password += getRandomData(lowerSet);
    }
    if (numberInput.checked) {
      password += getRandomData(numberSet);
    }
    if (symbolInput.checked) {
      password += getRandomData(symbolSet);
    }
    if (password.length < totalChar.value) {
      return generatePassword(password);
    }
    setPassBox(
      passBox(truncateString, password, totalChar.value)
    )
  };

  generatePassword();

  function truncateString(str, num){
    if(str.length >num){
        let subStr = str.substring(0, num);
        return subStr;
    }else{
        return str
    }
}
 
  return (
    <div className="main">
      <div className="box">
        <span id="pass-box">Testing</span>
        <div className="row">
          <div className="left">PassWord Length</div>
          <div className="right">
            <input
              type="number"
              name=""
              id="total-char"
              max="30"
              min="4"
              value="10"
            />
          </div>
        </div>
        <div className="row">
          <label for="upper-case">
            <div className="left">Contains Uppercase</div>
          </label>
          <div className="right">
            <input type="checkbox" name="" id="upper-case"  />
          </div>
        </div>
        <div className="row">
          <label for="lower-case">
            <div className="left">Contains Lowercase</div>
          </label>
          <div className="right">
            <input type="checkbox" name="" id="lower-case" />
          </div>
        </div>
        <div className="row">
          <label for="numbers">
            <div className="left">Contains Numbers</div>
          </label>
          <div className="right">
            <input type="checkbox" name="" id="numbers" />
          </div>
        </div>
        <div className="row">
          <label for="symbols">
            <div className="left">Contains Symbols</div>
          </label>
          <div className="right">
            <input type="checkbox" name="" id="symbols" />
          </div>
        </div>
        <div className="row">
          <button onClick={generatePassword} id="btn">
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}

export default PasswordApp;
