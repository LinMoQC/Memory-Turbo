'use client'

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui//input';
import SubmitButton from '@/components/ui/submitButton';
import {useActionState} from 'react'
import { signUp } from '@/lib/auth';

const SignUpForm = () => {
  const [state,action] = useActionState(signUp,undefined)
  return (
    <form action={action}>
      <div className='flex flex-col gap-2'>
        {state?.message && <p className='text-sm text-red-500'>{state.message}</p> }
        <div>
          <Label htmlFor='name'>Name</Label>
          <Input id='name' name='name' placeholder='linmo' />
        </div>
        {state?.error?.name && <p className='text-red-500'>{state.error.name}</p>}

        <div>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' name='email' placeholder='linmo@qq.com' />
        </div>
        {state?.error?.email && <p className='text-red-500'>{state.error.email}</p>}

        <div>
          <Label htmlFor='password'>Password</Label>
          <Input id='password' name='password' type='password' />
        </div>
        {state?.error?.password && (
          <div>
            <p>Password Must:</p>
            <ul>
              {state.error.password.map(error => (
                <li key={error} className='text-zinc-700'>{error}</li>
              ))}
            </ul>
          </div>
        )}

        <SubmitButton>SignUp</SubmitButton>
      </div>
    </form>
  )
}

export default SignUpForm