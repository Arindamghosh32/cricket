import React, { useState, useRef } from 'react';
import './../css/reg.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';

export default function Reg() {
  const [current, setCurrent] = useState(0);
  const formref = useRef([]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    phone: '',
    preferences: '',
    gender: '',
    confirm: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

  
    const queryParams = new URLSearchParams(formData).toString();


    const websiteUrl = `http://localhost:3000/register/?${queryParams}`;
    window.location.href = websiteUrl;

    
    alert("Form submitted successfully!");
  };

  const handlenext = () => {
    if (current < formref.current.length - 1) {
      setCurrent((prev) => prev + 1);
      gsap.to('.form', { x: `-${(current + 1) * 120}%`, duration: 1 });
    }
  };

  const handleprev = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
      gsap.to('.form', { x: `-${(current - 1) * 120}%`, duration: 1 });
    }
  };

  return (
    <>
      <div className="registration-body">
        <div className="tir">
          <div className="reg-title">Registration</div>
          <div className="reg-body">
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group" ref={(el) => { formref.current[0] = el }}>
                <div className="input-form">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
                </div>
                <div className="input-form">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
                </div>
                <div className="input-form">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} />
                </div>
                <div className="buttons-first">
                  <FontAwesomeIcon onClick={handlenext} icon={faArrowRight} />
                </div>
              </div>

              <div className="form-group-1" ref={(el) => { formref.current[1] = el }} style={{ transform: 'translateX(100%)', width: '100%' }}>
                <div className="input-form">
                  <label htmlFor="address">Address</label>
                  <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} />
                </div>
                <div className="input-form">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
                </div>
                <div className="buttons">
                  <FontAwesomeIcon icon={faArrowLeft} onClick={handleprev} className="left-button" />
                  <FontAwesomeIcon icon={faArrowRight} onClick={handlenext} className="right-button" />
                </div>
              </div>

              <div className="form-group-2" ref={(el) => { formref.current[2] = el }} style={{ transform: 'translateX(100%)', width: '100%' }}>
                <div className="input-form">
                  <label htmlFor="preferences">Preferences</label>
                  <select id="preferences" name="preferences" value={formData.preferences} onChange={handleInputChange}>
                    <option value="" disabled>Select your preference</option>
                    <option value="email-update">Email Updates</option>
                    <option value="sms-update">SMS Updates</option>
                    <option value="no-update">No Updates</option>
                  </select>
                </div>
                <div className="input-form">
                  <label htmlFor="gender">What is your gender?</label>
                  <div className="radios">
                    <div className="radio">
                      <label htmlFor="male">Male</label>
                      <input type="radio" id="male" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleInputChange} />
                    </div>
                    <div className="radio">
                      <label htmlFor="female">Female</label>
                      <input type="radio" id="female" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleInputChange} />
                    </div>
                    <div className="radio">
                      <label htmlFor="others">Others</label>
                      <input type="radio" id="others" name="gender" value="Others" checked={formData.gender === 'Others'} onChange={handleInputChange} />
                    </div>
                  </div>
                </div>
                <div className="buttons">
                  <FontAwesomeIcon icon={faArrowLeft} onClick={handleprev} className="left-button" />
                  <FontAwesomeIcon icon={faArrowRight} onClick={handlenext} className="right-button" />
                </div>
              </div>

              <div className="form-group-3" ref={(el) => { formref.current[3] = el }} style={{ transform: 'translateX(100%)', width: '100%' }}>
                <div className="input-form">
                  <label htmlFor="confirm">Are you sure with all the changes?</label>
                  <div className="rad">
                    <label htmlFor="confirm-yes" className="label">Yes</label>
                    <input type="radio" id="confirm-yes" name="confirm" value="Yes" checked={formData.confirm === 'Yes'} onChange={handleInputChange} />

                    <label htmlFor="confirm-no" className="label">No</label>
                    <input type="radio" id="confirm-no" name="confirm" value="No" checked={formData.confirm === 'No'} onChange={handleInputChange} />
                  </div>
                </div>
                <div className="buttons-last">
                  <FontAwesomeIcon icon={faArrowLeft} onClick={handleprev} className="left-button" />
                </div>
                <div className="submit-container">
                  <button type="submit" className="submit-button">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
