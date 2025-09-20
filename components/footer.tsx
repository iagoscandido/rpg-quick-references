import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-6 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} MinhaMarca. Todos os direitos reservados.
        </p>
        <nav className="flex gap-4 mt-4 sm:mt-0">
          <Link href="#" className="hover:underline">
            Sobre
          </Link>
          <Link href="#" className="hover:underline">
            Contato
          </Link>
          <Link href="#" className="hover:underline">
            Privacidade
          </Link>
        </nav>
      </div>
    </footer>
  );
}
