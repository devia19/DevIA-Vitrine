export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-600 flex flex-col md:flex-row gap-3 md:gap-6 justify-between">
        <div>© {new Date().getFullYear()} DevIA. Tous droits réservés.</div>
        <nav className="flex gap-4">
          <a href="/mentions-legales" className="hover:underline">Mentions légales</a>
          <a href="/politique-de-confidentialite" className="hover:underline">Politique de confidentialité</a>
        </nav>
      </div>
    </footer>
  );
}

