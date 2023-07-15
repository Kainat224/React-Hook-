import React, { useState } from 'react';

const UseStateObject = () => {
  const [myObject, setMyObject] = useState({ companyName:'Innovative Coder', awward:'First', working:'3Years'})

  const changeObject = () => {
    setMyObject({...myObject, companyName:'Evolutionary Mind',working:'5Years'});
    
  }

  return (
    <div className='designing'>
      <h1 className='h1Design'>Name:{myObject.companyName} & Awward:{myObject.awward} Working:{myObject.working}</h1>
      <button onClick={changeObject}>Update</button>
    </div>
  )
}

export default UseStateObject
