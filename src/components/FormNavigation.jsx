import React from 'react';

const FormNavigation = ({ step, setStep, maxSteps }) => (
    <div>
        {step > 1 && <button onClick={() => setStep(step - 1)}>Previous</button>}
        {step < maxSteps && <button onClick={() => setStep(step + 1)}>Next</button>}
        {step === maxSteps && <button type="submit">Submit</button>}
    </div>
);

export default FormNavigation;
