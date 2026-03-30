import "./globals.css";

export const metadata = {
    title: "MyStore",
    description: "Thực hành Next.js buổi 1",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}