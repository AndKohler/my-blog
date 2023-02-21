import "../styles/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function RootLayout({ 
  children, 
}: {
  children: React.ReactNode;
}) {
  
  const header = 
  <header>
    <NavBar />
  </header>
  
  const footer =
  <footer>
    <Footer />
  </footer>

  return (
    <html >
      <head />
      <body>
        <div className="bg-gray-300 flex flex-col min-h-screen justify-between">
          {header}
          {children}
          {footer}
        </div>
        </body>
    </html>
  )
}
