import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="de">
      <body className="min-h-screen flex items-center justify-center bg-[#FAFBFC]">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-[#1A1D23] mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-[#1A1D23] mb-4">
            Seite nicht gefunden
          </h2>
          <p className="text-[#5C6370] mb-8">
            Die gesuchte Seite existiert leider nicht.
          </p>
          <Link
            href="/de"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#1A1D23] text-white font-medium rounded-lg hover:bg-[#5C6370] transition-colors"
          >
            Zur Startseite
          </Link>
        </div>
      </body>
    </html>
  );
}
