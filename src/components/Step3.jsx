import React from 'react';

const Step1 = ({ values, handleChange, errors }) => (
    <div>
        <h2>Step 3:Location Information</h2>
        <input
            type="text"
            name="location"
            value={values.location}
            onChange={handleChange}
            placeholder="Location (city)"
        />
        {errors.location && <p>{errors.location}</p>}

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
