import React, { useState } from "react";
import {numbers, upperCaseletters, lowerCaseLetters, specialCharacters} from './Characters'

function Pass() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(20);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [numberSet, setNumberSet] = useState(false);
  const [symbolSet, setSymbolSet] = useState(false);

  function handleClick(e){
    let characterList = ''

    if(upperCase){
        characterList += upperCaseletters
    }
    if(lowerCase){
        characterList += lowerCaseLetters
    }
    if(numberSet){
        characterList += numbers
    }
    if(symbolSet){
        characterList += specialCharacters
    }

    setPassword(createpassword(characterList))
  }

  const createpassword = (characterList) => {
let password = ``
const characterListLength = characterList.length

for(let i = 0; i < passwordLength; i++){
    const characterIndex = Math.round(Math.random() * characterListLength)
    password = password +characterList.charAt(characterIndex)
}
return password
  }
  return (
    <div className="App">
      <div className="container">
        <div className="generator">
          <h2 className="generate_header">PassWord Generator</h2>
          <div className="generator_password">
            <h3>{password}</h3>
            <button className="copy__btn">
           <i className="far fa-clipboard"></i>
          </button>
          </div>
         
          <div className="form-group">
            <label for="pass-length">PassWord length</label>
            <input
              defaultValue={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
              type="number"
              id="pass-length"
              name="pass-length"
              max="20"
              min="4"
            />
          </div>

          <div className="form-group">
            <label for="upper-case">Contains UpperCase</label>
            <input
              checked={upperCase}
              onChange={(e) => setUpperCase(e.target.checked)}
              type="checkbox"
              id="upper-case"
              name="upper-case"
              max="20"
              min="10"
            />
          </div>
          <div className="form-group">
            <label for="lower-case">Contains LowerCase</label>
            <input
              checked={lowerCase}
              onChange={(e) => setLowerCase(e.target.checked)}
              type="checkbox"
              id="lower-case"
              name="lower-case"
              max="20"
              min="10"
            />
          </div>
          <div className="form-group">
            <label for="numbers">Contains Numbers</label>
            <input
              checked={numberSet}
              onChange={(e) => setNumberSet(e.target.checked)}
              type="checkbox"
              id="numbers"
              name="numbers"
              max="20"
              min="10"
            />
          </div>
          <div className="form-group">
            <label for="symbols">Contains Symbols</label>
            <input
              checked={symbolSet}
              onChange={(e) => setSymbolSet(e.target.checked)}
              type="checkbox"
              id="symbols"
              name="symbols"
              max="20"
              min="10"
            />
          </div>
          <button onClick={handleClick} className="generate-btn">
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}
export default Pass;
