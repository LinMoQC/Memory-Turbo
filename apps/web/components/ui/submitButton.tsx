'use client'
import { PropsWithChildren } from 'react';
import {useFormStatus} from 'react-dom'
import { Button } from './button';

const SubmitButton = ({children}: PropsWithChildren) => {
  const {pending} = useFormStatus();
  return (
   <Button type='submit' aria-disabled={pending} className='w-full mt-2'>
     {pending ? 'Submitting...' : children}
   </Button>
  )
}

export default SubmitButton