import './style.css';
import React, { useState } from 'react'

export default function Form() {

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: " "
    });

    const [submited, setSubmited] = useState(false);
    const [valid, setvalid] = useState(false);
    const handleFirstNameInputChange = (event) => {
        setValues({ ...values, firstName: event.target.value });
        console.log(values.firstName)
    };

    const handleLastNameInputChange = (event) => {
        setValues({ ...values, lastName: event.target.value });
    };

    const handleEmailInputChange = (event) => {
        setValues({ ...values, email: event.target.value })
    }

   const handleSubmit = (event) =>{
      event.preventDefault();

      if (values.email && values.firstName && values.lastName) {
          setvalid(true)
      }
      setSubmited(true);
    }
    
    return (
        <div style = {{textAlign:'center' ,marginLeft : '26em' , marginTop :'5em' }}>
        <div className ='bg-blue-600'>
        <p style={{color:'white' ,fontSize :'35px'}}>Registration Form</p>
        </div>
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm"  style = {{ height :'25em' , display : 'flex' , justifyContent:'space-around'}}>
        
        <form   onSubmit = {handleSubmit}
>                { submited && valid ?<div className="success-message bg-blue-600">Success!  Thank you for register   </div> :null}

          <div className="form-group mb-6">
            <input type="text"
            value={values.firstName}
            onChange = {handleFirstNameInputChange}
            className="form-control 
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
              aria-describedby="emailHelp" placeholder="First name" />

             {submited && !values.firstName ?  <span style={{color:'red'}}> Please enter a last name</span> :null} 

          </div>
          <div className="form-group mb-6">
            <input type="text" 
                        value={values.lastName}
                        onChange = {handleLastNameInputChange}
                        className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2"
              placeholder="Last Name" />
                           {submited && !values.lastName ?  <span style ={{color:'red'}}>Please enter a last name</span> :null} 
          </div>
         <div>
         <input type="email" 
             value={values.email}
             onChange = {handleEmailInputChange}
          className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2"
              placeholder="Email" />
                         {submited && !values.email ?  <span style ={{color:'red'}}>Please enter an email</span> :null} 


         </div>
          <button type="submit" className="
            
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            mt-9
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out">Register</button>
          
        </form>
      </div>

        </div>
    )
}
