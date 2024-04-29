import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import './form.css'
const FormVal2 = () => {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
      } = useForm();

      const password = watch('password');
      

      const onSubmit = (data) => console.log(data);

  return (
    <div className='container'>
        <h1> Form Validation </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label> Name : </label>
                <input type='text' name='name' {...register('name', {required: 'Name is required'})}  />
                {errors.name && <span>{errors.name.message}</span>}
            </div>
            <div>
                <label> Email : </label>
                <input type='email' name='email'{...register('email', {required: 'Email is required', 
            pattern: {value: /\S+@\S+\.\S+/, message: 'Email is invalid'}
            })}  />
                {errors.email && <span>{errors.email.message}</span>}
            </div>
            <div>
                <label> Password : </label>
                <input type='password' name='password'{...register('password', {required: 'Password is required', 
            minLength: {value:6, message:'Password must be atleast 6 characters long'}
            })} />
                {errors.password && <span>{errors.password.message}</span>}
            </div>
            <div>
                <label> Confirm Password : </label>
                <input type='password' name='confirmPassword' {...register('confirmPassword', {required:' Confirm Password is required',
            validate: val => val === password || 'Passwords do not match'
            })} />
                {errors.confirmPassword && <span>{errors.confirmPassword.message} </span>}
            </div>
            <div>
                <label> Age : </label>
                <input type='text' name='age' {...register('age', {required: 'Age is required',
                pattern: {value: /^\d+$/, message: 'Age must be a number'},
                validate: val => parseInt(val, 10) >= 16 ? true : 'Age must be atleast 16'
            })} />
                {errors.age && <span>{errors.age.message}</span>}
            </div>
            <div>
                <label> Gender : </label>
                <select name='gender' {...register('gender', { required: 'Gender is required' })}>
                 <option value="">Select Gender</option>
                 <option value="male">Male</option>
                 <option value="female">Female</option>
                 </select>
                 {errors.gender && <span>{errors.gender.message}</span>}
            </div>
            <div><button> Submit </button></div>
        </form>
      
    </div>
  )
}

export default FormVal2
