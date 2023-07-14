import React, {useState} from 'react';

const UseStateArray = () => {

    const bioData = [
        {
            id:0, myName:'Innovative Coder', awward:'First'
        },
        {
            id:1, myName:'Evolutionary Mind', awward:'Second'
        },
        {
            id:2, myName:'Evo Tech', awward:'third'
        }
    ]

    const [pastVal, setPastVal] = useState(bioData);

    // console.log(bioData);
    const emptyVal = () => {
        setPastVal([]);
    }

  return (
    <>
      {/* <h1 className='h1Design'>Name: Innovative Coder & Awward:First </h1> */}
      <div className='designing'>
        {
        pastVal.map((curElm) =>  <h2 className='h1Design' key={curElm.id}>Name: {curElm.myName} & Awward: {curElm.awward} </h2>)
        }
         <button type='button' onClick={emptyVal}>Clear</button>
      </div>
    </>
  )
}

export default UseStateArray
