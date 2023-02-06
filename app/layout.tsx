import "../styles/globals.css";
import NavBar from "@/components/NavBar";

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
    <div>
      <br />
      <p>copyright by AndKohler</p>
    </div>
  </footer>

  return (
    <html>
      <head />
      <body>
        <div className="mx-auto">
          {header}
          {children}
          {footer}
        </div>
        </body>
    </html>
  )
}
