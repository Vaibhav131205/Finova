import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Finova",
  description: "Your Intelligent Personal Finance Assistant",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/*Header*/}
          <Header />
          <main className="min-h-screen">{children}</main>

          {/* footer */}
          <footer className="bg-blue-50 py-12">
            <div className="Container mx-auto px-4 text-center text-gray-600">
              <p>Made with ❤️ by Finova Team</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}