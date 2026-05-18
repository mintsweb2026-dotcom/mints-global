import { SEO } from '../components/SEO';

export function Impressum() {
  return (
    <div className="bg-brand-black min-h-screen text-white pt-32 xl:pt-40 pb-20">
      <SEO 
        title="Impressum | Mints Global" 
        description="Impressum und rechtliche Hinweise von Mints Global."
        keywords={["impressum", "legal notice", "Mints Global impressum", "company details", "corporate information"]}
        canonical="/impressum"
        noindex={true}
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="font-display text-4xl lg:text-5xl font-black uppercase mb-12">Impressum</h1>
        <div className="prose prose-invert prose-lg max-w-none font-body text-brand-white-70">
          <p>Angaben gemäß § 5 TMG</p>
          
          <h2 className="text-white mt-8 mb-4">Mints Global</h2>
          <p>
            Office #315, 3rd Floor, Bank Street Building<br />
            Bur Dubai, Dubai<br />
            United Arab Emirates
          </p>

          <h2 className="text-white mt-8 mb-4">Kontakt</h2>
          <p>
            Telefon: +971 50 294 3916<br />
            E-Mail: info@mintsglobal.ae
          </p>

          <h2 className="text-white mt-8 mb-4">Europäischer Ansprechpartner</h2>
          <p>
            Für Anfragen aus Europa können Sie uns jederzeit per E-Mail kontaktieren. Wir stellen sicher, dass Ihr Anliegen DSGVO-konform bearbeitet wird.
          </p>

          <h2 className="text-white mt-8 mb-4">Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-olive-500 hover:text-white underline">https://ec.europa.eu/consumers/odr</a>.<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2 className="text-white mt-8 mb-4">Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
        </div>
      </div>
    </div>
  );
}
