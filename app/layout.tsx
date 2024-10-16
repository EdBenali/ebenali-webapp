import Header from './(Header)'
import Footer from './(Footer)'
import './globals.css'
 
export default function RootLayout({children}: 
  {children: React.ReactNode;}) {
  return (
    <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <link rel="icon" type="image/ico" href="/favicon.ico" />
            <title>EdoBenali</title>
        </head>
        <body>
            <Header/>
                {children}
            <Footer/>
        </body>
    </html>
  )
}