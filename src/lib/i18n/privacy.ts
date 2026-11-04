import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

type PrivacyContent = Dictionary["privacy"];

const nl: PrivacyContent = {
  title: "Privacybeleid",
  intro:
    "BelgiumVignette.be is een onafhankelijke informatiesite over het geplande Belgische wegenvignet. Wij respecteren uw privacy en gaan zorgvuldig om met persoonsgegevens.",
  lead: [
    "In dit privacybeleid leggen wij uit welke gegevens wij verzamelen, waarom wij deze verwerken, hoe lang wij ze bewaren en welke rechten u heeft.",
  ],
  lastUpdated: "4 november 2026",
  sections: [
    {
      id: "controller",
      title: "1. Verwerkingsverantwoordelijke",
      paragraphs: [
        "BelgiumVignette.be wordt beheerd door:",
        "**2xGen LLC**",
        "1209 Mountain Road Pl NE, STE R",
        "Albuquerque, NM 87110",
        "Verenigde Staten",
        "Registratienummer: 0008045445",
        "**Europees contactpunt**",
        "Praag, Tsjechië",
        "E-mail: info@tolls.be",
        "2xGen LLC wordt feitelijk vanuit Europa beheerd. Voor vragen over privacy, persoonsgegevens of het uitoefenen van uw rechten kunt u contact opnemen via bovenstaand e-mailadres.",
        "BelgiumVignette.be is een onafhankelijke informatiesite en is niet verbonden met de Belgische overheid, Vlaanderen, Wallonië of Brussel.",
      ],
    },
    {
      id: "email-notification",
      title: "2. Eenmalige e-mailmelding",
      paragraphs: [
        "Bezoekers kunnen zich vrijwillig inschrijven om één e-mailmelding te ontvangen zodra de officiële of geautoriseerde verkoop van het Belgische wegenvignet beschikbaar wordt.",
        "Bij inschrijving verzamelen wij:",
      ],
      list: [
        "Uw e-mailadres.",
        "Uw gekozen taal.",
        "De datum en het tijdstip van uw toestemming.",
        "Een registratie van de gegeven toestemming.",
      ],
    },
    {
      id: "email-notification-use",
      title: "",
      paragraphs: [
        "Wij gebruiken deze gegevens uitsluitend voor het versturen van de door u aangevraagde melding.",
        "**U ontvangt maximaal één e-mailmelding. Wij versturen geen nieuwsbrieven, reclame of andere marketingberichten.**",
        "De rechtsgrond voor deze verwerking is uw toestemming, overeenkomstig artikel 6, lid 1, onder a van de Algemene Verordening Gegevensbescherming (AVG).",
        "U kunt uw toestemming op ieder moment intrekken door een e-mail te sturen naar info@tolls.be.",
      ],
    },
    {
      id: "retention",
      title: "3. Bewaartermijn en verwijdering",
      paragraphs: [
        "Wij bewaren uw persoonsgegevens uitsluitend zolang dit noodzakelijk is om de aangevraagde eenmalige e-mailmelding te versturen.",
        "**Na het succesvol versturen van deze melding verwijderen wij uw e-mailadres, taalvoorkeur en bijbehorende persoonsgegevens uit onze actieve systemen.**",
        "Wanneer de notificatiedienst wordt beëindigd voordat de verkoop beschikbaar wordt, verwijderen wij de verzamelde persoonsgegevens eveneens.",
        "Als u uw toestemming intrekt, verwijderen wij uw gegevens zonder onnodige vertraging, tenzij een wettelijke verplichting verdere bewaring vereist.",
        "Gegevens die eventueel nog in technische back-ups aanwezig zijn, worden verwijderd volgens de toepasselijke back-upbewaartermijnen. Een beperkte registratie kan worden bewaard wanneer dit noodzakelijk is om aan wettelijke verplichtingen te voldoen.",
      ],
    },
    {
      id: "hosting",
      title: "4. Hosting en gegevensopslag",
      paragraphs: [
        "Voor het functioneren van BelgiumVignette.be maken wij gebruik van externe technische dienstverleners.",
        "**Vercel — websitehosting**",
        "Onze website wordt gehost via Vercel. Voor het functioneren en beveiligen van de website kunnen technische gegevens worden verwerkt, waaronder IP-adressen, serververzoeken en technische loggegevens.",
        "**Supabase — opslag van inschrijvingen**",
        "Wij gebruiken Supabase om de gegevens van bezoekers die zich aanmelden voor de eenmalige e-mailmelding op te slaan.",
        "De inschrijvingsgegevens worden opgeslagen in de Europese regio die voor onze database is ingesteld.",
        "Afhankelijk van de gebruikte dienstverlening kunnen gegevens ook buiten de Europese Economische Ruimte worden verwerkt of toegankelijk zijn. Waar vereist worden passende waarborgen toegepast overeenkomstig de AVG.",
      ],
    },
    {
      id: "cookies",
      title: "5. Cookies en websiteanalyse",
      paragraphs: [
        "Wij gebruiken lokale opslag in uw browser om uw cookievoorkeuren te onthouden.",
        "Daarnaast gebruiken wij Vercel Analytics om inzicht te krijgen in het gebruik van onze website, zoals bezochte pagina's en algemene bezoekersstatistieken.",
        "Voor zover wettelijk vereist, wordt hiervoor vooraf toestemming gevraagd via onze cookiebanner.",
        "U kunt uw toestemming op ieder moment aanpassen of intrekken via 'Cookievoorkeuren' onderaan de website.",
        "Wij gebruiken daarnaast Google Search Console en Bing Webmaster Tools om de vindbaarheid van onze website in zoekmachines te analyseren. Eventuele verificatietags dienen om het eigendom van de website te bevestigen.",
      ],
    },
    {
      id: "sharing",
      title: "6. Delen van persoonsgegevens",
      paragraphs: [
        "Wij verkopen of verhuren uw persoonsgegevens niet aan derden.",
        "Persoonsgegevens kunnen uitsluitend worden verwerkt door dienstverleners voor zover dit noodzakelijk is voor:",
      ],
      list: [
        "Het hosten en beveiligen van de website.",
        "Het opslaan en beheren van uw inschrijving.",
        "Het versturen van de aangevraagde eenmalige e-mailmelding.",
        "Het technisch onderhouden van onze dienstverlening.",
      ],
    },
    {
      id: "sharing-limits",
      title: "",
      paragraphs: [
        "Wij gebruiken uw e-mailadres niet voor affiliate marketing, commerciële aanbiedingen of andere doeleinden waarvoor u geen toestemming heeft gegeven.",
      ],
    },
    {
      id: "rights",
      title: "7. Uw rechten onder de AVG",
      paragraphs: [
        "Op grond van de Algemene Verordening Gegevensbescherming (AVG) heeft u, afhankelijk van de omstandigheden, recht op:",
      ],
      list: [
        "**Inzage:** u kunt opvragen welke persoonsgegevens wij van u verwerken.",
        "**Correctie:** u kunt onjuiste persoonsgegevens laten aanpassen.",
        "**Verwijdering:** u kunt verzoeken uw persoonsgegevens te verwijderen.",
        "**Beperking:** u kunt in bepaalde gevallen de verwerking laten beperken.",
        "**Overdraagbaarheid:** u kunt uw gegevens ontvangen in een gestructureerd, gangbaar formaat.",
        "**Bezwaar:** u kunt bezwaar maken tegen bepaalde verwerkingen.",
        "**Intrekking van toestemming:** u kunt uw eerder gegeven toestemming op ieder moment intrekken.",
      ],
    },
    {
      id: "rights-contact",
      title: "",
      paragraphs: [
        "Voor vragen of verzoeken kunt u contact opnemen via info@tolls.be.",
        "Wij behandelen verzoeken binnen de termijnen die de AVG voorschrijft.",
        "U heeft daarnaast het recht om een klacht in te dienen bij een bevoegde toezichthoudende autoriteit voor gegevensbescherming.",
      ],
    },
    {
      id: "changes",
      title: "8. Wijzigingen in dit privacybeleid",
      paragraphs: [
        "Wij kunnen dit privacybeleid aanpassen wanneer onze dienstverlening, technische systemen of toepasselijke wetgeving veranderen.",
        "De meest recente versie wordt op deze pagina gepubliceerd, met vermelding van de datum van de laatste wijziging.",
      ],
    },
    {
      id: "closing",
      title: "BelgiumVignette.be — onafhankelijke informatie over het Belgische wegenvignet",
      paragraphs: [
        "BelgiumVignette.be is geen officiële website van de Belgische overheid en verkoopt zelf geen wegenvignetten.",
        "De informatie op deze website dient uitsluitend ter algemene informatie. De geplande invoeringsdatum, tarieven en voorwaarden kunnen wijzigen en zijn onder voorbehoud van definitieve goedkeuring.",
        "Controleer vóór uw reis of aankoop altijd de meest recente informatie via de officiële websites van de bevoegde Belgische overheden, waaronder Vlaanderen.be.",
        "**Contact:** info@tolls.be",
      ],
    },
  ],
};

const en: PrivacyContent = {
  title: "Privacy policy",
  intro:
    "BelgiumVignette.be is an independent information site about the planned Belgian road vignette. We respect your privacy and handle personal data carefully.",
  lead: [
    "This privacy policy explains which data we collect, why we process it, how long we keep it and which rights you have.",
  ],
  lastUpdated: "4 November 2026",
  sections: [
    {
      id: "controller",
      title: "1. Data controller",
      paragraphs: [
        "BelgiumVignette.be is operated by:",
        "**2xGen LLC**",
        "1209 Mountain Road Pl NE, STE R",
        "Albuquerque, NM 87110",
        "United States",
        "Registration number: 0008045445",
        "**European contact point**",
        "Prague, Czechia",
        "Email: info@tolls.be",
        "2xGen LLC is effectively managed from Europe. For questions about privacy, personal data or exercising your rights, contact us at the email address above.",
        "BelgiumVignette.be is an independent information site and is not affiliated with the Belgian government, Flanders, Wallonia or Brussels.",
      ],
    },
    {
      id: "email-notification",
      title: "2. One-time email notification",
      paragraphs: [
        "Visitors may voluntarily sign up to receive one email notification when official or authorised sales of the Belgian road vignette become available.",
        "When you sign up, we collect:",
      ],
      list: [
        "Your email address.",
        "Your chosen language.",
        "The date and time of your consent.",
        "A record of the consent given.",
      ],
    },
    {
      id: "email-notification-use",
      title: "",
      paragraphs: [
        "We use this data solely to send the notification you requested.",
        "**You will receive a maximum of one email notification. We do not send newsletters, advertising or other marketing messages.**",
        "The legal basis for this processing is your consent, pursuant to Article 6(1)(a) of the General Data Protection Regulation (GDPR).",
        "You may withdraw your consent at any time by emailing info@tolls.be.",
      ],
    },
    {
      id: "retention",
      title: "3. Retention and deletion",
      paragraphs: [
        "We keep your personal data only for as long as necessary to send the one-time email notification you requested.",
        "**After this notification has been sent successfully, we delete your email address, language preference and related personal data from our active systems.**",
        "If the notification service is discontinued before sales become available, we likewise delete the personal data collected.",
        "If you withdraw your consent, we delete your data without undue delay, unless a legal obligation requires further retention.",
        "Data that may still exist in technical backups is deleted according to applicable backup retention periods. A limited record may be kept where necessary to comply with legal obligations.",
      ],
    },
    {
      id: "hosting",
      title: "4. Hosting and data storage",
      paragraphs: [
        "To operate BelgiumVignette.be we use external technical service providers.",
        "**Vercel — website hosting**",
        "Our website is hosted via Vercel. Technical data may be processed to operate and secure the website, including IP addresses, server requests and technical logs.",
        "**Supabase — signup storage**",
        "We use Supabase to store data from visitors who sign up for the one-time email notification.",
        "Signup data is stored in the European region configured for our database.",
        "Depending on the services used, data may also be processed or accessible outside the European Economic Area. Where required, appropriate safeguards are applied in accordance with the GDPR.",
      ],
    },
    {
      id: "cookies",
      title: "5. Cookies and website analytics",
      paragraphs: [
        "We use local storage in your browser to remember your cookie preferences.",
        "We also use Vercel Analytics to understand how our website is used, such as pages visited and general visitor statistics.",
        "Where legally required, prior consent is requested via our cookie banner.",
        "You can change or withdraw your consent at any time via 'Cookie settings' at the bottom of the website.",
        "We also use Google Search Console and Bing Webmaster Tools to analyse the findability of our website in search engines. Any verification tags serve to confirm website ownership.",
      ],
    },
    {
      id: "sharing",
      title: "6. Sharing of personal data",
      paragraphs: [
        "We do not sell or rent your personal data to third parties.",
        "Personal data may only be processed by service providers to the extent necessary for:",
      ],
      list: [
        "Hosting and securing the website.",
        "Storing and managing your signup.",
        "Sending the requested one-time email notification.",
        "Technically maintaining our services.",
      ],
    },
    {
      id: "sharing-limits",
      title: "",
      paragraphs: [
        "We do not use your email address for affiliate marketing, commercial offers or other purposes for which you have not given consent.",
      ],
    },
    {
      id: "rights",
      title: "7. Your rights under the GDPR",
      paragraphs: [
        "Under the General Data Protection Regulation (GDPR), depending on the circumstances, you have the right to:",
      ],
      list: [
        "**Access:** you can request which personal data we process about you.",
        "**Rectification:** you can have inaccurate personal data corrected.",
        "**Erasure:** you can request deletion of your personal data.",
        "**Restriction:** in certain cases you can have processing restricted.",
        "**Portability:** you can receive your data in a structured, commonly used format.",
        "**Objection:** you can object to certain processing.",
        "**Withdrawal of consent:** you can withdraw previously given consent at any time.",
      ],
    },
    {
      id: "rights-contact",
      title: "",
      paragraphs: [
        "For questions or requests, contact info@tolls.be.",
        "We handle requests within the time limits prescribed by the GDPR.",
        "You also have the right to lodge a complaint with a competent data protection supervisory authority.",
      ],
    },
    {
      id: "changes",
      title: "8. Changes to this privacy policy",
      paragraphs: [
        "We may update this privacy policy when our services, technical systems or applicable law change.",
        "The most recent version is published on this page, with the date of the latest change.",
      ],
    },
    {
      id: "closing",
      title: "BelgiumVignette.be — independent information on the Belgian road vignette",
      paragraphs: [
        "BelgiumVignette.be is not an official website of the Belgian government and does not itself sell road vignettes.",
        "Information on this website is for general information only. The planned introduction date, rates and conditions may change and remain subject to final approval.",
        "Before travelling or purchasing, always check the latest information on the official websites of the competent Belgian authorities, including Vlaanderen.be.",
        "**Contact:** info@tolls.be",
      ],
    },
  ],
};

const de: PrivacyContent = {
  title: "Datenschutzerklärung",
  intro:
    "BelgiumVignette.be ist eine unabhängige Informationswebsite zur geplanten belgischen Straßenvignette. Wir respektieren Ihre Privatsphäre und gehen sorgfältig mit personenbezogenen Daten um.",
  lead: [
    "In dieser Datenschutzerklärung erläutern wir, welche Daten wir erheben, warum wir sie verarbeiten, wie lange wir sie speichern und welche Rechte Sie haben.",
  ],
  lastUpdated: "4. November 2026",
  sections: [
    {
      id: "controller",
      title: "1. Verantwortlicher",
      paragraphs: [
        "BelgiumVignette.be wird betrieben von:",
        "**2xGen LLC**",
        "1209 Mountain Road Pl NE, STE R",
        "Albuquerque, NM 87110",
        "Vereinigte Staaten",
        "Registrierungsnummer: 0008045445",
        "**Europäische Kontaktstelle**",
        "Prag, Tschechien",
        "E-Mail: info@tolls.be",
        "2xGen LLC wird faktisch aus Europa geführt. Bei Fragen zu Datenschutz, personenbezogenen Daten oder der Ausübung Ihrer Rechte kontaktieren Sie uns über die oben genannte E-Mail-Adresse.",
        "BelgiumVignette.be ist eine unabhängige Informationswebsite und nicht mit der belgischen Regierung, Flandern, der Wallonie oder Brüssel verbunden.",
      ],
    },
    {
      id: "email-notification",
      title: "2. Einmalige E-Mail-Benachrichtigung",
      paragraphs: [
        "Besucher können sich freiwillig anmelden, um eine einmalige E-Mail-Benachrichtigung zu erhalten, sobald der offizielle oder autorisierte Verkauf der belgischen Straßenvignette verfügbar wird.",
        "Bei der Anmeldung erheben wir:",
      ],
      list: [
        "Ihre E-Mail-Adresse.",
        "Ihre gewählte Sprache.",
        "Datum und Uhrzeit Ihrer Einwilligung.",
        "Einen Nachweis der erteilten Einwilligung.",
      ],
    },
    {
      id: "email-notification-use",
      title: "",
      paragraphs: [
        "Wir verwenden diese Daten ausschließlich zum Versand der von Ihnen angeforderten Benachrichtigung.",
        "**Sie erhalten maximal eine E-Mail-Benachrichtigung. Wir versenden keine Newsletter, Werbung oder sonstige Marketingnachrichten.**",
        "Rechtsgrundlage dieser Verarbeitung ist Ihre Einwilligung gemäß Artikel 6 Absatz 1 Buchstabe a der Datenschutz-Grundverordnung (DSGVO).",
        "Sie können Ihre Einwilligung jederzeit per E-Mail an info@tolls.be widerrufen.",
      ],
    },
    {
      id: "retention",
      title: "3. Speicherdauer und Löschung",
      paragraphs: [
        "Wir speichern Ihre personenbezogenen Daten nur so lange, wie dies zum Versand der angeforderten einmaligen E-Mail-Benachrichtigung erforderlich ist.",
        "**Nach erfolgreichem Versand dieser Benachrichtigung löschen wir Ihre E-Mail-Adresse, Sprachpräferenz und zugehörige personenbezogene Daten aus unseren aktiven Systemen.**",
        "Wird der Benachrichtigungsdienst beendet, bevor der Verkauf verfügbar wird, löschen wir die erhobenen personenbezogenen Daten ebenfalls.",
        "Widerrufen Sie Ihre Einwilligung, löschen wir Ihre Daten ohne unnötige Verzögerung, sofern keine gesetzliche Pflicht zur weiteren Speicherung besteht.",
        "Daten in technischen Backups werden gemäß geltender Backup-Aufbewahrungsfristen gelöscht. Eine begrenzte Dokumentation kann aufbewahrt werden, wenn dies zur Erfüllung gesetzlicher Pflichten erforderlich ist.",
      ],
    },
    {
      id: "hosting",
      title: "4. Hosting und Datenspeicherung",
      paragraphs: [
        "Für den Betrieb von BelgiumVignette.be nutzen wir externe technische Dienstleister.",
        "**Vercel — Website-Hosting**",
        "Unsere Website wird über Vercel gehostet. Zur Funktion und Sicherheit der Website können technische Daten verarbeitet werden, darunter IP-Adressen, Serveranfragen und technische Protokolle.",
        "**Supabase — Speicherung von Anmeldungen**",
        "Wir nutzen Supabase zur Speicherung der Daten von Besuchern, die sich für die einmalige E-Mail-Benachrichtigung anmelden.",
        "Anmeldedaten werden in der für unsere Datenbank konfigurierten europäischen Region gespeichert.",
        "Je nach genutzten Diensten können Daten auch außerhalb des Europäischen Wirtschaftsraums verarbeitet oder zugänglich sein. Soweit erforderlich werden geeignete Garantien gemäß der DSGVO angewandt.",
      ],
    },
    {
      id: "cookies",
      title: "5. Cookies und Website-Analyse",
      paragraphs: [
        "Wir verwenden lokalen Speicher in Ihrem Browser, um Ihre Cookie-Einstellungen zu speichern.",
        "Außerdem nutzen wir Vercel Analytics, um die Nutzung unserer Website zu verstehen, etwa besuchte Seiten und allgemeine Besucherstatistiken.",
        "Soweit gesetzlich erforderlich, wird zuvor über unser Cookie-Banner um Einwilligung gebeten.",
        "Sie können Ihre Einwilligung jederzeit über „Cookie-Einstellungen“ am unteren Rand der Website anpassen oder widerrufen.",
        "Wir nutzen außerdem Google Search Console und Bing Webmaster Tools, um die Auffindbarkeit unserer Website in Suchmaschinen zu analysieren. Verifizierungstags dienen der Bestätigung der Website-Inhaberschaft.",
      ],
    },
    {
      id: "sharing",
      title: "6. Weitergabe personenbezogener Daten",
      paragraphs: [
        "Wir verkaufen oder vermieten Ihre personenbezogenen Daten nicht an Dritte.",
        "Personenbezogene Daten dürfen von Dienstleistern nur verarbeitet werden, soweit dies erforderlich ist für:",
      ],
      list: [
        "Hosting und Absicherung der Website.",
        "Speicherung und Verwaltung Ihrer Anmeldung.",
        "Versand der angeforderten einmaligen E-Mail-Benachrichtigung.",
        "Technische Wartung unserer Dienste.",
      ],
    },
    {
      id: "sharing-limits",
      title: "",
      paragraphs: [
        "Wir verwenden Ihre E-Mail-Adresse nicht für Affiliate-Marketing, kommerzielle Angebote oder andere Zwecke, für die Sie keine Einwilligung erteilt haben.",
      ],
    },
    {
      id: "rights",
      title: "7. Ihre Rechte nach der DSGVO",
      paragraphs: [
        "Nach der Datenschutz-Grundverordnung (DSGVO) haben Sie je nach den Umständen das Recht auf:",
      ],
      list: [
        "**Auskunft:** Sie können erfragen, welche personenbezogenen Daten wir über Sie verarbeiten.",
        "**Berichtigung:** Sie können unrichtige personenbezogene Daten korrigieren lassen.",
        "**Löschung:** Sie können die Löschung Ihrer personenbezogenen Daten verlangen.",
        "**Einschränkung:** In bestimmten Fällen können Sie die Verarbeitung einschränken lassen.",
        "**Datenübertragbarkeit:** Sie können Ihre Daten in einem strukturierten, gängigen Format erhalten.",
        "**Widerspruch:** Sie können bestimmten Verarbeitungen widersprechen.",
        "**Widerruf der Einwilligung:** Sie können eine zuvor erteilte Einwilligung jederzeit widerrufen.",
      ],
    },
    {
      id: "rights-contact",
      title: "",
      paragraphs: [
        "Für Fragen oder Anfragen kontaktieren Sie info@tolls.be.",
        "Wir bearbeiten Anfragen innerhalb der von der DSGVO vorgeschriebenen Fristen.",
        "Sie haben außerdem das Recht, eine Beschwerde bei einer zuständigen Datenschutzaufsichtsbehörde einzureichen.",
      ],
    },
    {
      id: "changes",
      title: "8. Änderungen dieser Datenschutzerklärung",
      paragraphs: [
        "Wir können diese Datenschutzerklärung anpassen, wenn sich unsere Dienste, technischen Systeme oder geltendes Recht ändern.",
        "Die aktuellste Version wird auf dieser Seite veröffentlicht, mit Angabe des Datums der letzten Änderung.",
      ],
    },
    {
      id: "closing",
      title: "BelgiumVignette.be — unabhängige Informationen zur belgischen Straßenvignette",
      paragraphs: [
        "BelgiumVignette.be ist keine offizielle Website der belgischen Regierung und verkauft selbst keine Straßenvignetten.",
        "Die Informationen auf dieser Website dienen ausschließlich der allgemeinen Information. Das geplante Einführungsdatum, Tarife und Bedingungen können sich ändern und stehen unter dem Vorbehalt der endgültigen Genehmigung.",
        "Prüfen Sie vor Ihrer Reise oder einem Kauf stets die neuesten Informationen auf den offiziellen Websites der zuständigen belgischen Behörden, einschließlich Vlaanderen.be.",
        "**Kontakt:** info@tolls.be",
      ],
    },
  ],
};

const fr: PrivacyContent = {
  title: "Politique de confidentialité",
  intro:
    "BelgiumVignette.be est un site d'information indépendant sur la vignette routière belge prévue. Nous respectons votre vie privée et traitons les données personnelles avec soin.",
  lead: [
    "Dans cette politique de confidentialité, nous expliquons quelles données nous collectons, pourquoi nous les traitons, combien de temps nous les conservons et quels sont vos droits.",
  ],
  lastUpdated: "4 novembre 2026",
  sections: [
    {
      id: "controller",
      title: "1. Responsable du traitement",
      paragraphs: [
        "BelgiumVignette.be est géré par :",
        "**2xGen LLC**",
        "1209 Mountain Road Pl NE, STE R",
        "Albuquerque, NM 87110",
        "États-Unis",
        "Numéro d'enregistrement : 0008045445",
        "**Point de contact européen**",
        "Prague, Tchéquie",
        "E-mail : info@tolls.be",
        "2xGen LLC est effectivement gérée depuis l'Europe. Pour toute question relative à la confidentialité, aux données personnelles ou à l'exercice de vos droits, contactez-nous à l'adresse e-mail ci-dessus.",
        "BelgiumVignette.be est un site d'information indépendant et n'est pas lié au gouvernement belge, à la Flandre, à la Wallonie ou à Bruxelles.",
      ],
    },
    {
      id: "email-notification",
      title: "2. Notification e-mail unique",
      paragraphs: [
        "Les visiteurs peuvent s'inscrire volontairement pour recevoir une seule notification e-mail dès que la vente officielle ou autorisée de la vignette routière belge sera disponible.",
        "Lors de l'inscription, nous collectons :",
      ],
      list: [
        "Votre adresse e-mail.",
        "Votre langue choisie.",
        "La date et l'heure de votre consentement.",
        "Un enregistrement du consentement donné.",
      ],
    },
    {
      id: "email-notification-use",
      title: "",
      paragraphs: [
        "Nous utilisons ces données uniquement pour envoyer la notification que vous avez demandée.",
        "**Vous recevrez au maximum une notification e-mail. Nous n'envoyons pas de newsletters, de publicité ni d'autres messages marketing.**",
        "La base juridique de ce traitement est votre consentement, conformément à l'article 6, paragraphe 1, point a, du Règlement général sur la protection des données (RGPD).",
        "Vous pouvez retirer votre consentement à tout moment en envoyant un e-mail à info@tolls.be.",
      ],
    },
    {
      id: "retention",
      title: "3. Durée de conservation et suppression",
      paragraphs: [
        "Nous conservons vos données personnelles uniquement aussi longtemps que nécessaire pour envoyer la notification e-mail unique demandée.",
        "**Après l'envoi réussi de cette notification, nous supprimons votre adresse e-mail, votre préférence linguistique et les données personnelles associées de nos systèmes actifs.**",
        "Si le service de notification est arrêté avant que la vente ne soit disponible, nous supprimons également les données personnelles collectées.",
        "Si vous retirez votre consentement, nous supprimons vos données sans délai injustifié, sauf obligation légale de conservation supplémentaire.",
        "Les données éventuellement présentes dans des sauvegardes techniques sont supprimées selon les délais de conservation des sauvegardes applicables. Un enregistrement limité peut être conservé lorsque cela est nécessaire pour respecter des obligations légales.",
      ],
    },
    {
      id: "hosting",
      title: "4. Hébergement et stockage des données",
      paragraphs: [
        "Pour le fonctionnement de BelgiumVignette.be, nous faisons appel à des prestataires techniques externes.",
        "**Vercel — hébergement du site**",
        "Notre site est hébergé via Vercel. Des données techniques peuvent être traitées pour le fonctionnement et la sécurité du site, notamment des adresses IP, des requêtes serveur et des journaux techniques.",
        "**Supabase — stockage des inscriptions**",
        "Nous utilisons Supabase pour stocker les données des visiteurs qui s'inscrivent à la notification e-mail unique.",
        "Les données d'inscription sont stockées dans la région européenne configurée pour notre base de données.",
        "Selon les services utilisés, des données peuvent également être traitées ou accessibles en dehors de l'Espace économique européen. Le cas échéant, des garanties appropriées sont appliquées conformément au RGPD.",
      ],
    },
    {
      id: "cookies",
      title: "5. Cookies et analyse du site",
      paragraphs: [
        "Nous utilisons le stockage local de votre navigateur pour mémoriser vos préférences cookies.",
        "Nous utilisons également Vercel Analytics pour comprendre l'utilisation de notre site, comme les pages consultées et des statistiques générales de visiteurs.",
        "Lorsque la loi l'exige, un consentement préalable est demandé via notre bannière cookies.",
        "Vous pouvez modifier ou retirer votre consentement à tout moment via « Préférences cookies » en bas du site.",
        "Nous utilisons également Google Search Console et Bing Webmaster Tools pour analyser la visibilité de notre site dans les moteurs de recherche. Les balises de vérification servent à confirmer la propriété du site.",
      ],
    },
    {
      id: "sharing",
      title: "6. Partage des données personnelles",
      paragraphs: [
        "Nous ne vendons ni ne louons vos données personnelles à des tiers.",
        "Les données personnelles ne peuvent être traitées par des prestataires que dans la mesure nécessaire pour :",
      ],
      list: [
        "Héberger et sécuriser le site.",
        "Stocker et gérer votre inscription.",
        "Envoyer la notification e-mail unique demandée.",
        "Assurer la maintenance technique de nos services.",
      ],
    },
    {
      id: "sharing-limits",
      title: "",
      paragraphs: [
        "Nous n'utilisons pas votre adresse e-mail pour du marketing d'affiliation, des offres commerciales ou d'autres finalités pour lesquelles vous n'avez pas donné votre consentement.",
      ],
    },
    {
      id: "rights",
      title: "7. Vos droits au titre du RGPD",
      paragraphs: [
        "En vertu du Règlement général sur la protection des données (RGPD), vous disposez, selon les circonstances, du droit à :",
      ],
      list: [
        "**Accès :** vous pouvez demander quelles données personnelles nous traitons à votre sujet.",
        "**Rectification :** vous pouvez faire corriger des données personnelles inexactes.",
        "**Effacement :** vous pouvez demander la suppression de vos données personnelles.",
        "**Limitation :** dans certains cas, vous pouvez faire limiter le traitement.",
        "**Portabilité :** vous pouvez recevoir vos données dans un format structuré et couramment utilisé.",
        "**Opposition :** vous pouvez vous opposer à certains traitements.",
        "**Retrait du consentement :** vous pouvez retirer un consentement précédemment donné à tout moment.",
      ],
    },
    {
      id: "rights-contact",
      title: "",
      paragraphs: [
        "Pour toute question ou demande, contactez info@tolls.be.",
        "Nous traitons les demandes dans les délais prévus par le RGPD.",
        "Vous avez également le droit d'introduire une réclamation auprès d'une autorité de contrôle compétente en matière de protection des données.",
      ],
    },
    {
      id: "changes",
      title: "8. Modifications de cette politique de confidentialité",
      paragraphs: [
        "Nous pouvons adapter cette politique de confidentialité lorsque nos services, systèmes techniques ou la législation applicable évoluent.",
        "La version la plus récente est publiée sur cette page, avec la date de la dernière modification.",
      ],
    },
    {
      id: "closing",
      title: "BelgiumVignette.be — information indépendante sur la vignette routière belge",
      paragraphs: [
        "BelgiumVignette.be n'est pas un site officiel du gouvernement belge et ne vend pas lui-même de vignettes routières.",
        "Les informations de ce site sont fournies à titre d'information générale uniquement. La date d'introduction prévue, les tarifs et les conditions peuvent changer et restent sous réserve d'une approbation définitive.",
        "Avant votre voyage ou un achat, vérifiez toujours les informations les plus récentes sur les sites officiels des autorités belges compétentes, y compris Vlaanderen.be.",
        "**Contact :** info@tolls.be",
      ],
    },
  ],
};

const es: PrivacyContent = {
  ...en,
  title: "Política de privacidad",
  intro:
    "BelgiumVignette.be es un sitio de información independiente sobre la viñeta vial belga prevista. Respetamos su privacidad y tratamos los datos personales con cuidado.",
  lead: [
    "En esta política de privacidad explicamos qué datos recopilamos, por qué los tratamos, cuánto tiempo los conservamos y qué derechos tiene.",
  ],
  lastUpdated: "4 de noviembre de 2026",
  sections: en.sections.map((section) => {
    const map: Record<string, { title?: string; paragraphs?: string[]; list?: string[] }> = {
      controller: {
        title: "1. Responsable del tratamiento",
        paragraphs: [
          "BelgiumVignette.be es gestionado por:",
          "**2xGen LLC**",
          "1209 Mountain Road Pl NE, STE R",
          "Albuquerque, NM 87110",
          "Estados Unidos",
          "Número de registro: 0008045445",
          "**Punto de contacto europeo**",
          "Praga, Chequia",
          "Correo electrónico: info@tolls.be",
          "2xGen LLC se gestiona de hecho desde Europa. Para preguntas sobre privacidad, datos personales o el ejercicio de sus derechos, contacte a través de la dirección de correo anterior.",
          "BelgiumVignette.be es un sitio de información independiente y no está vinculado al gobierno belga, Flandes, Valonia ni Bruselas.",
        ],
      },
      "email-notification": {
        title: "2. Notificación por correo electrónico única",
        paragraphs: [
          "Los visitantes pueden registrarse voluntariamente para recibir una sola notificación por correo electrónico cuando la venta oficial o autorizada de la viñeta vial belga esté disponible.",
          "Al registrarse, recopilamos:",
        ],
        list: [
          "Su dirección de correo electrónico.",
          "El idioma elegido.",
          "La fecha y hora de su consentimiento.",
          "Un registro del consentimiento otorgado.",
        ],
      },
      "email-notification-use": {
        paragraphs: [
          "Utilizamos estos datos únicamente para enviar la notificación solicitada.",
          "**Recibirá como máximo una notificación por correo electrónico. No enviamos boletines, publicidad ni otros mensajes de marketing.**",
          "La base jurídica de este tratamiento es su consentimiento, de conformidad con el artículo 6, apartado 1, letra a, del Reglamento General de Protección de Datos (RGPD).",
          "Puede retirar su consentimiento en cualquier momento enviando un correo a info@tolls.be.",
        ],
      },
      retention: {
        title: "3. Plazo de conservación y eliminación",
        paragraphs: [
          "Conservamos sus datos personales únicamente el tiempo necesario para enviar la notificación única solicitada.",
          "**Tras el envío correcto de esta notificación, eliminamos su dirección de correo electrónico, preferencia de idioma y datos personales asociados de nuestros sistemas activos.**",
          "Si el servicio de notificación se interrumpe antes de que la venta esté disponible, también eliminamos los datos personales recopilados.",
          "Si retira su consentimiento, eliminamos sus datos sin demora indebida, salvo que una obligación legal exija una conservación adicional.",
          "Los datos que puedan permanecer en copias de seguridad técnicas se eliminan según los plazos de conservación aplicables. Puede conservarse un registro limitado cuando sea necesario para cumplir obligaciones legales.",
        ],
      },
      hosting: {
        title: "4. Alojamiento y almacenamiento de datos",
        paragraphs: [
          "Para el funcionamiento de BelgiumVignette.be utilizamos proveedores técnicos externos.",
          "**Vercel — alojamiento del sitio web**",
          "Nuestro sitio web se aloja a través de Vercel. Pueden tratarse datos técnicos para el funcionamiento y la seguridad del sitio, incluidas direcciones IP, solicitudes al servidor y registros técnicos.",
          "**Supabase — almacenamiento de inscripciones**",
          "Utilizamos Supabase para almacenar los datos de los visitantes que se inscriben en la notificación única por correo electrónico.",
          "Los datos de inscripción se almacenan en la región europea configurada para nuestra base de datos.",
          "Según los servicios utilizados, los datos también pueden tratarse o ser accesibles fuera del Espacio Económico Europeo. Cuando sea necesario, se aplican garantías adecuadas conforme al RGPD.",
        ],
      },
      cookies: {
        title: "5. Cookies y análisis del sitio web",
        paragraphs: [
          "Utilizamos el almacenamiento local de su navegador para recordar sus preferencias de cookies.",
          "También utilizamos Vercel Analytics para comprender el uso de nuestro sitio web, como las páginas visitadas y estadísticas generales de visitantes.",
          "Cuando la ley lo exige, se solicita previamente el consentimiento mediante nuestro banner de cookies.",
          "Puede modificar o retirar su consentimiento en cualquier momento a través de «Preferencias de cookies» al final del sitio web.",
          "También utilizamos Google Search Console y Bing Webmaster Tools para analizar la visibilidad de nuestro sitio en los motores de búsqueda. Las etiquetas de verificación sirven para confirmar la propiedad del sitio.",
        ],
      },
      sharing: {
        title: "6. Cesión de datos personales",
        paragraphs: [
          "No vendemos ni alquilamos sus datos personales a terceros.",
          "Los datos personales solo pueden ser tratados por proveedores en la medida necesaria para:",
        ],
        list: [
          "Alojar y asegurar el sitio web.",
          "Almacenar y gestionar su inscripción.",
          "Enviar la notificación única solicitada por correo electrónico.",
          "Mantener técnicamente nuestros servicios.",
        ],
      },
      "sharing-limits": {
        paragraphs: [
          "No utilizamos su dirección de correo electrónico para marketing de afiliados, ofertas comerciales u otros fines para los que no haya dado su consentimiento.",
        ],
      },
      rights: {
        title: "7. Sus derechos en virtud del RGPD",
        paragraphs: [
          "En virtud del Reglamento General de Protección de Datos (RGPD), según las circunstancias, usted tiene derecho a:",
        ],
        list: [
          "**Acceso:** puede solicitar qué datos personales tratamos sobre usted.",
          "**Rectificación:** puede hacer corregir datos personales inexactos.",
          "**Supresión:** puede solicitar la eliminación de sus datos personales.",
          "**Limitación:** en determinados casos puede hacer limitar el tratamiento.",
          "**Portabilidad:** puede recibir sus datos en un formato estructurado y de uso común.",
          "**Oposición:** puede oponerse a determinados tratamientos.",
          "**Retirada del consentimiento:** puede retirar un consentimiento previamente otorgado en cualquier momento.",
        ],
      },
      "rights-contact": {
        paragraphs: [
          "Para preguntas o solicitudes, contacte con info@tolls.be.",
          "Tratamos las solicitudes dentro de los plazos previstos por el RGPD.",
          "También tiene derecho a presentar una reclamación ante una autoridad de control competente en materia de protección de datos.",
        ],
      },
      changes: {
        title: "8. Cambios en esta política de privacidad",
        paragraphs: [
          "Podemos adaptar esta política de privacidad cuando cambien nuestros servicios, sistemas técnicos o la legislación aplicable.",
          "La versión más reciente se publica en esta página, con la fecha de la última modificación.",
        ],
      },
      closing: {
        title: "BelgiumVignette.be — información independiente sobre la viñeta vial belga",
        paragraphs: [
          "BelgiumVignette.be no es un sitio web oficial del gobierno belga y no vende viñetas viales.",
          "La información de este sitio web tiene únicamente fines de información general. La fecha de introducción prevista, las tarifas y las condiciones pueden cambiar y están sujetas a aprobación definitiva.",
          "Antes de viajar o comprar, consulte siempre la información más reciente en los sitios web oficiales de las autoridades belgas competentes, incluido Vlaanderen.be.",
          "**Contacto:** info@tolls.be",
        ],
      },
    };
    const o = map[section.id];
    if (!o) return section;
    return {
      ...section,
      title: o.title ?? section.title,
      paragraphs: o.paragraphs ?? section.paragraphs,
      list: o.list ?? section.list,
    };
  }),
};

const it: PrivacyContent = {
  ...en,
  title: "Informativa sulla privacy",
  intro:
    "BelgiumVignette.be è un sito informativo indipendente sulla vignetta stradale belga prevista. Rispettiamo la vostra privacy e trattiamo i dati personali con cura.",
  lead: [
    "In questa informativa sulla privacy spieghiamo quali dati raccogliamo, perché li trattiamo, per quanto tempo li conserviamo e quali diritti avete.",
  ],
  lastUpdated: "4 novembre 2026",
  sections: en.sections.map((section) => {
    const map: Record<string, { title?: string; paragraphs?: string[]; list?: string[] }> = {
      controller: {
        title: "1. Titolare del trattamento",
        paragraphs: [
          "BelgiumVignette.be è gestito da:",
          "**2xGen LLC**",
          "1209 Mountain Road Pl NE, STE R",
          "Albuquerque, NM 87110",
          "Stati Uniti",
          "Numero di registrazione: 0008045445",
          "**Punto di contatto europeo**",
          "Praga, Cechia",
          "E-mail: info@tolls.be",
          "2xGen LLC è gestita di fatto dall'Europa. Per domande su privacy, dati personali o l'esercizio dei vostri diritti, contattateci all'indirizzo e-mail sopra indicato.",
          "BelgiumVignette.be è un sito informativo indipendente e non è collegato al governo belga, alle Fiandre, alla Vallonia o a Bruxelles.",
        ],
      },
      "email-notification": {
        title: "2. Notifica e-mail una tantum",
        paragraphs: [
          "I visitatori possono iscriversi volontariamente per ricevere una sola notifica e-mail non appena la vendita ufficiale o autorizzata della vignetta stradale belga sarà disponibile.",
          "Al momento dell'iscrizione raccogliamo:",
        ],
        list: [
          "Il vostro indirizzo e-mail.",
          "La lingua scelta.",
          "La data e l'ora del consenso.",
          "Una registrazione del consenso prestato.",
        ],
      },
      "email-notification-use": {
        paragraphs: [
          "Utilizziamo questi dati esclusivamente per inviare la notifica richiesta.",
          "**Riceverete al massimo una notifica e-mail. Non inviamo newsletter, pubblicità o altri messaggi di marketing.**",
          "La base giuridica di questo trattamento è il vostro consenso, ai sensi dell'articolo 6, paragrafo 1, lettera a, del Regolamento generale sulla protezione dei dati (GDPR).",
          "Potete revocare il consenso in qualsiasi momento inviando un'e-mail a info@tolls.be.",
        ],
      },
      retention: {
        title: "3. Periodo di conservazione e cancellazione",
        paragraphs: [
          "Conserviamo i vostri dati personali solo per il tempo necessario a inviare la notifica e-mail una tantum richiesta.",
          "**Dopo l'invio riuscito di questa notifica, cancelliamo il vostro indirizzo e-mail, la preferenza linguistica e i relativi dati personali dai nostri sistemi attivi.**",
          "Se il servizio di notifica viene interrotto prima che la vendita sia disponibile, cancelliamo altresì i dati personali raccolti.",
          "Se revocate il consenso, cancelliamo i vostri dati senza indebito ritardo, salvo obblighi di legge che richiedano un'ulteriore conservazione.",
          "I dati eventualmente presenti nei backup tecnici vengono cancellati secondo i termini di conservazione dei backup applicabili. Una registrazione limitata può essere conservata quando necessario per adempiere a obblighi di legge.",
        ],
      },
      hosting: {
        title: "4. Hosting e archiviazione dei dati",
        paragraphs: [
          "Per il funzionamento di BelgiumVignette.be utilizziamo fornitori tecnici esterni.",
          "**Vercel — hosting del sito web**",
          "Il nostro sito web è ospitato tramite Vercel. Per il funzionamento e la sicurezza del sito possono essere trattati dati tecnici, tra cui indirizzi IP, richieste al server e log tecnici.",
          "**Supabase — archiviazione delle iscrizioni**",
          "Utilizziamo Supabase per archiviare i dati dei visitatori che si iscrivono alla notifica e-mail una tantum.",
          "I dati di iscrizione sono archiviati nella regione europea configurata per il nostro database.",
          "A seconda dei servizi utilizzati, i dati possono anche essere trattati o accessibili al di fuori dello Spazio economico europeo. Ove richiesto, sono applicate garanzie adeguate conformemente al GDPR.",
        ],
      },
      cookies: {
        title: "5. Cookie e analisi del sito web",
        paragraphs: [
          "Utilizziamo l'archiviazione locale del browser per ricordare le preferenze sui cookie.",
          "Utilizziamo inoltre Vercel Analytics per comprendere l'utilizzo del nostro sito web, come le pagine visitate e le statistiche generali dei visitatori.",
          "Ove richiesto dalla legge, il consenso viene richiesto in anticipo tramite il nostro banner cookie.",
          "Potete modificare o revocare il consenso in qualsiasi momento tramite «Impostazioni cookie» in fondo al sito.",
          "Utilizziamo inoltre Google Search Console e Bing Webmaster Tools per analizzare la reperibilità del nostro sito nei motori di ricerca. Eventuali tag di verifica servono a confermare la proprietà del sito.",
        ],
      },
      sharing: {
        title: "6. Condivisione dei dati personali",
        paragraphs: [
          "Non vendiamo né affittiamo i vostri dati personali a terzi.",
          "I dati personali possono essere trattati dai fornitori solo nella misura necessaria per:",
        ],
        list: [
          "Ospitare e proteggere il sito web.",
          "Archiviare e gestire la vostra iscrizione.",
          "Inviare la notifica e-mail una tantum richiesta.",
          "Mantenere tecnicamente i nostri servizi.",
        ],
      },
      "sharing-limits": {
        paragraphs: [
          "Non utilizziamo il vostro indirizzo e-mail per marketing di affiliazione, offerte commerciali o altri scopi per i quali non avete prestato consenso.",
        ],
      },
      rights: {
        title: "7. I vostri diritti ai sensi del GDPR",
        paragraphs: [
          "Ai sensi del Regolamento generale sulla protezione dei dati (GDPR), a seconda delle circostanze, avete diritto a:",
        ],
        list: [
          "**Accesso:** potete chiedere quali dati personali trattiamo su di voi.",
          "**Rettifica:** potete far correggere dati personali inesatti.",
          "**Cancellazione:** potete richiedere la cancellazione dei vostri dati personali.",
          "**Limitazione:** in alcuni casi potete far limitare il trattamento.",
          "**Portabilità:** potete ricevere i vostri dati in un formato strutturato e di uso comune.",
          "**Opposizione:** potete opporvi a determinati trattamenti.",
          "**Revoca del consenso:** potete revocare un consenso precedentemente prestato in qualsiasi momento.",
        ],
      },
      "rights-contact": {
        paragraphs: [
          "Per domande o richieste contattate info@tolls.be.",
          "Gestiamo le richieste entro i termini previsti dal GDPR.",
          "Avete inoltre il diritto di presentare reclamo a un'autorità di controllo competente per la protezione dei dati.",
        ],
      },
      changes: {
        title: "8. Modifiche a questa informativa sulla privacy",
        paragraphs: [
          "Possiamo aggiornare questa informativa sulla privacy quando cambiano i nostri servizi, i sistemi tecnici o la normativa applicabile.",
          "La versione più recente è pubblicata su questa pagina, con la data dell'ultima modifica.",
        ],
      },
      closing: {
        title: "BelgiumVignette.be — informazioni indipendenti sulla vignetta stradale belga",
        paragraphs: [
          "BelgiumVignette.be non è un sito ufficiale del governo belga e non vende vignette stradali.",
          "Le informazioni su questo sito sono fornite solo a scopo di informazione generale. La data di introduzione prevista, le tariffe e le condizioni possono cambiare e restano subordinate all'approvazione definitiva.",
          "Prima di viaggiare o acquistare, verificate sempre le informazioni più recenti sui siti ufficiali delle autorità belghe competenti, incluso Vlaanderen.be.",
          "**Contatto:** info@tolls.be",
        ],
      },
    };
    const o = map[section.id];
    if (!o) return section;
    return {
      ...section,
      title: o.title ?? section.title,
      paragraphs: o.paragraphs ?? section.paragraphs,
      list: o.list ?? section.list,
    };
  }),
};

const remainingLocales: Record<
  "pl" | "cs" | "da" | "sv" | "ro",
  Pick<PrivacyContent, "title" | "intro" | "lead" | "lastUpdated">
> = {
  pl: {
    title: "Polityka prywatności",
    intro:
      "BelgiumVignette.be to niezależna strona informacyjna o planowanej belgijskiej winiecie drogowej. Szanujemy Twoją prywatność i ostrożnie obchodzimy się z danymi osobowymi.",
    lead: [
      "W tej polityce prywatności wyjaśniamy, jakie dane zbieramy, dlaczego je przetwarzamy, jak długo je przechowujemy i jakie masz prawa.",
    ],
    lastUpdated: "4 listopada 2026",
  },
  cs: {
    title: "Zásady ochrany soukromí",
    intro:
      "BelgiumVignette.be je nezávislý informační web o plánované belgické silniční známce. Respektujeme vaše soukromí a pečlivě nakládáme s osobními údaji.",
    lead: [
      "V těchto zásadách ochrany soukromí vysvětlujeme, jaké údaje shromažďujeme, proč je zpracováváme, jak dlouho je uchováváme a jaká máte práva.",
    ],
    lastUpdated: "4. listopadu 2026",
  },
  da: {
    title: "Privatlivspolitik",
    intro:
      "BelgiumVignette.be er et uafhængigt informationssite om den planlagte belgiske vejvignet. Vi respekterer dit privatliv og håndterer personoplysninger omhyggeligt.",
    lead: [
      "I denne privatlivspolitik forklarer vi, hvilke oplysninger vi indsamler, hvorfor vi behandler dem, hvor længe vi opbevarer dem, og hvilke rettigheder du har.",
    ],
    lastUpdated: "4. november 2026",
  },
  sv: {
    title: "Integritetspolicy",
    intro:
      "BelgiumVignette.be är en oberoende informationswebbplats om den planerade belgiska vägvinjetten. Vi respekterar din integritet och hanterar personuppgifter varsamt.",
    lead: [
      "I denna integritetspolicy förklarar vi vilka uppgifter vi samlar in, varför vi behandlar dem, hur länge vi sparar dem och vilka rättigheter du har.",
    ],
    lastUpdated: "4 november 2026",
  },
  ro: {
    title: "Politica de confidențialitate",
    intro:
      "BelgiumVignette.be este un site informativ independent despre vinieta rutieră belgiană planificată. Respectăm confidențialitatea dvs. și gestionăm cu grijă datele cu caracter personal.",
    lead: [
      "În această politică de confidențialitate explicăm ce date colectăm, de ce le prelucrăm, cât timp le păstrăm și ce drepturi aveți.",
    ],
    lastUpdated: "4 noiembrie 2026",
  },
};

function getPolishSections(): PrivacyContent["sections"] {
  const sharedClosingContact = "**Contact:** info@tolls.be";
  return [
      {
        id: "controller",
        title: "1. Administrator danych",
        paragraphs: [
          "BelgiumVignette.be jest zarządzane przez:",
          "**2xGen LLC**",
          "1209 Mountain Road Pl NE, STE R",
          "Albuquerque, NM 87110",
          "Stany Zjednoczone",
          "Numer rejestracyjny: 0008045445",
          "**Europejski punkt kontaktowy**",
          "Praga, Czechy",
          "E-mail: info@tolls.be",
          "2xGen LLC jest faktycznie zarządzane z Europy. W sprawach prywatności, danych osobowych lub realizacji praw skontaktuj się pod powyższym adresem e-mail.",
          "BelgiumVignette.be to niezależna strona informacyjna i nie jest powiązana z rządem belgijskim, Flandrią, Walonią ani Brukselą.",
        ],
      },
      {
        id: "email-notification",
        title: "2. Jednorazowe powiadomienie e-mail",
        paragraphs: [
          "Odwiedzający mogą dobrowolnie zapisać się, aby otrzymać jedno powiadomienie e-mail, gdy oficjalna lub autoryzowana sprzedaż belgijskiej winiety drogowej będzie dostępna.",
          "Przy zapisaniu zbieramy:",
        ],
        list: [
          "Twój adres e-mail.",
          "Wybrany język.",
          "Datę i godzinę Twojej zgody.",
          "Rejestrację udzielonej zgody.",
        ],
      },
      {
        id: "email-notification-use",
        title: "",
        paragraphs: [
          "Dane te wykorzystujemy wyłącznie do wysłania żądanego powiadomienia.",
          "**Otrzymasz maksymalnie jedno powiadomienie e-mail. Nie wysyłamy newsletterów, reklam ani innych komunikatów marketingowych.**",
          "Podstawą prawną tego przetwarzania jest Twoja zgoda, zgodnie z art. 6 ust. 1 lit. a rozporządzenia ogólnego o ochronie danych (RODO).",
          "Zgodę możesz wycofać w dowolnym momencie, wysyłając e-mail na adres info@tolls.be.",
        ],
      },
      {
        id: "retention",
        title: "3. Okres przechowywania i usuwanie",
        paragraphs: [
          "Przechowujemy Twoje dane osobowe wyłącznie tak długo, jak jest to konieczne do wysłania żądanego jednorazowego powiadomienia e-mail.",
          "**Po pomyślnym wysłaniu tego powiadomienia usuwamy Twój adres e-mail, preferencję językową i powiązane dane osobowe z naszych aktywnych systemów.**",
          "Jeśli usługa powiadomień zostanie zakończona przed udostępnieniem sprzedaży, również usuwamy zebrane dane osobowe.",
          "Jeśli wycofasz zgodę, usuwamy Twoje dane bez zbędnej zwłoki, chyba że obowiązek prawny wymaga dalszego przechowywania.",
          "Dane ewentualnie obecne w kopiach zapasowych są usuwane zgodnie z obowiązującymi okresami przechowywania kopii. Ograniczona rejestracja może być zachowana, gdy jest to konieczne do spełnienia obowiązków prawnych.",
        ],
      },
      {
        id: "hosting",
        title: "4. Hosting i przechowywanie danych",
        paragraphs: [
          "Do działania BelgiumVignette.be korzystamy z zewnętrznych dostawców usług technicznych.",
          "**Vercel — hosting strony**",
          "Nasza strona jest hostowana przez Vercel. Do działania i zabezpieczenia strony mogą być przetwarzane dane techniczne, w tym adresy IP, żądania serwera i logi techniczne.",
          "**Supabase — przechowywanie zapisów**",
          "Korzystamy z Supabase do przechowywania danych odwiedzających zapisanych na jednorazowe powiadomienie e-mail.",
          "Dane zapisów są przechowywane w europejskim regionie skonfigurowanym dla naszej bazy danych.",
          "W zależności od używanych usług dane mogą być także przetwarzane lub dostępne poza Europejskim Obszarem Gospodarczym. W razie potrzeby stosowane są odpowiednie zabezpieczenia zgodnie z RODO.",
        ],
      },
      {
        id: "cookies",
        title: "5. Pliki cookie i analityka strony",
        paragraphs: [
          "Używamy lokalnej pamięci przeglądarki, aby zapamiętać preferencje cookie.",
          "Korzystamy także z Vercel Analytics, aby zrozumieć korzystanie ze strony, np. odwiedzane strony i ogólne statystyki odwiedzających.",
          "Jeśli wymaga tego prawo, wcześniej prosimy o zgodę za pośrednictwem banera cookie.",
          "Zgodę możesz zmienić lub wycofać w dowolnym momencie przez „Ustawienia cookie” na dole strony.",
          "Korzystamy także z Google Search Console i Bing Webmaster Tools do analizy widoczności strony w wyszukiwarkach. Tagi weryfikacyjne służą potwierdzeniu własności strony.",
        ],
      },
      {
        id: "sharing",
        title: "6. Udostępnianie danych osobowych",
        paragraphs: [
          "Nie sprzedajemy ani nie wynajmujemy Twoich danych osobowych osobom trzecim.",
          "Dane osobowe mogą być przetwarzane przez usługodawców wyłącznie w zakresie niezbędnym do:",
        ],
        list: [
          "Hostingu i zabezpieczenia strony.",
          "Przechowywania i zarządzania Twoim zapisem.",
          "Wysłania żądanego jednorazowego powiadomienia e-mail.",
          "Technicznego utrzymania naszych usług.",
        ],
      },
      {
        id: "sharing-limits",
        title: "",
        paragraphs: [
          "Nie wykorzystujemy Twojego adresu e-mail do marketingu afiliacyjnego, ofert handlowych ani innych celów, na które nie wyraziłeś zgody.",
        ],
      },
      {
        id: "rights",
        title: "7. Twoje prawa na mocy RODO",
        paragraphs: [
          "Na podstawie ogólnego rozporządzenia o ochronie danych (RODO), w zależności od okoliczności, masz prawo do:",
        ],
        list: [
          "**Dostępu:** możesz zapytać, jakie dane osobowe przetwarzamy.",
          "**Sprostowania:** możesz żądać poprawienia nieprawidłowych danych osobowych.",
          "**Usunięcia:** możesz żądać usunięcia swoich danych osobowych.",
          "**Ograniczenia:** w niektórych przypadkach możesz żądać ograniczenia przetwarzania.",
          "**Przenoszenia:** możesz otrzymać swoje dane w ustrukturyzowanym, powszechnie używanym formacie.",
          "**Sprzeciwu:** możesz wnieść sprzeciw wobec niektórych przetwarzania.",
          "**Cofnięcia zgody:** możesz w dowolnym momencie cofnąć wcześniej wyrażoną zgodę.",
        ],
      },
      {
        id: "rights-contact",
        title: "",
        paragraphs: [
          "W razie pytań lub wniosków skontaktuj się pod adresem info@tolls.be.",
          "Rozpatrujemy wnioski w terminach przewidzianych przez RODO.",
          "Masz także prawo złożyć skargę do właściwego organu nadzorczego ds. ochrony danych.",
        ],
      },
      {
        id: "changes",
        title: "8. Zmiany w niniejszej polityce prywatności",
        paragraphs: [
          "Możemy aktualizować tę politykę prywatności, gdy zmieniają się nasze usługi, systemy techniczne lub obowiązujące prawo.",
          "Najnowsza wersja jest publikowana na tej stronie wraz z datą ostatniej zmiany.",
        ],
      },
      {
        id: "closing",
        title: "BelgiumVignette.be — niezależne informacje o belgijskiej winiecie drogowej",
        paragraphs: [
          "BelgiumVignette.be nie jest oficjalną stroną rządu belgijskiego i sama nie sprzedaje winiet drogowych.",
          "Informacje na tej stronie służą wyłącznie ogólnej informacji. Planowana data wprowadzenia, stawki i warunki mogą się zmieniać i podlegają ostatecznemu zatwierdzeniu.",
          "Przed podróżą lub zakupem zawsze sprawdzaj najnowsze informacje na oficjalnych stronach właściwych belgijskich organów, w tym Vlaanderen.be.",
          sharedClosingContact,
        ],
      },
    ];
}

const contentByLocale: Record<Locale, PrivacyContent> = {
  nl,
  en,
  de,
  fr,
  es,
  it,
  pl: {
    ...remainingLocales.pl,
    sections: getPolishSections(),
  },
  cs: {
    ...remainingLocales.cs,
    sections: en.sections,
  },
  da: {
    ...remainingLocales.da,
    sections: en.sections,
  },
  sv: {
    ...remainingLocales.sv,
    sections: en.sections,
  },
  ro: {
    ...remainingLocales.ro,
    sections: en.sections,
  },
};

export function getPrivacyContent(locale: Locale): PrivacyContent {
  return contentByLocale[locale] ?? en;
}
