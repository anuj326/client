import React from 'react'


function About() {
  return (
    <div>
        <br />
        <h1 className='text-center'>Documentation of XSEED Eduction Project</h1>

        <div className='container'>
            <div className='container'>
            <div className='container'>
        <h3>Project Overview</h3>
            <ol>
                <li><p>created full stack project using MERN stack </p></li>
                <li><p>The Idea is to provide eduation to Grade 4 level students</p></li>
                <li><p>Education with Fun</p></li>
                <li><p>Students can watch video and learn</p></li>
                <li><p>Students could play Quiz</p></li>
            </ol>
                        

            <section>
                <h3>Installation and Setup</h3>
                <p>To run the project we need a code editor and need to install required packages</p>
                <p>Need to install dependencies of react , bootstrap and node js </p>
                <p>we need to run project via using command "npm start"</p>
            </section>
            <section>
                <h3>Code Structure</h3>
                <p>Created clean folder structure easy to understand</p>
                <p>I have created 2 folder first 1. Client to manage frontend , 2. Server to manage Backend</p>
                
            </section>
            <section className='feature'>
                <h3>Features</h3>
                <ol>
                    <li><b><p>User Registration</p></b></li>
                    <li><b><p>Login & Authentication with security using JWT</p></b></li>
                    <li><b><p>Profile Logout</p></b></li>
                    <li><b><p>Quiz section</p></b></li>
                    <li><b><p>Fully resposive</p></b></li>
                    <li><b><p>AI Chatbot</p></b></li>
                    <li><b><p>Add Quiz</p></b></li>
                </ol>
                
 
                
            </section>
            <section>
                <h3>API Documentation</h3>
                <ol>
                    <li><p>created user Register API - <a href="#">endpoint/register</a></p></li>
                    <li><p>we have created API to login - <a href="#">endpoint/signin</a></p></li>
                    <p>When user do signup we are sending the data to backend using API</p>
                <p>To login user we are using second API and posting data from login form and validating same</p>
                <li><p>created Quiz API to create Quiz or Add question - <a href="#">endpoint/addQuestion</a></p></li>
                <li><p>created Quiz fetch API to access Quiz qestion and answer from database <a href="#">endpoint/quiz</a></p></li>
                <li><p>created submit Quiz API to validate  users answer correct or not <a href="#">endpoint/submit-quiz</a> </p></li>
                </ol>

            </section>
            <section>
                <h3>Tech Stack</h3>
                <p>Used Node Js for backend and creating API</p>
                <p>For frontend I have used React JS</p>
                <p>I have used Bootstrap for responsive page</p>
                <p>I have used MongoDB altas to  for database</p>
                <p>I have used Express Js to create API in Node JS</p>
            </section>
            <section>
                <h3>Tools</h3>
                <ul>
                    <li>VS Code</li>
                    <li>Postman</li>
                    <li>Mongodb Atlas</li>
                    <li>Google Chrome</li>
                </ul>
            </section>
            <section>
                <h3>Why MERN?</h3>
                <ul>
                <li><p>Mongo DB one of the fast Database in NOSQL where we can deal the data in Key Value Pair</p></li>
                <li><p>Express is easy to deal with Node js and It is open-source</p></li>
                <li><p>React provides us single page feature which makes web app faster itself because It dosen't relode the page</p></li>
                <li><p>Node is sigle threaded which is faster and provides easy way to work with API</p></li>
                <li><p>Bootstrap is used to provide a responsive user interface</p></li>
                </ul>
                
                
                
                
                
                
                
            </section>
        </div>
            </div>
        </div>
        
    </div>
  )
}

export default About