import React, { useState, useEffect } from 'react'
import './form.css'
const FormVal = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        age: '',
        gender: ''
    });
    const [error, setError] = useState();
    const handleInput = (e) => {
        const {name, value} = e.target;
        setFormData({...formData,
            [name]: value
        }
        )
    }
    const validateForm = () => {
        const errors = {};
        if(!formData.name) {
            errors.name = 'Name is Required';
        }
        if(!formData.email) {
            errors.email = 'Email is Required';
        }
        else if(!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is Invalid';
        }
        if(!formData.password) {
            errors.password = 'Password is Required';
        }
        else if(formData.password.length < 6) {
            errors.password = 'Password must be atleast 6 characters long';
        }
        if(!formData.confirmPassword) {
            errors.confirmPassword = 'Password is Required';
        }
        else if(formData.password != formData.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }
        if(!formData.age) {
            errors.age= 'Age is Required';
        }
        else if(isNaN(formData.age) || formData.age < 16) {
            errors.age= 'Age must be a number and greater than 15';
        }
        if(!formData.gender) {
            errors.age= 'Gender is Required';
        }
        return errors;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if(Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            console.log(error);
        }
        else {
            console.log('Form is successfully submitted !');
        }
    }
    useEffect(() => {
        console.log(error);
    }, [error]);
  return (
    <div className='container'>
        <h1> Form Validation </h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label> Name : </label>
                <input type='text' name='name' onChange={handleInput}/>
            </div>
            <div>
                <label> Email : </label>
                <input type='email' name='email' onChange={handleInput}/>
            </div>
            <div>
                <label> Password : </label>
                <input type='password' name='password' onChange={handleInput}/>
            </div>
            <div>
                <label> Confirm Password : </label>
                <input type='password' name='confirmPassword' onChange={handleInput}/>
            </div>
            <div>
                <label> Age : </label>
                <input type='text' name='age' onChange={handleInput}/>
            </div>
            <div>
                <label> Gender : </label>
                <select name='gender' onChange={handleInput}>
                    <option value="" > Select Gender </option>
                    <option value="male" > Male </option>
                    <option value="female" > Female </option>
                </select>
            </div>
            <div><button> Submit </button></div>
        </form>
      
    </div>
  )
}

export default FormVal
