'use client'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import SubmitButton from "@/components/ui/submitButton"
import { signIn } from "@/lib/auth"
import Link from "next/link"
import { useActionState } from "react"

const SignInForm = () => {
    const [state,action] = useActionState(signIn,undefined)
    return (
        <form action={action}>
            <div className="flex flex-col gap-2 w-64">
                {state?.message && (
                    <p className="text-sm text-red-500">{state.message}</p>
                )}

                <div>
                    <Label htmlFor='emial'>Emial</Label>
                    <Input id='email' name="email" placeholder="m@emample.com" type="email"/>
                </div>

                {state?.error && (
                    <p className="text-sm text-red-500">{state.error.email}</p>
                )}

                <div>
                    <Label htmlFor='password'>Password</Label>
                    <Input id='password' name="password" type="password"/>
                </div>

                {state?.error && (
                    <p className="text-sm text-red-500">{state.error?.password}</p>
                )}

                <Link className="text-sm underline" href='#'>
                    Forget your password?
                </Link>

                <SubmitButton>Sign In</SubmitButton>

                <div className="flex justify-between text-sm">
                    <p>Dont't have an account?</p>
                    <Link href={'/auth/signup'} className="text-sm underline">
                    Sign Up
                </Link>
                </div>
            </div>
        </form>
    )
}

export default SignInForm