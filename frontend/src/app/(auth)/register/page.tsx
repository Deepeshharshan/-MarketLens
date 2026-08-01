"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, User, TrendingUp } from "lucide-react";
import Card from "../../../components/ui/Card";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement registration logic
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col items-center mb-8">
        <Link href="/" className="flex items-center gap-2.5 mb-6 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold">
            Market<span className="gradient-text">Lens</span>
          </span>
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">Create an account</h1>
        <p className="text-text-secondary text-sm mt-2">Start predicting the market today</p>
      </div>

      <Card variant="glass" className="p-8 border-primary/10">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input 
              label="First Name" 
              placeholder="John"
              required
            />
            <Input 
              label="Last Name" 
              placeholder="Doe"
              required
            />
          </div>
          
          <Input 
            label="Email Address" 
            type="email" 
            placeholder="name@example.com"
            icon={<Mail className="w-4 h-4" />}
            required
          />
          
          <Input 
            label="Password"
            type="password" 
            placeholder="••••••••"
            icon={<Lock className="w-4 h-4" />}
            required
          />

          <div className="pt-2">
            <label className="flex items-start gap-3 text-sm text-text-muted">
              <input type="checkbox" className="mt-1 bg-surface border-border rounded focus-ring text-primary accent-primary" required />
              <span>
                I agree to the{" "}
                <Link href="#" className="text-primary hover:underline">Terms of Service</Link>{" "}
                and{" "}
                <Link href="#" className="text-primary hover:underline">Privacy Policy</Link>
              </span>
            </label>
          </div>

          <Button type="submit" className="w-full mt-6" isLoading={isLoading}>
            Create Account
          </Button>
        </form>
      </Card>

      <p className="text-center text-sm text-text-muted mt-8">
        Already have an account?{" "}
        <Link href="/login" className="text-primary hover:text-primary-light transition-colors font-medium">
          Sign in
        </Link>
      </p>
    </div>
  );
}
