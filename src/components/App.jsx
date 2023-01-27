import React, { useState } from "react";

function App() {
  //1, create variable to hold the input value
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  function updateFName(event){
    const firstName = event.target.value;
    setFName(firstName);
  }

  function updateLName(event){
    const lastName = event.target.value;
    setLName(lastName);
  }
  
  return (
    <div className="container">
      <h1>Hello {fName} {lName}</h1>
      <form>
        <input name="fName" onChange={updateFName} placeholder="First Name" value={fName}/> 
        <input name="lName" onChange={updateLName} placeholder="Last Name" value={lName}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
//2, use that fName variable to input value + h1
//3, put onChange={}, use it to call setFName and setLName when values change.

export default App;
