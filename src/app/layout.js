import localFont from "next/font/local";
import "./globals.css";
import {Header} from "@/components/header";
import {ThemeProvider} from "@/components/theme-provider";
import {Footer} from "@/components/footer";
import {Toaster} from "@/components/ui/toaster";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({children}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-100 dark:bg-black`}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <div className={'flex flex-col min-h-screen max-w-7xl bg-background md:px-20 mx-auto'}>
                <Header/>
                <main className={'flex-grow'}>
                    {children}
                </main>
                <Footer/>
            </div>
            <Toaster />
        </ThemeProvider>
        </body>
        </html>
    );
}
