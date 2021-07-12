import React, { useState } from  'react';
    
    
const UserForm = (props) => {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    
    const handleAnyChange = (e) => {
        console.log(e);

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Welcome", user);
    };
    
    return(
        <div>
            <form onSubmit={ handleSubmit }>
                <div>
                    <p>
                        <label htmlFor="firstName"> First Name: </label> 
                        <input onChange={(e) => handleAnyChange(e) } type="text" name="firstName" />
                    </p>
                    <p>
                        <label htmlFor="lastName"> Last Name: </label> 
                        <input onChange={(e) => handleAnyChange(e) } type="text" name="lastName" />
                    </p>
                    <p>
                        <label htmlFor="email"> Email: </label> 
                        <input onChange={(e) => handleAnyChange(e) } type="text" name="email" />
                    </p>
                    <p>
                        <label htmlFor="password"> Password: </label> 
                        <input onChange={(e) => handleAnyChange(e) } type="password" name="password" />
                    </p>
                    <p>
                        <label htmlFor="confirmPassword"> Confirm Password: </label> 
                        <input onChange={(e) => handleAnyChange(e) } type="password" name="confirmPassword" />
                    </p>
                </div>
                <input type="submit" value="create"></input>
            </form>
            <p> First Name: {user.firstName}    </p>
            <p> Last Name: {user.lastName}  </p>
            <p> Email: {user.email} </p>
            <p> Password: {user.password}</p>
            <p> Confirm Password: {user.confirmPassword}</p>
        </div>
    );
};
    
export default UserForm;