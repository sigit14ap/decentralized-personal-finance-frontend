"use client"

import React from 'react'
import Input from '@/components/atoms/Input'
import Button from '@/components/atoms/Button'

const LoginForm: React.FC = () => {
  const handleLogin = () => {

  }

  return (
    <form className="space-y-4 md:space-y-6" action="#">
      <Input placeholder="name@company.com" label="Email" name="email" type="email" required={true}/>
      <Input placeholder="**********" label="Password" name="password" type="password" required={true}/>
      
      <Button type="button" label="Sign in" onClick={handleLogin}/>
    </form>
  )
}

export default LoginForm