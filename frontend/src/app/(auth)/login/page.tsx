"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Card from "../../../components/ui/Card";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!email) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    // UI-only loading state simulation
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full"
    >
      <div className="flex flex-col items-center mb-8">
        <Link href="/" className="flex items-center gap-2.5 mb-6 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold">
            Market<span className="gradient-text">Lens</span>
          </span>
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
        <p className="text-text-secondary text-sm mt-2">Enter your credentials to access your account</p>
      </div>

      <Card variant="glass" className="p-8 border-primary/15 relative overflow-hidden">
        {/* Subtle internal card glow */}
        <div className="absolute inset-0 bg-gradient-radial opacity-10 pointer-events-none" />
        
        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          <Input 
            label="Email Address" 
            type="email" 
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={<Mail className="w-4 h-4" />}
            error={errors.email}
            required
          />
          
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-sm font-medium text-text-secondary">Password</label>
              <Link href="/forgot-password" className="text-xs text-primary hover:text-primary-light transition-colors font-medium">
                Forgot password?
              </Link>
            </div>
            <Input 
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={<Lock className="w-4 h-4" />}
              error={errors.password}
              required
            />
          </div>

          <Button type="submit" className="w-full mt-6" isLoading={isLoading}>
            Sign In
          </Button>
        </form>

        <div className="mt-8 pt-6 border-t border-border/50 relative z-10">
          <div className="relative flex items-center justify-center mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/50"></div>
            </div>
            <span className="relative bg-bg-primary px-3 text-xs text-text-muted">Or continue with</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="w-full border-border hover:border-border-light text-text-primary bg-transparent">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </Button>
            <Button variant="outline" className="w-full border-border hover:border-border-light text-text-primary bg-transparent">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              GitHub
            </Button>
          </div>
        </div>
      </Card>

      <p className="text-center text-sm text-text-muted mt-8">
        Don't have an account?{" "}
        <Link href="/register" className="text-primary hover:text-primary-light transition-colors font-medium">
          Sign up
        </Link>
      </p>
    </motion.div>
  );
}
