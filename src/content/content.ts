// ─────────────────────────────────────────────────────────────────────────────
// EDITABLE CONTENT FILE
// Edit everything in this file to update the website without touching components.
// ─────────────────────────────────────────────────────────────────────────────

export const siteContent = {

  // ── Meta / SEO ────────────────────────────────────────────────────────────
  meta: {
    businessName: 'Riina Ahtola',
    tagline:      'Sisustussuunnittelija & Sisustustoimittaja',
    description:  'Riina Ahtola on helsinkiläinen sisustussuunnittelija, sisustustoimittaja ja TV-sisustaja. Tunnettu Remppa vai muutto, Huvila ja Huussi sekä Pientä pintaremonttia -ohjelmista. Kaupallinen stailaus, sisustuskoulutus ja sisustussuunnittelu.',
    locale:       'fi_FI',
    siteUrl:      'https://riinaahtoladesign.fi',
  },

  // ── Navigation ───────────────────────────────────────────────────────────
  nav: {
    logo:  'Riina Ahtola',
    links: [
      { label: 'Lisää minusta',  href: '#about'   },
      { label: 'Idylli',         href: '#book'    },
      { label: 'Ota yhteyttä',   href: '#contact' },
    ],
  },

  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    // Image: replace /public/images/hero.jpg with your own photo
    imageSrc: '/images/hero.jpg',
    imageAlt: 'Riina Ahtola — Sisustussuunnittelija',
    eyebrow:  'Sisustustoimittaja, -suunnittelija, -tuottaja.',
    title:    'Tiloja jotka\nTuntuu kodilta',
    subtitle: 'Skandinaavista eleganssia, harkittuja yksityiskohtia ja kaunista kodikkuutta',
    cta: {
      primary:   { label: 'Ota yhteyttä',      href: '#contact'   },
      secondary: { label: 'Katso Portfolio',  href: '#portfolio' },
      tertiary:  { label: 'Lisää minusta',        href: '#about'     },
    },
  },

  // ── Portfolio Preview (collage strip below hero) ──────────────────────────
  portfolioPreview: {
    eyebrow: 'Valittuja töitä',
    title:   'Kurkistus\nstudioon',
    // Images: replace files in /public/images/ with your own photos
    images: [
      { src: '/images/kattaus 1.jpg', alt: 'Olohuone — puhtaat skandinaaviset linjat' },
      { src: '/images/kattaus 2.jpg', alt: 'Makuuhuone — lämpimät neutraalit sävyt'  },
      { src: '/images/portfolio3.jpg', alt: 'Keittiö — minimalistinen kaapisto'       },
      { src: '/images/portfolio4.jpg', alt: 'Ruokailutila — luonnonmateriaalit'       },
      { src: '/images/portfolio5.jpg', alt: 'Kotitoimisto — rauhallinen ja toimiva'   },
      { src: '/images/portfolio6.jpg', alt: 'Eteinen — valon ja varjon leikki'        },
    ],
  },

  // ── Portfolio Page Section ────────────────────────────────────────────────
  portfolio: {
    eyebrow: 'Portfolio',
    title:   'Viimeisimmät projektit',
    subtitle: 'Jokainen tila muotoutuu sen asukkaiden ympärille — huolellinen vuoropuhelu asiakkaan vision ja suunnittelun välillä.',
    projects: [
      {
        id:       1,
        title:    'Rannikon rauha',
        category: 'Asunto',
        location: 'Espoo, Suomi',
        year:     '2024',
        // Replace /public/images/portfolio1.jpg
        imageSrc: '/images/portfolio1.jpg',
      },
      {
        id:       2,
        title:    'Kaupunkioasis',
        category: 'Asunto',
        location: 'Helsinki, Suomi',
        year:     '2024',
        imageSrc: '/images/portfolio2.jpg',
      },
      {
        id:       3,
        title:    'Pohjoismainen maatila',
        category: 'Asunto',
        location: 'Tampere, Suomi',
        year:     '2023',
        imageSrc: '/images/portfolio3.jpg',
      },
      {
        id:       4,
        title:    'Valostudio',
        category: 'Toimitila',
        location: 'Helsinki, Suomi',
        year:     '2023',
        imageSrc: '/images/portfolio4.jpg',
      },
      {
        id:       5,
        title:    'Penthouse-koti',
        category: 'Asunto',
        location: 'Turku, Suomi',
        year:     '2023',
        imageSrc: '/images/portfolio5.jpg',
      },
      {
        id:       6,
        title:    'Boutique-sviitti',
        category: 'Hotelli',
        location: 'Rovaniemi, Suomi',
        year:     '2022',
        imageSrc: '/images/portfolio6.jpg',
      },
    ],
  },

  // ── About ─────────────────────────────────────────────────────────────────
  about: {
    eyebrow: 'Lisää minusta',
    title:   'Sisustusta\njolla on merkitys',
    // Image: replace /public/images/riina kuva.jpg with your portrait
    imageSrc: '/images/riina kuva.jpg',
    imageAlt: 'Riina Ahtola — sisustussuunnittelija, sisustustoimittaja ja TV-sisustaja, Helsinki',
    paragraphs: [
      'Olen Riina Ahtola — helsinkiläinen sisustussuunnittelija ja sisustustoimittaja, jonka työ kattaa sisustussuunnittelun, kaupallisen stailauksen, television ja koulutuksen. Minulla on yli kymmenen vuoden kokemus tilojen ja visuaalisten kokonaisuuksien rakentamisesta.',
      'Sisustussuunnittelun rinnalla teen kaupallista stailausta moniin medioihin — lehtikuvauksiin, mainoksiin ja digitaalisiin julkaisuihin. Toimitan sisältöjä ja koulutan uusia tekijöitä alalle.',
      'Televisiossa olen toiminut sisustuskoordinaattorina ja sisustusvastaavana useissa tuotannoissa. Remppa vai muutto Suomi -ohjelmassa olin mukana kolmella kaudella sisustusvastaavana, sisustusstailaajana ja myös kameroiden edessä. Huvila ja Huussi -ohjelmassa toimin sisustuskoordinaattorina ja stailaajana.',
      'Viimeisimpänä olen ollut isosti esillä Pientä pintaremonttia -ohjelmassa sisustussuunnittelijana kameroiden edessä. Televisiotyö on antanut minulle ainutlaatuisen kyvyn lukea tiloja nopeasti ja löytää ratkaisut, jotka toimivat sekä arjessa että kuvassa.',
      'Työni kaikissa muodoissa ohjaa sama ajatus: tilan tulee tuntua oikealta juuri sille ihmiselle, joka siinä elää tai työskentelee.',
    ],
    credentials: [
      { label: 'Sijainti',    value: 'Helsinki, Suomi' },
      { label: 'Kokemus',     value: 'Yli 10 vuotta'   },
      { label: 'Projekteja',  value: 'Yli 80'           },
    ],
    cta: { label: 'Ota yhteyttä', href: '#contact' },
  },

  // ── Contact ───────────────────────────────────────────────────────────────
  contact: {
    eyebrow: 'Ota yhteyttä',
    title:   'Luodaan yhdessä\njotain kaunista',
    subtitle: 'Teen töitä asunto- ja toimitilakohteissa ympäri Suomen ja kansainvälisesti.',
    details: {
      email:     'riina@riinaahtoladesign.fi', // päivitä oikeaksi sähköpostiksi
      phone:     '+358 40 123 4567',            // päivitä oikeaksi puhelinnumeroksi
      instagram: '@riinaahtoladesign',          // päivitä oikeaksi käyttäjänimeksi
      instagramUrl: 'https://instagram.com/riinaahtoladesign', // päivitä oikeaksi URL:ksi
    },
    form: {
      namePlaceholder:    'Nimesi',
      emailPlaceholder:   'Sähköpostisi',
      messagePlaceholder: 'Kerro projektistasi…',
      submitLabel:        'Lähetä viesti',
    },
  },

  // ── Book ─────────────────────────────────────────────────────────────────
  book: {
    eyebrow:  'Kirja',
    title:    'Idylli',
    subtitle: 'Riinan kirjoittama kirja',
    // Edit the paragraphs below to describe the book
    paragraphs: [
      'Idylli on Riina Ahtolan kirjoittama kirja, joka vie lukijansa kauniiden kotien ja sisustuksen maailmaan.',
      'Kirja tarjoaa inspiraatiota ja käytännön vinkkejä ajattoman kodin luomiseen pohjoismaisessa hengessä.',
    ],
    // Update these when the book is available for purchase
    cta: { label: 'Lue lisää', href: '#contact' },
  },

  // ── Footer ────────────────────────────────────────────────────────────────
  footer: {
    name:      'Riina Ahtola',
    tagline:   'Sisustussuunnittelija — Helsinki, Suomi',
    copyright: `© ${new Date().getFullYear()} Riina Ahtola. Kaikki oikeudet pidätetään.`,
    links: [
      { label: 'Portfolio',      href: '#portfolio' },
      { label: 'Lisää minusta',  href: '#about'     },
      { label: 'Ota yhteyttä',   href: '#contact'   },
    ],
  },
}
