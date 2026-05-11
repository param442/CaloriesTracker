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

const Signup = () => {
  return (
    <>
      <Card className="w-full max-w-md mx-auto mt-20">
        <CardHeader>
          <CardTitle>Signup</CardTitle>
          <CardDescription> Create an account to get started </CardDescription>
        </CardHeader>
        <CardContent>
          {/* form fields for emailOrUsername and password */}
          <form>
            {/**First thing first we have a name email password */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
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
            {/**submit button */}
            <Button type="submit" className="w-full">
              Signup
            </Button>
            <Button variant="outline" className="w-full mt-2">
              Signup with Google
            </Button>
            <Button asChild variant="link" className="w-full mt-2">
              <Link href="/auth/login">Already have an account? Login</Link>
            </Button>
          </form>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </>
  );
};

export default Signup;
