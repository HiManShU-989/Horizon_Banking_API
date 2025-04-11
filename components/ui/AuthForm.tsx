/* eslint-disable react/jsx-no-duplicate-props */
"use client";
import React, { use, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import CustomInput from './CustomInput';
import { authFormSchema } from '@/lib/utils';
import { Loader2 } from "lucide-react";
import { SignIn, SignUp } from '@/lib/actions/user.actions';
import PlaidLink from './PlaidLink';



const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const formSchema = authFormSchema(type);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password:''
    },
  })

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true)
    try{

// Sign up with appwrite and create a plaid link token
      if(type === "sign-up"){
      const userData = {
        firstName: data.firstName!,
        lastName: data.lastName!,
        address1: data.address1!,
        city: data.city!,
        state: data.state!,
        postalCode: data.postalCode!,
        dateOfBirth: data.dateOfBirth!,
        ssn: data.ssn!,
        email: data.email,
        password: data.password,
      };
        const newUser = await SignUp(userData);
        setUser(newUser);
    }

    if(type === "sign-in"){
      const response = await SignIn({
        email: data.email,
        password: data.password,
      })
      if(response){
        router.push('/');
        }
      }
    }catch (error) {
      console.log(error);
    }
    finally{
      setIsLoading(false);
    }
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(data);
    setIsLoading(false);
  }
  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href='/' className=' cursor-pointer flex items-center gap-1'>
          <Image src='/icons/logo.svg' alt='Horizon Logo'
            width={34}
            height={34}
          />
          <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Horizon</h1>
        </Link>
        <div className='flex flex-col gap-1 md:gap-3'>
          <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
            {user
              ? "Link Account"
              : type === "sign-in"
                ? "Sign In"
                : "Sign Up"
            }
            <p className='text-16 font-normal text-gray-600'>
              {user
                ? "Link your account to get started."
                : "Please enter your details."
              }
            </p>
          </h1>
        </div>
      </header>
      {
        user ? (
          <div className='flex flex-col gap-4'>
            <PlaidLink
            user = {user} variant='primary'
            />
          </div>
        ) : (
          <>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {type === "sign-up" && (
                  <>

                  <div className="flex gap-4">
                   <CustomInput control={form.control} name={'firstName'} label={'First Name'} placeholder={'Enter your first name'}/>
                  <CustomInput control={form.control} name={'lastName'} label={'Last Name'} placeholder={'Enter your last name'}/>
                  </div>

                   <CustomInput control={form.control} name={'address1'} label={'Address'} placeholder={'Enter your specific address'}/>
                   <CustomInput control={form.control} name={'city'} label={'City'} placeholder={'Enter your City'}/>
                   
                   <div className="flex gap-4">
                   <CustomInput control={form.control} name={'state'} label={'State'} placeholder={'Ex: UP'}/>
                  <CustomInput control={form.control} name={'postalCode'} label={'PinCode'} placeholder={'Ex: 400001'}/>
                   </div>

                   <div className="flex gap-4">
                  <CustomInput control={form.control} name={'dateOfBirth'} label={'Date Of Birth'} placeholder={'YYYY-MM-DD'}/>
                    <CustomInput control={form.control} name={'ssn'} label={'SSN'} placeholder={'Ex: 123-45-6789'}/>
                    </div>

                    </>
                  )}

                <CustomInput
                control={form.control} name={'email'} label={'Email'} placeholder={'Enter your email'}
                />
                
                <CustomInput
                control={form.control} name={'password'} label={'Password'} placeholder={'Enter your password'}
                />
                <div className='flex flex-col gap-4'>
                <Button className='form-btn'
                type="submit" disabled={isLoading}>
                  {isLoading?(
                    <>
                    <Loader2 className="animate-spin" size={20}/>
                    &nbsp;Loading...
                    </>
                  ):(
                    type === "sign-in" ? "Sign In" : "Sign Up"
                  )}
                </Button>
                </div>
              </form>
            </Form>
            <footer className='flex justify-normal gap-1'>
                  <p className='text-14 font-normal text-gray-600'>
                   { type==="sign-in" ? "Don't have an account?" : "Already have an account?"}
                  </p>
                  <Link href={type==='sign-in' ? '/sign-up' : '/sign-in'} className='form-link' >
                  {type === "sign-in" ? "Sign Up" : "Sign In"}
                  </Link>
            </footer>
          </>
      )
       }
    </section>
  )
}

export default AuthForm;

