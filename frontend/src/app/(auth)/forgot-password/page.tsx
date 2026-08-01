"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, ArrowLeft, TrendingUp } from "lucide-react";
import Card from "../../../components/ui/Card";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement password reset request
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col items-center mb-8">
        <Link href="/" className="flex items-center gap-2.5 mb-6 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">Reset your password</h1>
        <p className="text-text-secondary text-sm mt-2 text-center max-w-xs">
          Enter your email address and we'll send you instructions to reset your password.
        </p>
      </div>

      <Card variant="glass" className="p-8 border-primary/10">
        {isSubmitted ? (
          <div className="text-center py-4 space-y-4">
            <div className="w-12 h-12 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-text-primary">Check your email</h3>
            <p className="text-sm text-text-secondary">
              We have sent a password reset link to your email address.
            </p>
            <Button 
              variant="outline" 
              className="w-full mt-6" 
              onClick={() => setIsSubmitted(false)}
            >
              Try another email
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input 
              label="Email Address" 
              type="email" 
              placeholder="name@example.com"
              icon={<Mail className="w-4 h-4" />}
              required
            />
            
            <Button type="submit" className="w-full" isLoading={isLoading}>
              Send Reset Link
            </Button>
          </form>
        )}
      </Card>

      <div className="mt-8 text-center">
        <Link href="/login" className="inline-flex items-center text-sm text-text-muted hover:text-text-primary transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to sign in
        </Link>
      </div>
    </div>
  );
}
