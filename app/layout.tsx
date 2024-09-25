import "./globals.css";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/navbar"), { ssr: false });
const BackgroundBeamsWithCollision = dynamic(() => import("@/components/aceternity/background-beams-with-collision"), { ssr: false });

import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: "Faiyah 🔥",
    description: "We need some faiyah in our life 🔥",
};

interface Props {
    children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }: Readonly<Props>) => {
    return (
        <html lang="en">
            <body className={`${poppins.className} font-normal`}>
                <div className="absolute top-5 left-0 w-full z-10">
                    <Navbar />
                </div>
                <BackgroundBeamsWithCollision>
                    {children}
                </BackgroundBeamsWithCollision>
            </body>
        </html>
    );
};

export default RootLayout;
