export const validateStep1 = (values) => {
    const errors = {};
    if (!values.name) errors.name = "Name is required";
    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid";
    }
    return errors;
};

export const validateStep2 = (values) => {
    const errors = {};
    if (!values.address) errors.address = "Address is required";
    return errors;
};

export const validateStep3 = (values) => {
    const errors = {};
    if (!values.payment) errors.payment = "Payment method is required";
    return errors;
};
