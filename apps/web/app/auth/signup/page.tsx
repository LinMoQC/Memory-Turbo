import Link from 'next/link';
import SignUpForm from '@/app/auth/signup/signupForm';

const SignUpPage = () => {
  return (
    <div className='bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col justify-center items-center'>
      <h1 className='text-center text-2xl font-bold mb-4'>Sign Up Page</h1>
      <SignUpForm />
      <div className='flex justify-between text-sm'>
        <p>Already have an account?</p>
        <Link href={'/auth/signin'} className='underline'>
          Sign In
        </Link>
      </div>
    </div>
  )
}

export default SignUpPage;