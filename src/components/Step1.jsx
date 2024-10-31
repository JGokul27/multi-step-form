import React from 'react';

const Step1 = ({ values, handleChange, errors }) => (
    <div>
        <h2>Step 1: Personal Information</h2>
        <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Name"
        />
        {errors.name && <p>{errors.name}</p>}

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
