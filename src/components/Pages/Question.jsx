import React, { useEffect, useState } from 'react'

function Question() {
    const [data ,setData] = useState([]);
    useEffect(()=>{
        fetch('/quiz',{
            method:'GET',
        }).then((result) =>{
            result.json()
          .then((resp) =>{
                setData(resp);
            })
        })
    },[]);
   // console.log(data[0].question);
    

   
  return (

        <div className='question m-4'>
                
                   
                       {
                        data.map((item)=>
                        
                        <form className='form-control  answer'> 
                                <h4 for='quiz'> <span>&rArr;</span> {item.question}</h4>
                                <li><input name='ans' type="radio" /><label htmlFor="ans1" value={item.ans1}
                                onChange={(e) => handleAnswerChange(question._id, e.target.value)}
                                >A. {item.ans1} </label></li>
                                <li><input name='ans' type="radio" /><label htmlFor="ans2" value={item.ans2}>B. {item.ans2} </label></li>
                                <li><input name='ans' type="radio" /><label htmlFor="ans2" value={item.ans3}>C. {item.ans3}</label></li>
                                <li><input name='ans' type="radio" /><label htmlFor="ans1" value={item.ans4}>D. {item.ans4}</label></li>
                        </form>
                        )
                       }
                    
            </div>
  )
}

export default Question


{/*  */}