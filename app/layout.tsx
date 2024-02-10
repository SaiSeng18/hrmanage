import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "HRmanage",
    description:
        "Welcome to HRmanage, your go-to solution for seamless HR management. This powerful web app simplifies and streamlines all your HR processes, from employee onboarding to performance tracking. With user-friendly interfaces and robust features, HRmanage ensures efficient communication, task delegation, and data organization. Stay on top of your workforce dynamics effortlessly, making HR a breeze. Ready to elevate your HR game? Let HRmanage be your partner in success!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-gray-50`}>{children}</body>
        </html>
    );
}
