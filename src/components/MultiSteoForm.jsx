import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import FormNavigation from './FormNavigation';
import useFormValidation from '../hooks/useFormValidation';
import { validateStep1, validateStep2, validateStep3 } from '../utils/validationRules';

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [values, setValues] = useState({ name: '', email: '', address: '', payment: '' });

    const validationRules = [validateStep1, validateStep2, validateStep3];
    const { errors, validateForm } = useFormValidation(validationRules[step - 1]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleNext = () => {
        if (validateForm(values)) setStep(step + 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm(values)) {
            console.log("Form submitted:", values);
        }
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return <Step1 values={values} handleChange={handleChange} errors={errors} />;
            case 2:
                return <Step2 values={values} handleChange={handleChange} errors={errors} />;
            case 3:
                return <Step3 values={values} handleChange={handleChange} errors={errors} />;
            default:
                return null;
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {renderStep()}
            <FormNavigation step={step} setStep={setStep} maxSteps={3} />
        </form>
    );
};

export default MultiStepForm;
