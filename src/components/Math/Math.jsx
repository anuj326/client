import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';

function Math() {

    const [currentVideo , setCurrentVideo] = useState('');
    const handleVideoPlay = async (url) => {
        try {
          const videoId = new URL(url).searchParams.get('v');
          if (videoId) {
            setCurrentVideo(videoId);
          } else {
            console.error('Invalid YouTube URL');
          }
        } catch (error) {
          console.error('Error parsing YouTube URL:', error);
        }
      };

  return (
    <div>
        <div className='row'>
        <div className="col-4 box1">
            <div className='container'>
                <h2 className='text-center'>
                    Class 4 math (India)
                    <hr />
                </h2>
            <div className='text-center'>
            <a href="#">COURSE: CLASS 4 MATH(INDIA) &nbsp;&#62; UNIT 1</a>
            <p>Lesson 1: 3-digit addition</p>
            </div>
            <div className='d-grid gap-2 math '>
                <button className='btn btn-secondary btn-lg' onClick={() => handleVideoPlay('https://www.youtube.com/watch?v=Wm0zq-NqEFs')}>Using place value to add 3-digitn..</button>
                <button className='btn btn-secondary btn-lg' onClick={() => handleVideoPlay('https://www.youtube.com/watch?v=O9zSHs1TWMM')}>Using place value to add 3-digitn..</button>
                <button className='btn btn-secondary btn-lg' onClick={() => handleVideoPlay('https://www.youtube.com/watch?v=9McJ3GobPaY&list=PLSQl0a2vh4HDsruFoOhyeLDr4w1o9dhe6')}>Addition and subtraction within..</button>
                <button className='btn btn-secondary btn-lg' onClick={() => handleVideoPlay('https://www.youtube.com/watch?v=9hM32lsQ4aI')}>Adding 3-digit numbers</button>
                <button className='btn btn-secondary btn-lg' onClick={() => handleVideoPlay('https://www.youtube.com/watch?v=ZgzpTx-s9Zo&list=PLSQl0a2vh4HDsruFoOhyeLDr4w1o9dhe6&index=5')}>Add 7 + 6</button>
            </div>
            <div className='text-center'>
                <a href="#">Math </a> <span>&#62;</span>
                <a href="#">Class 4 math (India)</a> <span>&#62;</span> <br />  
                <a href="#">Addition and substraction</a> <span>&#62;</span>
                <a href="#">3-digit-addition</a>
            </div>
            </div>
        </div>
        <div class="col-8 text-center">
        <h1>Watch and Learn with Fun</h1>
            
            <div className="video-player">
                {currentVideo ? (
                <VideoPlayer videoId={currentVideo} />
                ) : (
                <p>Click on button to Play Video</p>
                )}
            </div>
            <div>
            <br /><br />
            <div className='container'>
                    <div className='container'>
                    <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            About
                        </button>
                        </h2>
                        
                          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            <p>Let's explore adding two 3-digit numbers using place value and carrying. We walk through the process step by step,
                                starting with the ones place, then the tens place, and finally the hundreds place.
                                We emphasize the importance of understanding what carrying means and how it relates to place value.
                                Created by Sal Khan.</p>
                        </div>
                        </div>
                        
                    </div>
                   </div> 
                    </div>
            </div>
            {/* quiz */}
            <div>
        
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Math

