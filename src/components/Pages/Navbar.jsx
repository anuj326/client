import React , {useContext, useEffect, useState} from 'react'
import {Link , useNavigate} from "react-router-dom";
import {UserContext} from "../UserContext";
import Swal from 'sweetalert2';
require('./navbar.css')

function Navbar() {

  const {userInfo,setUserInfo} = useContext(UserContext);
 
    
  useEffect(() => {
    fetch('/profile', {
      method:'POST',
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, [setUserInfo]);

  // const [authenticated, setauthenticated] = useState(null);

  // useEffect(() => {

  //   if (localStorage.getItem("token") !== null) {
  //     setauthenticated(true);
  //   }
  // }, [authenticated]);

  function logout() {
    
    fetch('/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
    localStorage.removeItem('token');
    Swal.fire({
      title: `Logged out Sucessfully!`,
      icon: 'success',
      showCloseButton: true
      });
    
  }

  const email = userInfo?.email;

    if(email){
      // window.location.reload();
      const emailRegex = /([^@]+)@/;
    const inputString = email;
    const match = inputString.match(emailRegex);
    var profileName ;

    if (match) {
      const nameBeforeAtSymbol = match[1];
      profileName = nameBeforeAtSymbol;
      
    }
    }
//Add quiz method
// const [data, setData] = useState({
//   question:'', option:[], correctAnswer:''
// });
  const [question, setQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [options, setOptions] = useState(['', '', '', '']); 

const questionObject = {
  question: question,
  correctAnswer: correctAnswer,
  options: options,
};

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Validate the form inputs if needed

    // Create the question object with the data
    const questionObject = {
      question: question,
      correctAnswer: correctAnswer,
      options: options,
    };

    // Do something with the questionObject, like sending it to an API or saving it to state
    
    const res = await fetch('/addQuestion',{
            method:'POST',
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify(
              { question, options, correctAnswer  }
            )
          });
          const data = res.json();
          if(res.status == 422 || !data){
            Swal.fire({
              title: 'Question already exist',
              icon: 'error',
              showCloseButton: true
            });
          }else{
            Swal.fire({
              title: `Quiz created Sucessfully!`,
              icon: 'success',
              showCloseButton: true
              });
          }

    // Clear the form inputs
    setQuestion('');
    setCorrectAnswer('');
    setOptions(['', '', '', '']);
  };


  return (
    <div className='fs-2'>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand fs-2 logo" to="/">XSEED Education</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fa-solid fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/subject">Subjects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About Project</a>
        </li>
        {email && (
          <li className='nav-item'>
          <a className='nav-link' href="/quiz">Quiz</a>
        </li>
        )}
        
        {!email && (
          <li className='nav-item'>
          <a className='nav-link' href='#' data-bs-toggle="modal" data-bs-target="#exampleModal2">Quiz</a>
        </li>
        )}
        
        
      </ul>
      {email && (
          <>
            
            {/* profile login> */}
            <span><Link className='user-login' to={'/'} onClick={logout}>Logout <span>({profileName})</span></Link></span>
          </>
        )}
        {!email && (
          <>
            <div className="bt" role="search">
               <button className="btn btn-outline-success sign" type="submit" ><Link to="/login">Sign In</Link></button>
               <button className="btn btn-outline-success sign" type="submit"> <Link to="/register">Sign Up</Link> </button>
            </div>
          </>
        )}
      
    </div>
  </div>
  
</nav>
<div className="contianer bottomnav">
        <div className='contianer'>
        <a className="btn btn-light btn-sm mx-2 mb-3" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa-solid fa-bars"></i>
        </a>

        
        {email &&(
          <a className="btn btn-light btn-sm float-end mx-2 mb-3" href='#' data-bs-toggle="modal" data-bs-target="#exampleModal1"><i className="fa-solid fa-screwdriver-wrench"></i></a>
        )}
        {!email && (
          <a className="btn btn-light btn-sm float-end mx-2 mb-3" href='#' data-bs-toggle="modal" data-bs-target="#exampleModal4"><i className="fa-solid fa-screwdriver-wrench"></i></a>
        )}
        </div>
       
    </div>

    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-left">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Table of Content</h5>
          
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body d-grid gap-2">
          
          <button className="btn btn-success bt"><a  href="/physics/scientificmethod">1.1 Scientific Method</a > </button><br />
          <button className="btn btn-success bt"><a href="/physics/scientificmeasurement">1.2 Scientific Measurement</a></button>  <br />
          {/* <button className="btn btn-success bt"><a href="/physics/mathtoolsforphysics">1.3 Math Tools for Physics</a></button> <br />
          <button className="btn btn-success bt"><a href="/physics/resolvingvectors">1.4 Resolving Vectors into Components</a></button> <br /> */}
        </div>
        <div className="modal-footer gap-2">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

        </div>
      </div>
    </div>
  </div>
  {/* second modal setting button */}
  <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-left">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel1">Let's do some fun</h5>

              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            {/* Add quiz */}
            <div className="modal-body d-grid gap-2">
              <input className='form-control' type="text" name='question' placeholder='Enter Question' 
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              />
            
          <div>
            
            {options.map((option, index) => (
              <div key={index}>
                <input className='form-control' placeholder='Enter Option'
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                />
              </div>
            ))}
          </div>
          <input className='form-control' type="text" name='correctAnswer' placeholder='Enter Correct Answer' 
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
              />
              <button className='btn' onClick={handleSubmit} >Add Quiz</button>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Quiz page access warning */}
    <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
              <div className="modal-dialog modal-dialog-left">
                <div className="modal-content">
                  <div className="modal-header text-center">
                    {/* <h5 className="modal-title" id="exampleModalLabel2">Quiz</h5> */}
                        
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                        <div className='text-center text-danger'>
                            <h3>Access Denied!</h3>
                            <h3>Please Login to Access Quiz</h3>
                        </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
      {/*Add Quiz page access warning */}
    <div className="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel4" aria-hidden="true">
              <div className="modal-dialog modal-dialog-left">
                <div className="modal-content">
                  <div className="modal-header text-center">
                    {/* <h5 className="modal-title" id="exampleModalLabel2">Quiz</h5> */}
                        
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                        <div className='text-center text-danger'>
                            <h3>Access Denied!</h3>
                            <h3>Please Login to Add Quiz</h3>
                        </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Navbar