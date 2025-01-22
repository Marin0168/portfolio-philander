import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <div>
          <div>
            <Navbar />
          </div>
          <div>
            {children}
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
