import Link from 'next/link';
import SignInForm from './signinForm';

const SignInPage = () => {
  return (
    <div className='bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col justify-center items-center'>
      <h1 className='text-center text-2xl font-bold mb-4'>Sign In Page</h1>
      <SignInForm />
    </div>
  )
}

export default SignInPage;