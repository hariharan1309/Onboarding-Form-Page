import { useState } from 'react';
import Header from './Header';

type FormErrorType = {
  name: string;
  email: string;
  pass: string;
  repass: string;
};

export default function Form1({ nextPage }: { nextPage: React.Dispatch<React.SetStateAction<number>>}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [repass, setRepass] = useState('');
  const [error, setError] = useState<FormErrorType>({ name: '', email: '', pass: '', repass: '' });

  function checkError({ type }: { type: string }) {
    if (type === 'name') {
      if (name.length === 0) {
        setError({ ...error, name: 'Name is required' });
      } else if (!isValidName(name)) {
        setError({ ...error, name: 'Name is invalid' });
      } else {
        setError({ ...error, name: '' });
      }
    } else if (type === 'email') {
      if (email.length === 0) {
        setError({ ...error, email: 'Email is required' });
      } else if (!isValidEmail(email)) {
        setError({ ...error, email: 'Email is invalid' });
      } else {
        setError({ ...error, email: '' });
      }
    } else if (type === 'pass') {
      if (pass.length === 0) {
        setError({ ...error, pass: 'Password is required' });
      } else if (!isPasswordMatch(pass)) {
        setError({ ...error, pass: 'Password must be at least 8 characters' });
      } else {
        setError({ ...error, pass: '' });
      }
    } else if (type === 'repass') {
      if (repass.length === 0) {
        setError({ ...error, repass: 'Confirm password is required' });
      } else if (repass !== pass) {
        setError({ ...error, repass: 'Password does not match' });
      } else {
        setError({ ...error, repass: '' });
      }
    }
  }

  function isValidEmail(email: string) {
    const regex = /^[a-zA-Z][a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  }

  function isValidName(name: string) {
    const regex = /^[a-zA-Z]+(?:\s[a-zA-Z]+){0,2}$/;
    return regex.test(name);
}

  function isPasswordMatch(pass: string) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(pass);
  }
  return (
    <section >
      <Header />
      <div className="flex flex-col min-w-full min-h-full flex-grow gap-6 justify-center items-center">
        <h1 className="font-serif text-4xl text-gray-800 text-center">Get started with Teachable</h1>
        <p className="font-medium text-slate-600 text-center">
          Join more than 100,000 creators who've sold over <b className="text-black">$1 billion</b> in courses and coaching
        </p>
        <div className="flex flex-col items-center gap-2  text-gray-500 font-medium">
          <div className="flex flex-col gap-0.5">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text" id='fullName'
              className={`outline-none ring-1 focus:ring-2 w-72 p-2 rounded-[4px] ${
                error.name.length > 0 ? 'ring-red-500' : 'ring-slate-500'
              }`}
              onBlur={() => checkError({ type: 'name' })}
              onChange={(e) => {setName(e.target.value); checkError({ type: 'name' })}}
            />
            {error.name && <p className=" bottom-0 text-red-500">{error.name}</p>}
          </div>
          <div className="flex flex-col gap-0.5">
            <label htmlFor="email">Email Address</label>
            <input
              type="text" id='email'
              className={`outline-none ring-1 focus:ring-2 w-72 p-2 rounded-[4px] ${
                error.email.length > 0 ? 'ring-red-500' : 'ring-slate-500'
              }`}
              onBlur={() => checkError({ type: 'email' })}
              onChange={(e) => {setEmail(e.target.value); checkError({ type: 'email'})}}
            />
            {error.email && <p className="text-red-500">{error.email}</p>}
          </div>
          <div className="flex flex-col gap-0.5">
            <label htmlFor="Pass">Password</label>
            <input
              type="password" id='Pass'
              className={`outline-none ring-1 focus:ring-2 w-72 p-2 rounded-[4px] ${
                error.pass.length > 0 ? 'ring-red-500' : 'ring-slate-500'
              }`}
              onBlur={() => checkError({ type: 'pass' })}
              onChange={(e) => {setPass(e.target.value); checkError({ type: 'pass'})}}
            />
            {error.pass && <p className="text-red-500">{error.pass}</p>}
          </div>
          <div className="flex flex-col gap-0.5">
            <label htmlFor="Repass">Confirm Password</label>
            <input
              type="password" id='Repass'
              className={`outline-none ring-1 focus:ring-2 w-72 p-2 rounded-[4px] ${
                error.repass.length > 0 ? 'ring-red-500' : 'ring-slate-500'
              }`}
              onBlur={() => checkError({ type: 'repass' })}
              onChange={(e) => {setRepass(e.target.value); checkError({ type: 'repass'})}}
            />
            {error.repass && <p className="text-red-500">{error.repass}</p>}
          </div>
        </div>
        <div>
            <label htmlFor="privacyPolicy" className="flex cursor-pointer items-start gap-2">
                <div className="flex items-center">
                    &#8203;
                    <input type="checkbox" className="size-4 rounded accent-slate-800 p-[1px] border-slate-800" id="privacyPolicy" />
                </div>

                <div>
                    <p className="font-medium text-sm text-slate-500"> I agree to the <a href="#" className='text-black underline'>Terms of Use</a> and <a href='#' className='text-black underline'>Privacy Policy</a>  </p>
                </div>
            </label>
        </div>
        <div>
          <button className='px-12 py-2 bg-gray-950 text-white rounded-md' onClick={()=>{
            if(error.name.length === 0 && error.email.length === 0 && error.pass.length === 0 && error.repass.length === 0 ){
              if(name.length > 0 && email.length > 0 && pass.length > 0 && repass.length > 0){
                nextPage(1);
                
          }else{
            alert('Please fill all the fields');
          }
      }
    }}>Create Account</button>
        </div>
        <div>
          <p className="text-gray-800 font-medium">Already have an account? <a href="#" className="text-black underline">Log in</a></p>
        </div>
      </div>
    </section>
  );
}