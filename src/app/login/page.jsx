"use client";
import SideContent from "@/components/SideContent/SideContent";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { motion } from "motion/react";
import { useRouter, useSearchParams } from "next/navigation";

const LoginPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectPath = searchParams.get("redirect");

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const { email, password } = Object.fromEntries(formData.entries());

        await authClient.signIn.email({
            email,
            password,
            callbackURL: redirectPath || "/",
        }, {
            onSuccess: () => {
                toast.success("Login Successful!");
                if (!redirectPath) router.push("/");
            },
            onError: (ctx) => {
                toast.error(ctx.error.message);
            }
        });
    };

    const handleGoogleSignIn = async () => {
        const { data, error } = await authClient.signIn.social({
            provider: "google",
            callbackURL: redirectPath || "/",
        });
        if (error) {
            console.log(error);
            toast.error("Google login failed!");
        }
    };

    return (
        <div className="flex gap-10 justify-center items-center p-3 lg:p-1 container mx-auto my-10">
            <div className="hidden lg:block lg:w-1/2">
                <SideContent />
            </div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-full max-w-md lg:w-1/2 flex flex-col justify-center border border-gray-200 rounded-2xl shadow-2xl p-8 lg:p-5 h-full space-y-4 items-center"
            >
                <div className="text-center space-y-2 pb-5">
                    <h2 className="text-3xl font-semibold text-[#0B1C30]">Welcome back</h2>
                    <p className="text-sm text-[#464555]">Enter your details to access your dashboard.</p>
                </div>

                <Form className="flex flex-col gap-4 space-y-2 w-full" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) ? "Invalid email" : null}
                    >
                        <Label>Email</Label>
                        <Input className={'w-full'} placeholder="Enter Your Email Address" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="password"
                        type="password"
                    >
                        <Label>Password</Label>
                        <Input className={'w-full'} placeholder="Enter your password" />
                        <FieldError />
                    </TextField>

                    <Button className={'w-full bg-indigo-600 text-white py-5'} type="submit">
                        <Check /> Submit
                    </Button>

                    <div className="flex items-center my-2">
                        <div className="grow border-t border-gray-300"></div>
                        <span className="mx-4 text-gray-500 text-sm font-medium uppercase">Or continue with</span>
                        <div className="grow border-t border-gray-300"></div>
                    </div>
                </Form>

                <div className="w-full">
                    <button
                        onClick={handleGoogleSignIn}
                        className="btn w-full btn-outline btn-primary flex items-center justify-center gap-2"
                    >
                        <FaGoogle /> SignIn Google
                    </button>

                    <div className="pt-5 text-center">
                        <p className="text-sm text-[#464555]">
                            Dont have an account?
                            <Link href={'/register'}>
                                <span className="font-bold text-indigo-600 cursor-pointer ml-1">Register</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default LoginPage;