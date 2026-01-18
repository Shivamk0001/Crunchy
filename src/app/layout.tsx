import "./globals.css";
import { CartProvider } from "../context/CartContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}  {/* Yahan koi Header ya Footer nahi hona chahiye */}
        </CartProvider>
      </body>
    </html>
  );
}