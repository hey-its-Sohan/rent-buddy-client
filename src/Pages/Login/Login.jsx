import React, { use } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Components/Context/AuthContext';
import { toast } from 'react-toastify';
import logo2 from '../../assets/logo2.png'
import { Typewriter } from 'react-simple-typewriter';


const Login = () => {

  const { signInUser, googleSignIn } = use(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignIn = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const { email, password } = Object.fromEntries(formData.entries())

    // sign in
    signInUser(email, password)
      .then(result => {
        toast.success('Login Successfully.')
        navigate(location?.state || '/')
        console.log(result.user);
      })
      .catch((error) => {
        console.log("Error signing up:", error.code, error.message);
        // ..
      });
  }

  // google sign in
  const handleGoogleLogin = () => {
    googleSignIn()
      .then(result => {
        toast.success('Login Successfull!')
        navigate(location?.state || '/')
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      })
  }


  return (
    <div className=''>
      <div className="hero bg-base-200 min-h-screen">

        <div className="card bg-base-100  shadow-2xl ">
          <div className="card-body">
            <img className='w-60 mx-auto' src={logo2} alt="" />
            {/* <h1 className="text-5xl font-bold text-center">Login Now</h1> */}
            <h3 className='md:text-xl font-medium text-center text-purple-500'>
              <Typewriter
                delaySpeed={800}
                deleteSpeed={35}
                loop={0}
                typeSpeed={85}
                words={[
                  "No more roommate roulette.",
                  'Find Your  Amazing Roommates',
                  "Log in, link up, live better."

                ]}
              />
            </h3>
            <form onSubmit={handleSignIn} className="fieldset">
              <label className="label text-xl">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" />
              <label className="label text-xl">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn text-white shadow-md text-lg bg-purple-500 mt-4">Login</button>
              <div className="divider text-lg text-slate-400 my-2">Or</div>
              <button onClick={handleGoogleLogin} className="btn outline outline-primary text-lg bg-white">
                <svg aria-label="Google logo" width="26" height="26" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
              </button>
              <p className='md:text-lg mt-2 text-center'>Don't have an account? <Link to='/signup' className='text-purple-500 md:text-lg hover:underline'>Signup Now</Link></p>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;