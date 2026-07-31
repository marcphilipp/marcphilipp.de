export type Lang = 'en' | 'de';

export const translations = {
  en: {
    name: 'English',
    index: '/',
    blog: {
      index: '/en/blog/',
      read_on: 'Read on',
      subscribe: 'Subscribe',
      via_rss: 'via RSS',
    },
    cities: {
      Anvers: 'Antwerp',
      'München': 'Munich',
      'Köln': 'Cologne',
      'Київ': 'Kyiv',
      'Санкт-Петербург': 'Saint Petersburg',
      'Zürich': 'Zurich',
    } as Record<string, string>,
    countries: {
      be: 'Belgium',
      ch: 'Switzerland',
      de: 'Germany',
      nl: 'The Netherlands',
      no: 'Norway',
      pl: 'Poland',
      ru: 'Russia',
      ua: 'Ukraine',
      us: 'USA',
    } as Record<string, string>,
    talks: {
      with: 'with',
      abstract: 'Abstract',
      code: 'Code',
      slides: 'Slides',
      recording: 'Recording',
    },
    services: {
      index: '/en/services/',
      contact: '/en/contact/',
      howICanHelp: 'How can I help you?',
      getInTouch: 'Get in touch',
      learnMore: 'Learn more',
    },
  },
  de: {
    name: 'Deutsch',
    index: '/de/startseite/',
    blog: {
      index: '/de/blog/',
      read_on: 'Weiterlesen',
      subscribe: 'Abonnieren',
      via_rss: 'per RSS',
    },
    cities: {
      Anvers: 'Antwerpen',
      'Київ': 'Kiew',
      'Санкт-Петербург': 'St. Petersburg',
      'Kraków': 'Krakau',
    } as Record<string, string>,
    countries: {
      be: 'Belgien',
      ch: 'Schweiz',
      de: 'Deutschland',
      nl: 'Niederlande',
      no: 'Norwegen',
      pl: 'Polen',
      ru: 'Russland',
      ua: 'Ukraine',
      us: 'USA',
    } as Record<string, string>,
    talks: {
      with: 'mit',
      abstract: 'Abstract',
      code: 'Code',
      slides: 'Folien',
      recording: 'Aufzeichnung',
    },
    services: {
      index: '/de/dienstleistungen/',
      contact: '/de/kontakt/',
      howICanHelp: 'Wie kann ich Ihnen helfen?',
      getInTouch: 'Kontakt aufnehmen',
      learnMore: 'Mehr erfahren',
    },
  },
} as const satisfies Record<Lang, unknown>;

export const formatDate = (date: Date, lang: Lang): string =>
  lang === 'de'
    ? new Intl.DateTimeFormat('de-DE', { dateStyle: 'medium' }).format(date)
    : new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(date);
