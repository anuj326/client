import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
require('./quiz.css')

const Quiz1 = () => {

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState([]);
  var countQuestion = 1;
  var countAnswer =1;
  useEffect(() => {
    // Fetch questions from the server
    fetch('/quiz')
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((err) => console.error('Error fetching questions:', err));
  }, [setQuestions]);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const question = setQuestions?.question;
  console.log(question);

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
  console.log(questions);

  return (
    
    <div className='container'>
      <div className='form-control'>
      {questions.map((item) => 
        <div key={item._id}>
          <p className='question'>{countQuestion++}-:&nbsp;{item.question}</p>
          {item.options.map((option) => (
            <label className='form-control pad' key={option}>
              <input
                type="radio"
                name={item._id}
                value={option}
                onChange={(e) => handleAnswerChange(item._id, e.target.value)}
              />
              &nbsp;
              {option}
            </label>
          ))}
        </div>
      )}
      <div className='text-center'>
      <button className='btn btn-success btn-md' onClick={handleSubmit} >Submit</button>
      {/* <Link  to={'/quiz'} className='btn btn-success btn-md'>Retry</Link> */}
      <a href='/quiz' className='btn btn-success btn-md'>Retry</a>
      </div>
       <div>
        <h3>Results:</h3>
        {result.map((item) => (
          <div key={item._id}>
            
            <p>{countAnswer++}-:&nbsp;{item.isCorrect ? 'Correct' : 'Incorrect'}</p>
          </div>
        ))}  
      </div>
    </div>
    </div>
    
  );
 };

export default Quiz1;
