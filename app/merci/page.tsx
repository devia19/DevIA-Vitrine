export default function Merci() {
  return (
    <main className="min-h-[60vh] max-w-2xl mx-auto p-6 flex flex-col items-center justify-center text-center">
      <h1 className="text-2xl font-bold mb-3">Merci pour votre demande !</h1>
      <p className="mb-2">Votre demande d'automatisation a bien été envoyée.</p>
      <p className="mb-4">Nous allons analyser vos besoins et vous reviendrons sous 24h avec une proposition adaptée à votre entreprise.</p>
      <a href="/" className="mt-6 inline-block px-4 py-2 border rounded hover:bg-gray-50">Retour à l'accueil</a>
    </main>
  );
}

