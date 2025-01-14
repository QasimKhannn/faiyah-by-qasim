import "./globals.css";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

const Navbar = dynamic(() => import("@/components/navbar"), { ssr: false });
const BackgroundBeamsWithCollision = dynamic(() => import("@/components/aceternity/background-beams-with-collision"), { ssr: false });

import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '400', '600', '700', '900'],
});

export const metadata: Metadata = {
    title: "Qasim Khan",
    description: "Full Stack Software Engineer </>",
};

interface Props {
    children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }: Readonly<Props>) => {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="./favicon.ico" sizes="any" />
            </head>
            <body className={`${poppins.className} bg-black font-normal`}>
                <Navbar />
                <BackgroundBeamsWithCollision>
                    {children}
                </BackgroundBeamsWithCollision>
            </body>
        </html>
    );
};

export default RootLayout;
