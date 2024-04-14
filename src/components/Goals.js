import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './Goals.css';

function Goals() {
    const [checkedStates, setCheckedStates] = useState([false, false, false, false, false, false]);
    const navigate = useNavigate();

    const handleCheckboxChange = (index) => {
        const newCheckedStates = [...checkedStates];
        newCheckedStates[index] = !newCheckedStates[index];
        setCheckedStates(newCheckedStates);
    };

    const handleCreateAccount = () => {
        const isChecked = checkedStates.some((isChecked) => isChecked);
        if (isChecked) {
            navigate('/home');
        } else {
            toast.error("Please select at least one goal");
        }
    };

    const checkboxLabels = ["Weight Loss", "Muscle Gain", "Flexibility and Mobility", "General Fitness", "Event - specific training", "Mindfulness and Mental Health"];

    return (
        <div className='container-fluid'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h1 className='text mt-5 text-center'>What are your goals?</h1>
                        <form>
                            {/* Repeat the following block for each checkbox */}
                            {checkboxLabels.map((label, index) => (
                                <div key={index} className="m-1 bg-body-secondary p-3 rounded-3 mt-4 d-flex justify-content-between align-items-center">
                                    <div>
                                        <label className="form-check-label" htmlFor={`flexCheckDefault${index}`}>
                                            {label}
                                        </label>
                                    </div>
                                    <input
                                        className="form-check-input p-3"
                                        type="checkbox"
                                        checked={checkedStates[index]}
                                        onChange={() => handleCheckboxChange(index)}
                                        id={`flexCheckDefault${index}`}
                                    />
                                </div>
                            ))}
                            {/* End of repeated block */}
                            <div className='d-grid mt-5'>
                                <button type="button" className="btn btn-primary p-2 rounded-3 mt-5" onClick={handleCreateAccount}>Confirm</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Goals;
