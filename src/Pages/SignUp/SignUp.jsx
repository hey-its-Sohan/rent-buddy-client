import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Components/Context/AuthContext';
import { toast } from 'react-toastify';

const SignUp = () => {

  const { setUser, updateUser, createUser } = use(AuthContext)
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate();
  const location = useLocation()

  const handleSignUp = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const { name, photoURL, email, password } = Object.fromEntries(formData.entries())
    setErrorMessage('')

    // password validation
    const passwordValidation = /(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (passwordValidation.test(password) === false) {
      setErrorMessage('Password must contain at least one uppercase, one lowercase letter and be at least 6 characters long.')
      return;
    }

    createUser(email, password)
      .then((result) => {
        // Signed up 
        const user = result.user;

        updateUser({ displayName: name, photoURL: photoURL })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoURL })
          }).then(() => {
            toast.success('Account Created Successfully');
            navigate(location?.state || '/');
          }).catch(() => {
            setErrorMessage('Profile update failed.');
          });

        // ...
      })
      .catch((error) => {
        console.log("Error signing up:", error.code, error.message);
        setErrorMessage(error.message);
        // ..
      });
  }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content">
          <div className="text-center lg:text-left">

          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-5xl font-bold">Sign Up now!</h1>
              <form onSubmit={handleSignUp} className="fieldset">
                <label className="label text-xl mt-2">Name</label>
                <input type="text" name='name' className="input" placeholder="Name" />
                <label className="label text-xl mt-2">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />
                <label className="label text-xl mt-2">Photo URL</label>
                <input type="text" name='photoURL' className="input" placeholder="URL" />
                <label className="label text-xl">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />

                {errorMessage && <p className='text-cyan-600'>{errorMessage}</p>}

                <button className="btn text-white shadow-md text-lg bg-purple-500 mt-4">Sign Up</button>
                <div className="divider text-lg text-slate-400 my-2">Or</div>
                <button className="btn outline outline-primary text-lg bg-white">
                  <svg aria-label="Google logo" width="26" height="26" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                  Sign Up with Google
                </button>
                <p className='text-lg mt-2'>Already have an account? <Link to='/login' className='text-purple-500 text-lg hover:underline'>Login Now</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;