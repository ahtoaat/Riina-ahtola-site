// ─────────────────────────────────────────────────────────────────────────────
// EDITABLE CONTENT FILE
// Edit everything in this file to update the website without touching components.
// ─────────────────────────────────────────────────────────────────────────────

export const siteContent = {

  // ── Meta / SEO ────────────────────────────────────────────────────────────
  meta: {
    businessName: 'Riina Ahtola',
    tagline:      'Sisustussuunnittelija',
    description:  'Riina Ahtola Sisustustoimittaja, -suunnittelija, -tuottaja.',
    locale:       'en_FI',
    siteUrl:      'https://riinaahtoladesign.fi', // update after deployment
  },

  // ── Navigation ───────────────────────────────────────────────────────────
  nav: {
    logo:  'Riina Ahtola',
    links: [
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Lisää minusta',  href: '#about'     },
      { label: 'Ota yhteyttä',   href: '#contact'   },
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
    // Image: replace /public/images/about.jpg with your portrait
    imageSrc: '/images/riina kuva.jpg',
    imageAlt: 'Riina Ahtola, Sisustussuunnittelija',
    paragraphs: [
      'Olen Riina Ahtola — helsinkiläinen sisustussuunnittelija, jolla on yli kymmenen vuoden kokemus tilojen muotoilusta kauneuden ja arjen tasapainossa.',
      'Työni ammentaa pohjoismaisesta suunnitteluperinteestä: harkitusta minimalistisuudesta, luonnonmateriaaleista ja valosta. Uskon, että hyvin suunniteltu tila tuntuu vaivattomalta — kuin se ei voisi olla muunlainen.',
      'Kokonaisvaltaisista remonttisuunnitelmista tarkemmin rajattuihin stailaustehtäviin — teen tiivistä yhteistyötä jokaisen asiakkaan kanssa, jotta visio muuttuu tilaksi, joka on kiistattomasti heidän omansa.',
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
