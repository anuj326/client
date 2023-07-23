import React, { useState } from 'react'
 import { useNavigate} from 'react-router-dom'

require('./Register.css')

function Register() {
  
  const history = useNavigate()

  const [user, setUser] = useState({
    fname:'', date:'', email:'', password:''
  });


let   name , value;
const handelInputs = (e) =>{
  //  console.log(e.target.name);
  //  console.log(e.target.value);
    e.preventDefault();
    name =  e.target.name;
    value = e.target.value;
    setUser({...user, [name]: value})
    //console.log(user.email);
}

const postData = async (e)=>{
      e.preventDefault();
      const {fname, date, email, password} =user;
      const res = await fetch('/register',{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(
          { fname, date, email, password  }
        )
      });
      const data = res.json();
      if(res.status == 422 || !data){
        window.alert('Email already registered')
      }else{
        window.alert('User created successfully')
        history('/Login');
      }
      
}

  return (
    <div className='row align-items-start'>
      <div className='col'>
          
       </div>
        <div className='col'>
          <div className='text-center'>
               {/* <i class="fa-solid fa-user-plus"></i> */}
               <p className='slogan'>Register and join the journey of lifelong learning.</p>
          </div>
          
          <form className='form-control ' method='POST'>
            <div className=''>
              Full Name: <input className='form-control' type="text" name="fname" id="fname" placeholder='Full Name' required
                value={user.fname}
                onChange={handelInputs}
              /> <br />
              Birthday <input className='form-control' type="date" name="date" id="date"
                value={user.date}
                onChange={handelInputs}
              /> <br />
              Email: <input className='form-control' type="email" name="email" id="email" placeholder='Email' required
                value={user.email}
                onChange={handelInputs}
              /> <br />
              
              Password: <input className='form-control' type="password" name="password" id="password" placeholder='Password' required
                value={user.password}
                onChange={handelInputs}
              /><br />
              
              <div className='d-grid gap-2'>
                <input className='btn btn-success' type='submit' onClick={postData} value={'Submit'} />
                <button className='btn btn-success btl'><a href="/login">Back to Login</a></button>
            </div>
            </div>
            
          </form>
        </div>
       
       <div className='col'>
            
       </div>
        
    </div>
  )
}

export default Register;