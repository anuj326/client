import React from 'react'
require('./subject.css')

function Subjects() {
  return (
    <div>
    <div className='container'>
        <div className='row align-items-start'>
            <div className="col"><b>Math</b>
            <br />
            <br />
                <div>
                    
                        <p>Grade 1</p>
                        <p>Grade 2</p>
                        <p>Garde 3</p>
                        <p><a href="/math">Grade 4</a></p>
                    
                </div>
             </div>
            <div className="col"><b>Science</b>
                <div>
                    <p>Grade K to 5 </p>
                    <p>Earth Science</p>
                    <p>Life Science</p>
                    <p>Physical Science</p>
                    <p>Chemistry</p>
                </div>
            </div>
            <div className="col"><b>Social Studies</b>
                <div>
                    <p>Economics</p>
                    <p>Geography</p>
                    <p>Government</p>
                    <p>History</p>
                    <p>Wolrd History</p>
                </div>
            </div>
            <div className="col"><b>College</b>
                <div>
                    <p>College Algebra</p>
                    <p>College Precalculus</p>
                    <p>Linear Algebra</p>
                    <p>College Human Biology</p>
                    <p>The Universe</p>
                </div>
            </div>
            <div className="col"><b>Translations</b>
                <div>
                    <p>Spanish</p>
                    <p>Korean</p>
                    <p>Deutsch</p>
                    <p>Chinese</p>
                    <p>Greek</p>
                </div>
            </div>
        </div>
    </div>
    </div>
   
  )
}

export default Subjects