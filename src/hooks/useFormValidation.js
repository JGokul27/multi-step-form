import { useState } from 'react';

const useFormValidation = (validate) => {
    const [errors, setErrors] = useState({});

    const validateForm = (values) => {
        const validationErrors = validate(values);
        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    return { errors, validateForm };
};

export default useFormValidation;
