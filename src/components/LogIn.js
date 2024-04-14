import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import google_icon from './Assets/google.png';
import facebook_icon from './Assets/facebook.png';
import './SignIn.css'


const CreateAccountPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };



  const handleCreateAccount = () => {
    // Check if any field is empty
    if ( !email || !password) {
      // Trigger toast error message
      toast.error('Please fill in all fields');
      return;
    }

    // Handle account creation logic here
    toast.success("Login successfully")
    navigate('/home');
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log('Logging in with Google...');
  };

  const handleFacebookLogin = () => {
    // Handle Facebook login logic here
    console.log('Logging in with Facebook...');
  };

  return (
    <div className='container-fluid'>
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className='text mt-5 text-center'>Welcome Back</h1>
          <form>
            <div className="form-group m-4">
              <input type="email" className="form-control p-3 bg-body-secondary" id="email" placeholder="Email" value={email} onChange={handleEmailChange} required/>
            </div>
            <div className="form-group m-4">
              <input type="password" className="form-control p-3 bg-body-secondary" id="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
            </div>
            <p className='text text-center'><a href='/' className='text-secondary'>Forgot your password?</a></p>
            <div className='d-grid mt-5'>
            <button type="button" className="btn btn-primary p-2 rounded-3" onClick={handleCreateAccount}>Log In</button>
            </div>
          </form>
          <div className="text-center mt-4">
            <div className="text-muted">
              <hr />
              OR
            </div>
          </div>
          <div className="mt-3 d-flex justify-content-center">
            <button className="btn  mr-2" onClick={handleGoogleLogin}><img src={google_icon} style={{ width: "30px"}}  alt="" /></button>
            <button className="btn" onClick={handleFacebookLogin}><img src={facebook_icon} style={{ width: "30px"}}  alt="" /></button>
          </div>
          <p className="mt-3 text-center">Don't have an account? <Link to='/sign_in'>SignIn</Link></p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CreateAccountPage;
