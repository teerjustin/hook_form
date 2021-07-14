import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [nameTest, setNameTest] = useState("");
    const [nameTestError, setNameTestError] = useState("");

    const [lastNameTest, setLastNameTest] = useState("");
    const [lastNameTestError, setLastNameTestError] = useState("");

    const [emailTest, setEmailTest] = useState("");
    const [emailTestError, setEmailTestError] = useState("");

    const [passwordTest, setPasswordTest] = useState("");
    const [passwordTestError, setPasswordTestError] = useState("");

    const [confirmPasswordTest, setConfirmPasswordTest] = useState("");
    const [confirmPasswordTestError, setConfirmPasswordTestError] = useState("");


    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    
    const handleAnyChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Welcome", user);
    };

    const nameValidation = (e) => {
        setNameTest(e.target.value);
        if(e.target.value.length < 1) {
            setNameTestError("First Name is required!");
        } else if(e.target.value.length < 3) {
            setNameTestError("First Name must be 3 characters or longer!");
        } else if (e.target.value.length > 3) {
            setNameTestError("");
            return handleAnyChange(e);
        }
    }

    const lastNameValidation = (e) => {
        setLastNameTest(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameTestError("Last Name is required!");
        } else if(e.target.value.length < 3) {
            setLastNameTestError("Last Name must be 3 characters or longer!");
        } else if (e.target.value.length > 3) {
            setLastNameTestError("");
            return handleAnyChange(e);
        }
    }

    const emailValidation = (e) => {
        setEmailTest(e.target.value);
        if(e.target.value.length < 1) {
            setEmailTestError("Email is required!");
        } else if(e.target.value.length < 3) {
            setEmailTestError("Email must be 3 characters or longer!");
        } else if (e.target.value.length > 3) {
            setEmailTestError("");
            return handleAnyChange(e);
        }
    }

    const passwordValidation = (e) => {
        setPasswordTest(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordTestError("Password is required!");
        } else if(e.target.value.length < 3) {
            setPasswordTestError("Password must be 3 characters or longer!");
        } else if (e.target.value.length > 3) {
            setPasswordTestError("");
            return handleAnyChange(e);
        }
    }

    const confirmPasswordValidation = (e) => {
        setConfirmPasswordTest(e.target.value);
        if (e.target.value != e.target.password) {
            console.log('this should be the same');
        }
    }





    
    return(
        <div>
            <form onSubmit={ handleSubmit }>
                <div>
                    <p>
                        <label htmlFor="firstName"> First Name: </label> 
                        <input onChange={(e) => nameValidation(e)} type="text" name="firstName" />
                        {
                            nameTestError ?
                            <p style={{color:'red'}}>{ nameTestError }</p> :
                            ''
                        }
                    </p>
                    <p>
                        <label htmlFor="lastName"> Last Name: </label> 
                        <input onChange={(e) => lastNameValidation(e) } type="text" name="lastName" />
                        {
                            lastNameTestError ?
                            <p style={{color:'red'}}>{ lastNameTestError }</p> :
                            ''
                        }
                    </p>
                    <p>
                        <label htmlFor="email"> Email: </label> 
                        <input onChange={(e) => emailValidation(e) } type="text" name="email" />
                        {
                            emailTestError ?
                            <p style={{color:'red'}}>{ emailTestError }</p> :
                            ''
                        }
                    </p>
                    <p>
                        <label htmlFor="password"> Password: </label> 
                        <input onChange={(e) => passwordValidation(e) } type="password" name="password" />
                        {
                            passwordTestError ?
                            <p style={{color:'red'}}>{ passwordTestError }</p> :
                            ''
                        }
                    </p>
                    <p>
                        <label htmlFor="confirmPassword"> Confirm Password: </label> 
                        <input onSubmit={(e) => confirmPasswordValidation(e) } type="password" name="confirmPassword" />
                        {
                            confirmPasswordTestError ?
                            <p style={{color:'red'}}>{ confirmPasswordTestError }</p> :
                            ''
                        }
                    </p>
                </div>
                <input type="submit" value="create"></input>
            </form>
        </div>
    );
};
    
export default UserForm;