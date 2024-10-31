import React from 'react';

const Step1 = ({ values, handleChange, errors }) => (
    <div>
        <h2>Step 2: Contact Information</h2>
        <input
            type="number"
            name="number"
            value={values.number}
            onChange={handleChange}
            placeholder="Number"
        />
        {errors.number && <p>{errors.number}</p>}

        <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
        />
        {errors.email && <p>{errors.email}</p>}
    </div>
);

export default Step1;
