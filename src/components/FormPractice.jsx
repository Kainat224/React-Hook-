import React, { useState } from 'react';
// import ReactDOM from "react-dom/client";

const FormPractice = () => {
    
    const [fillVal, setFillVal] = useState('Fill Your Form');
    const congVal = (e) => {
        e.preventDefault(); //Prevent us from page reloding
        setFillVal('Congratulations Your Form is submitted');
    }

  return (
    <>
    <form className='designing'>
      <h1>Submit a Form</h1>
      <label htmlFor="email">Email: {" "}
      <input type="text" name='email' id='email' />
      </label>
      <br/>
      <label>Enter your name: {" "}
      <input 
        type="text" 
        name="username" 
        // value={inputs.username || ""} 
        // onChange={handleChange}
      />
      </label>
      <br/>
      <label>Enter your age: {" "}
        <input 
          type="number" 
          name="age" 
        //   value={inputs.age || ""} 
        //   onChange={handleChange}
        />
        </label>
        <br />
        <input type="submit" onClick={congVal}/>
        <br/>
        <h3>{fillVal}</h3>
    </form>
    </>
  )
}

export default FormPractice
