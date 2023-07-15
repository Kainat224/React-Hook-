import React, {useState} from 'react';

const ShortCircuit = () => {
    const [demo, setDemo] = useState('');
    return (
    <div className='designing'>
      <h1 className='h1Design'>{ demo ||
            <>
                <h1>It's the short Circuit Method</h1>
                <p>You Can do anyThing here.</p>
            </>
      }</h1>
      <h1 className='h1Design'>{ demo && 'Evo tEch'}</h1>
    </div>
  )
}

export default ShortCircuit
