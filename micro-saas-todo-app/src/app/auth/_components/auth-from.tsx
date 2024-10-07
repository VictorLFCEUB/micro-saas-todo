'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { toast } from "@/hooks/use-toast"

export function AuthForm() {

  const form = useForm()

  const handleSubmit = form.handleSubmit(async (data) => {
    
    try {
      await signIn('email', { email: data.email, redirect: false })
      toast({
        title: 'Check your email',
        description: 'We sent a magic link to your email address.',
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred while sending the magic link.',
      })
    }

  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
          <CardDescription>Sign in with your email</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Email address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full"
                  {...form.register('email')}
                />
              </div>
              
            </div>
          </CardContent>
          <CardFooter>
          <Button type="submit" className="w-full">
            Send Magic Link
          </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}