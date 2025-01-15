"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { zoomOutVariants } from "@/lib/framer";
import emailjs from "@emailjs/browser";
import LabelInputContainer from "@/components/label-inp-cont";
import BottomGradient from "@/components/bottom-grad";

const Input = dynamic(() => import("@/components/aceternity/form/input"), { ssr: false });
const TextArea = dynamic(() => import("@/components/aceternity/form/text-area"), { ssr: false });
const Label = dynamic(() => import("@/components/aceternity/form/label"), { ssr: false });

const ContactUs: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            const formData = new FormData(form.current);
            const userName = formData.get("user_name")?.toString().trim();
            const userLastName = formData.get("user_lastname")?.toString().trim();
            const userEmail = formData.get("user_email")?.toString().trim();
            const message = formData.get("message")?.toString().trim();

            if (!userName || !userLastName || !userEmail || !message) {
                setError("All fields are required");
                return;
            }

            setError(null);

            emailjs
                .sendForm(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                    form.current,
                    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC!
                )
                .then(
                    () => {
                        console.log("Email successfully sent!");
                        form.current?.reset();
                    },
                    (error) => {
                        console.log("Failed to send email:", error.text);
                    }
                );
        }
    };

    return (
        <motion.div
            className="md:h-screen h-full w-full mx-auto grid grid-cols-2 gap-4 px-5 md:mt-0 mb-10 md:mb-0 py-3 bg-transparent"
            variants={zoomOutVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="md:h-screen flex flex-col justify-center items-center w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black md:col-span-1 col-span-2">
                <h2 className="font-bold text-2xl text-neutral-200">Get In Touch</h2>
                <p className="text-xs max-w-sm mt-2 font-bold text-neutral-300">
                    Reach out, and let's create a universe of possibilities together!
                </p>

                <form ref={form} className="my-8" onSubmit={handleSubmit}>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                        <LabelInputContainer>
                            <Label htmlFor="firstname">First name</Label>
                            <Input id="firstname" name="user_name" placeholder="Qasim" type="text" required />
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <Label htmlFor="lastname">Last name</Label>
                            <Input id="lastname" name="user_lastname" placeholder="Khan" type="text" required />
                        </LabelInputContainer>
                    </div>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" name="user_email" placeholder="projectmayhem@fc.com" type="email" required />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="message">Message</Label>
                        <TextArea id="message" name="message" placeholder="Your Message" required />
                    </LabelInputContainer>

                    <button
                        className="bg-gradient-to-br font-bold relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
                        type="submit"
                    >
                        Send it to the Space &rarr;
                        <BottomGradient />
                    </button>
                </form>
            </div>
            <div className="relative w-full md:h-full object-cover mx-auto rounded-none md:rounded-2xl shadow-input bg-black md:col-span-1 col-span-2 overflow-hidden">
                <Image
                    src="https://img.freepik.com/free-photo/view-astronaut-spacesuit-snowboarding-moon_23-2151294776.jpg"
                    alt="qasim-khan"
                    fill
                    className="object-cover rounded-2xl"
                    unoptimized
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
            </div>
        </motion.div>
    );
};

export default ContactUs;
