import React, { useState } from 'react'

const Form = () => {

    const [ validity, setValidity ] = useState("");
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = () => {
        if ( name == "" || email == "" || password == "" ) {
            setValidity("Enter valid details")
        }
        else {
            console.log("The details are valid")
        }
    }

    const handleNameChange = (event) => {
        const inputValue = event.target.value;
        setName(inputValue);
    }
    const handleEmailChange = (event) => {
        const inputValue = event.target.value;
        setEmail(inputValue);
    }
    const handlePasswordChange = (event) => {
        const inputValue = event.target.value;
        setPassword(inputValue);
    }

    return (
        <div className='flex flex-col items-center justify-center p-12 gap-6'>
            <div>
                <p>Enter Full Name:</p>
                <input
                    type="text"
                    name=""
                    id=""
                    className='bg-gray-200'
                    onChange={handleNameChange}
                    value={name}
                />
            </div>
            <div>
                <p>Enter email address:</p>
                <input 
                    type="text"
                    name=""
                    id=""
                    className='bg-gray-200' 
                    onChange={handleEmailChange}
                    value={email}
                />
            </div>
            <div>
                <p>Enter password:</p>
                <input 
                    type="text"
                    name=""
                    id=""
                    className='bg-gray-200' 
                    onChange={handlePasswordChange}
                    value={password}
                />
            </div>
            <div>
                <button onClick={handleSubmit} className='text-white'>Submit Details</button>
            </div>
            <p className='text-red-400'>{validity}</p>
        </div>
    )
}

export default Form