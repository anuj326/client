import React from 'react'
import Question from './Question'

function Quiz() {

    const handleAnswerChange = (questionId, answer) => {
        setAnswers((prevAnswers) => ({
          ...prevAnswers,
          [questionId]: answer,
        }));
      };
      
    const handleSubmit = () => {
        // Submit answers to the server for validation
        fetch('/submit-quiz', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(answers),
        })
          .then((res) => res.json())
          .then((data) => setResult(data))
          .catch((err) => console.error('Error checking answers:', err));
      };

  return (
    <div  className='container'>
            <h2 className='text-center'>Let's Test our self </h2>
            <Question />
            <div  className='text-center'>
                 <button className='btn-info' type='submit'>Submit</button>
            </div>
    </div>
  )
}

export default Quiz