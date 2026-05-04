"use client";
import SideContent from "@/components/SideContent/SideContent";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { easeInOut, motion } from "motion/react"

const RegisterPage = () => {
    const router = useRouter()
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const { name, url, email, password } = data;

        const { data: res, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image: url,
            callbackURL: "/login"
        },{  
            onSuccess: (ctx) => {
            
               router.push('/login');
                toast.success("Register Successful");
            },
            onError: (ctx) => {
              
                toast.error(ctx.error.message);
            },
        });
        console.log(res, error);
    };

    return (
        <div className="flex gap-10 justify-center items-center container p-3 lg:p-1 mx-auto my-10">
            <div className="hidden lg:block lg:w-1/2">
                <SideContent />
            </div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                
                className="flex  flex-col justify-center  items-center py-5  border border-gray-200 rounded-2xl shadow-2xl  ">
                <div className="text-center space-y-2 pb-6">
                    <h2 className="text-3xl font-semibold text-[#0B1C30]">Create an Account</h2>
                    <p className="text-sm text-[#464555]">Sign up now to explore all our features.</p>
                </div>

                <Form className="flex w-full justify-center  flex-col gap-4 space-y-2 p-5 " onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="name"
                        type="text"


                    >
                        <Label>Name</Label>
                        <Input className={'w-full'} name="name" placeholder="Enter Your Name" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="url"
                        type="text"

                    >
                        <Label>Photo URL</Label>
                        <Input
                            className={'w-full'}
                            name="url"
                            placeholder="Enter Photo URL" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input
                            className={'w-full'}
                            name="email"
                            placeholder="Enter Email Address" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input
                            className={'w-full'}
                            name="password"
                            placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex gap-2">
                        <Button className={'bg-indigo-600'} type="submit">
                            <Check />
                            Submit
                        </Button>
                        <Button type="reset" variant="secondary">
                            Reset
                        </Button>
                    </div>
                </Form>

                <div>
                    <div className="pt-5">
                        <p className="text-sm text-[#464555]">Already have an account? <Link href={'/login'}>
                            <span className="font-bold text-indigo-600 cursor-pointer">Login</span>
                        </Link></p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default RegisterPage;