import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>Elementos do REACT</h1>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="page/interacao">Interecao</Link></li>
            <li><Link href="page/comp_memory">Componente de Memoria</Link></li>
            <li><Link href="page/LikesButt">Button Like Hooks</Link></li>
          </ul>
        </nav>
        {children}</body>
    </html>
  );
}
