"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// it will accept email or username and password and will call the login api
// and on success it will redirect to the dashboard page
//

const login = () => {
  return (
    <>
      <Card className="w-full max-w-md mx-auto mt-20">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your email or username and password to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* form fields for emailOrUsername and password */}
          <form>
            <div className="mb-4">
              <label
                htmlFor="emailOrUsername"
                className="block text-sm font-medium text-gray-700 mb-1">
                Email or Username
              </label>
              <input
                type="text"
                id="emailOrUsername"
                name="emailOrUsername"
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
            </div>
            {/**forgot password link */}
            <div className="mb-4 text-right">
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
          <Button asChild variant="link" className="w-full mt-2">
            <Link href="/auth/signup">{"Don't have an account? Signup"}</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default login;
