import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-teal-950 text-white py-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mx-auto w-full max-w-6xl px-4">
        <p className="text-center sm:text-left mb-4 sm:mb-0">&copy; {new Date().getFullYear()} Todos direitos Reservados</p>
        <nav>
          <ul className="flex flex-col sm:flex-row space-y-2 sm:space-x-4 sm:space-y-0 text-center sm:text-left">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">Sobre</Link>
            </li>
            <li>
              <Link href="/contato" className="hover:underline">Contato</Link>
            </li>
            <li>
              <Link href="https://github.com/MachadoJorgeH" className="hover:underline flex items-center justify-center sm:justify-start">
                <FaGithub className="mr-2" /> Dev
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
