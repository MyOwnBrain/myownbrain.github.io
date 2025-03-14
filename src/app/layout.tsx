import type {Metadata} from 'next';
import {Geist, Geist_Mono, Plus_Jakarta_Sans} from 'next/font/google';
import '@/styles/globals.css';
import {ThemeProvider} from '@/components/theme-provider';
import {Navbar} from '@/components/navbar';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
    variable: '--font-plus-jakarta-sans',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'MyOwnBrain',
    description: "I'm a 18-year-old Musician & Developer from Germany. Here you can find out about me.",
    keywords: ['MyOwnBrain', 'Musician', 'Developer', 'Music', 'Coding'],
    authors: [{name: 'MyOwnBrain', url: 'https://www.instagram.com/piano.niklas/'}],
    robots: {index: true, follow: true},
    applicationName: 'MyOwnBrain',
    appleWebApp: {capable: false, title: 'MyOwnBrain', statusBarStyle: 'black-translucent'},
    appLinks: {web: {url: 'https://myownbrain.github.io/', should_fallback: true}},
    classification: 'Web Portal',
    creator: 'MyOwnBrain',
    formatDetection: {address: true, date: true, email: true, telephone: true, url: true},
    generator: 'Next.js',
    icons: {
        icon: {url: 'https://myownbrain.github.io/icon.svg', type: 'image/svg+xml', sizes: 'any'},
        apple: {url: 'https://myownbrain.github.io/icon.svg', type: 'image/svg+xml', sizes: 'any'},
    },
    publisher: 'GitHub Pages',
    openGraph: {
        type: 'website',
        url: 'https://myownbrain.github.io/',
        title: 'MyOwnBrain',
        description: "I'm a 18-year-old Musician & Developer from Germany. Here you cab find out about me.",
        siteName: 'MyOwnBrain',
        images: [{url: 'https://myownbrain.github.io/OpenGraph-Image.png'}],
        locale: 'Germany',
    },
    twitter: {
        card: 'summary_large_image',
        creator: '@myownbrain37',
        description: "I'm a 18-year-old Musician & Developer from Germany. Here you cab find out about me.",
        images: 'https://myownbrain.github.io/OpenGraph-Image.png',
        title: 'MyOwnBrain',
    },
    verification: {google: 'jOsKwkiNmQkFXRpdjEIXvnmpkf4RYscmZvpDdJqe6d8'},
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.className} font-pjs antialiased`}
                style={{
                    background: 'radial-gradient(circle at 50% 10vh, #262626, #040404 50%) #040404',
                }}
            >
                <ThemeProvider attribute='class' defaultTheme='dark' disableTransitionOnChange>
                    <Navbar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
