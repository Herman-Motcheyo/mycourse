<form className="register-form" onSubmit = {handleSubmit}>
{ submited && valid ?<div className="success-message">Success!  Thank you for register   </div> :null}
<input
    onChange={handleFirstNameInputChange}
    value={values.firstName}
    className='form-field'
    placeholder="First Name"
    name="firstName" />
{submited && !values.firstName ?  <span>Please nter a last name</span> :null} 
<input
onChange= {handleLastNameInputChange}
    value={values.lastName}
    className='form-field'
    placeholder="Last Name"
    name="lastName  " />
{submited && !values.lastName ?  <span>Please nter a last name</span> :null} 

<input
onChange = {handleEmailInputChange} 
    value={values.email}
    className='form-field'
    placeholder="Email"
    name="email  " />
{submited && !values.email ?  <span>Please nter an email</span> :null} 
<button className="form-field "
    type="submit">Register</button>
</form>