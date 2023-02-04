import Link from "next/link";

export default function RootLayout({ 
  children, 
}: {
  children: React.ReactNode;
}) {
  
  const header = 
  <header>
    <div>
      <Link href="/"><h1>Kohler's Hobby Page</h1></Link>
      <p>Welcome to my hobby page.</p>
      <br />
    </div>
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
        {header}
        {children}
        {footer}
        </body>
    </html>
  )
}
