import React from 'react'
import './first.css'

function First() {

  return (
    <>
     
    <h2 className='ab'><u>Registration Form</u></h2>
    <div className='fom'>
    <form><br></br>
       <label for="name"> First Name : </label>
       <input type='text' id='name'  ></input><br></br><br></br>

       <label for="name2"> Last Name : </label>
       <input type='text' id='name2'  ></input><br></br><br></br>

       <label for="email"> Email : </label>
       <input type='text' id='email'  ></input><br></br><br></br>
       
       <label for="pass"> Password : </label>
       <input type='text' id='pass' ></input><br></br><br></br>

       <label for="dob"> Date of Birth : </label>
       <input type='num' id='dob' ></input><br></br><br></br>

       <label>Gender : </label>
       <label for="male">Male</label>
       <input type="radio" id="male" name="gender" value="male"></input>
  
       <label for="female">Female</label>
       <input type="radio" id="female" name="gender" value="female"></input><br></br><br></br>

       <label for="mob"> mobile: </label>
       <input type="text" id="mob" ></input><br></br><br></br><br></br>

       <label for="add">Address: </label>
       <textarea name="address" rows="6" cols="30"></textarea><br></br><br></br>
 
       <button className='but'>Submit</button>    <button>Reset</button><br></br>
 
 
       
        



                
       
               
        
               
       
       
    </form>
    </div>
    
    </>
  )
}

export default First