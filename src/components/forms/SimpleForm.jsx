import React, { useState } from 'react';

const SimpleForm = () => {
    const [fname, setFname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = { fname:fname, newEmail: email, newPassword: password}
        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);
    }
    return (
        <>
            <form action='' onSubmit={submitForm} className='simpleFormStyling' >
                <div>
                    <label htmlFor="email">Full Name: </label>
                    <input type="text" name='fname' value={fname} 
                    onChange={(e) => setFname(e.target.value)} id='email' autoComplete='off'/>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name='email' value={email} 
                    onChange={(e) => setEmail(e.target.value)} id='email' autoComplete='off'/>
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name='password' value={password}
                    onChange={(e) => setPassword(e.target.value)}  id='password' autoComplete='Off' />
                </div>
                <button type='submit'>Login</button>

            </form>

        <div>
            {
                allEntry.map((x) => {
                    return (
                        <div className='showStoreData'>
                            <p>{x.fname}</p>
                            <p>{x.newEmail}</p>
                            <p>{x.newPassword}</p>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default SimpleForm
