import React, { useState } from 'react';
import '../App.css'

const Wizard = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = ['Form Tab', 'Text Tab', 'Image Tab', 'Video Tab'];

  return (
    <div className="wizard">
      <div className="wizard-tabs">
        {steps.map((step, index) => (
          <button
            key={index}
            className={index === activeStep ? 'wizard-tab active' : 'wizard-tab'}
            onClick={() => setActiveStep(index)}
          >
            {step}
          </button>
        ))}
      </div>

      <div className="wizard-content">
        {activeStep === 0 && (
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <br />
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <br />
            <label>
              Password:
              <input type="password" name="password" />
            </label>
            <br />
            <input type="submit" value="Submit" />
          </form>
        )}

        {activeStep === 1 && (
          <div>
            <h2>Step 1: Introduction</h2>
            <p>Welcome to this step of the process! Here, you will learn more about how to complete the form and what information is required.</p>
            <p>Please review the guidelines carefully before proceeding to the next step.</p>
          </div>
        )}

        {activeStep === 2 && <div><img src="https://cdn.sanity.io/images/ocl5w36p/production/70f7714b69407268e6a95bc5ff9ac31af52aa1bd-1720x1112.jpg?w=768&auto=format&dpr=2" alt="" style={{ height: '300px', width: '100%', objectFit: 'cover' }} /></div>}
        {activeStep === 3 && <div> <iframe width="560" height="315" src="https://www.youtube.com/embed/DKlhuizZLvw?si=XuU0q1ulWwBQYHUK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe></div>}
      </div>
    </div>
  );
};

export default Wizard;
