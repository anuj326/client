import React from 'react'

function ScientificMeasurement() {
  return (
    <div>
      <br />
      <br />
      <section className='container'>
            <h1>1.2 Scientific Measurement</h1>
            <hr />
            <h3>Lession</h3>
            <hr />
            <img src="https://dr282zn36sxxg.cloudfront.net/datastreams/f-d%3Ac5ba17ce6774866060b791a66624ec92bd8f64cfa24a689eeda075f7%2BIMAGE_THUMB_POSTCARD_TINY%2BIMAGE_THUMB_POSTCARD_TINY.1" width='300px' height="300px" alt="physcis image" />
           <div>
            <br />
            <br />
           <p>Measurements are a basic necessity in science. Scientists have designed thousands of different tools to help in the vital process of measuring. In this image of the control panel of the space shuttle Atlantis, we see dozens of readouts from measuring systems.</p>
           </div>

           <h4>Measurement</h4>
           <p>We already know that observations are an important part of the scientific method. Hypotheses are accepted or rejected based on how well they explain observations. Some observations, such as "the plant turned brown" are qualitative; these observations have no associated numbers. A quantitative observation includes numbers, and is also called a measurement. A measurement is obtained by comparing an object to some standard. Any observation is useful to a scientist, but quantitative observations are commonly considered more useful. Even if the measurement is an estimate, scientists usually make quantitative measurements in every experiment.</p>
            <h4>Common Misconceptions</h4>
            <p>People commonly believe that physics is all about solving word problems and memorizing equations.
             While it is true that many physics classes focus on the equations
             it is important to remember that the purpose of physics is less about the problems and more about using equations, 
             laws, and theories to understand the world we live in.</p>
             <p>Consider the following pair of observations</p>
             <ol>
               <li>When the volume of a gas is decreased, its pressure is increased.</li>
               <li>When the volume of a gas is reduced from 2.0 liters to 1.0 liter, the pressure increases from 3.0 atm to 6.0 atm.</li>
             </ol>
             <h4>Summary</h4>
             <ul>
                <li>Measurements (quantitative observations) are often more useful than qualitative observations</li>
                <li>The system of units for measurements in physics is the SI system.</li>
                <li>The fundamental quantities in the SI system are length, mass, and time.</li>
                <li>The SI unit for length is the meter, for time is the second, and for mass is the kilogram.</li>
                <li>Prefixes are used to change SI units by powers of ten.</li>
                <li>Equivalencies are used as conversion factors when units need to be converted.</li>
             </ul>
             <h4>Review</h4>
             <ol>
                <li>Which of the following are quantitative observations?</li>
                <ol type='a'>
                  <li>The sky is blue.</li>
                  <li>The toy car is about 3 inches long</li>
                  <li>It is 250,000 miles from the earth to the moon.</li>
                  <li>The wooden cart has a mass of 18.654 g.</li>
                  <li>When at rest, the pendulum points toward the center of the earth.</li>
                </ol>
                <li>Convert 76.2 kilometers to meters.</li>
                <li>Convert 76.2 picograms to kilograms.</li>
                <li>Convert 1 day into seconds.</li>
             </ol>
             <h4>Explore More</h4>
             <p>Use the resource below to answer the questions that follow.</p>
             <div className='container text-center'>
             
             <iframe width="627" height="362" src="https://www.youtube.com/embed/XKCZn5MLKvk" title="How to Convert Units - Unit Conversion Made Easy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             </div>
             <br />
             <ol>
                <li>Draw for yourself the conversion base used in this video.</li>
                <li>Convert 6.6 meters to centimeters using the process shown</li>
                <li>Convert 1 mile to feet. Then convert to inches. Then convert to centimeters. How many centimeters are in a mile?</li>
                <li>At 2:29 in the video, he motions across and then down in solving the problem. What is the mathematical process he is doing?</li>
             </ol>
             <h2>Asked by Students</h2>
             <hr />
             <p>Here are the top questions that students are asking Flexi for this concept:</p>
             {/* question 1 */}
             <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
             How many meters are in 1 yard?
            </button>
            <div class="collapse" id="collapseExample">
            <div class="card card-body">
            
               A yard is a customary unit of length in the US.

               The meter is an international standard (S.I.) unit of length measurement.

               1 yard is approximately 1.1 meters.

               Click here to learn more about unit conversion!
            </div>
            </div>
            <br /> <br />
            {/* question 2 */}
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
            How many yards are in 1 meter?
            </button>
            <div class="collapse" id="collapseExample2">
            <div class="card card-body">
            
            
                  A yard is a customary unit of length in the US.

                  The meter is an international standard (S.I.) unit of length measurement.

                  1 meter is approximately 0.9 yards.

                  Click here to learn more about unit conversion!
            </div>
            </div>
            <br /> <br />
            {/* question 3 */}
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
            How to convert 0.074 kilometers to meters?
            </button>
            <div class="collapse" id="collapseExample3">
            <div class="card card-body">
            
            
               The metric system’s many prefixes allow quantities to be expressed in many different units. Dimensional analysis is useful to convert from one metric system unit to another. To convert km to m, use the conversion factor (1000m/km).   
           </div>
            </div>
             
        </section>
        <br />
        <footer className='text-center'>All rights resered by XSEED Education</footer>
    </div>
  )
}

export default ScientificMeasurement