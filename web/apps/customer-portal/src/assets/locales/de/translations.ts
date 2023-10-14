import { type Translations } from "../en/translations";

type NestedPartialAsStrings<T extends object> = {
  [Key in keyof T]?: T[Key] extends string ? string : T[Key] extends object ? NestedPartialAsStrings<T[Key]> : never;
};

export const translations: NestedPartialAsStrings<Translations> = {
  StuStaPay: "FSEI / StuStaPay",
  logout: "Logout",
  login: "Login",
  userTagUid: "Karten-Chip ID",
  userTagPin: "Karten-Chip Pin",
  loginFailed: "Login fehlgeschlagen: {{reason}}.",
  errorLoadingCustomer: "Fehler beim Laden der Kundendaten",
  payoutInfo: "",
  about: "Impressum",
  contact: "Kontakt",
  wristbandTagExample: "Beispiel eines Karten-Chips",
  wristbandTagExampleTitle: "Karten-Chip Beispiel mit PIN und ID",
  wristbandTagExampleDescription:
    "Die Karten-Chip ID und PIN findest Du auf der Rückseite deiner Karte. Sie sollte aussehen wie im unteren Beispiel:",
  termsAndConditionsHeader: "Die Datenschutzbestimmungen können <1>hier</1> eingesehen werden.",
  privacyPolicyHeader: "Unsere AGBs können <1>hier</1> eingesehen werden.",
  languages: {
    en: "English",
    de: "Deutsch",
  },
  balance: "Guthaben",
  tagUid: "Karten-Chip ID",
  vouchers: "Getränkemarken",
  order: {
    loadingError: "Fehler beim laden der Bestellungen",
    productName: "Produktname",
    productPrice: "Produktpreis",
    quantity: "Menge",
    total: "Summe",
    viewReceipt: "Beleg anzeigen",
    bookedAt: "Gebucht um: {{date}}",
    orderType: {
      sale: "Kauf",
      cancel_sale: "Stornierter Kauf",
      top_up: "Aufladung",
      pay_out: "Auszahlung",
      ticket: "Ticketkauf",
    },
  },
  payout: {
    iban: "",
    bankAccountHolder: "",
    email: "",
    info: "",
    ibanNotValid: "",
    countryCodeNotSupported: "",
    mustAcceptPrivacyPolicy: "",
    privacyPolicyCheck: "",
    errorFetchingData: "",
    updatedBankData: "",
    errorWhileUpdatingBankData: "",
    donationMustBePositive: "",
    donationExceedsBalance: "",
    donationTitle: "",
    payoutTitle: "",
    donationAmount: "",
    donationDescription: "",
    donateRemainingBalanceOf: "",
    submitPayoutData: "",
  },
  topup: {
    onlineTopUp: "Online-Aufladung",
    description: "Du kannst dein Guthaben hier mit Kreditkarte aufladen.",
    amount: "Betrag",
    errorWhileCreatingCheckout: "Fehler beim erstellen der SumUp-Zahlung.",
    errorAmountGreaterZero: "Betrag muss größer als 0 sein.",
    errorAmountMustBeIntegral: "Centbeträge sind nicht erlaubt.",
    sumupTopupDisabled: "Online-Aufladung ist deaktiviert.",
    tryAgain: "Versuche es noch einmal",
    success: {
      title: "Aufladung erfolgreich",
      message: "Bitte gehe weiter zur <1>Übersichtsseite</1>.",
    },
    error: {
      title: "Aufladung fehlgeschlagen",
      message: "Ein unbekannter Fehler ist aufgetreten.",
    },
  },
  faq: {
    0: {
      question: "Was ist StuStaPay? (Oder: Hilfe! Der Kassierer will mein Bargeld nicht!)",
      answer:
        "Dieses Jahr verwenden wir auf dem Fest erstmals ein selbst entwickeltes bargeldloses Bezahlsystem: " +
        "StuStaPay. In deiner Karte befindet sich ein Chip, der dein Konto identifiziert, auf das du Guthaben aufladen kannst. Das heißt, dass du an unseren Ständen nicht mehr mit Bargeld hantieren musst, sondern bequem mit deiner Karte zahlen kannst. Wie das ganze funktioniert erfährst du hier.",
    },
    1: {
      question: "Wo bekomme ich eine Karte?",
      answer:
        "Die Karte bekommst du entweder beim Vorverkauf, wobei diese hier auch als Ticket dient, oder am Einlass an der Abendkasse. Beide müssen am Einlass aktiviert werden, bevor sie auf dem Fest verwendet werden können.",
    },
    2: {
      question: "Wo kann ich StuStaPay verwenden?",
      answer:
        "Du kannst an allen Verkaufsstellen mit StuStaPay bezahlen.",
    },
    3: {
      question: "Wo kann ich sehen wie viel Geld ich habe?",
      answer:
        "Bei jedem Kauf und jeder Aufladung siehst du dein Guthaben. Auf pay.fsei.de kannst du außerdem jederzeit dein aktuelles Guthaben einsehen. Zusätzlich kannst du auch an jeder Kasse dein Guthaben anzeigen lassen.",
    },
    4: {
      question: "Wo kann ich Guthaben aufladen?",
      answer:
        "An einer unserer Aufladestationen im Audimax Foyer, bei der Garderobe oder am Einlass kannst du mit Bargeld, Karte oder kontaktloser Bezahlung Guthaben auf deine Karte buchen. Zudem kannst du dein Guthaben online unter pay.fsei.de aufladen. Das Guthaben steht dir danach sofort für die nächste Maß Bier (und natürlich jedes andere Produkt deiner Wahl) zur Verfügung.",
    },
    5: {
      question: "Wie funktioniert die Bezahlung?",
      answer:
        "Nachdem deine Bestellung aufgenommen wurde, wird dein Chip in deiner Karten eingelesen. Danach kannst du deine Bestellzusammenfassung und dein Guthaben sehen. Nach deinem OK wird die Bestellung gebucht und du bekommst dein gewünschtes Produkt.",
    },
    6: {
      question: "Wie bekomme/verwende ich Getränkegutscheine?",
      answer:
        "Gutscheine bekommst du als Belohnung für absolvierte Helferschichten. Diese werden ebenfalls digital über deine Karte verwaltet. Nach deiner Schicht übertragt deine Standleitung die Helfermarken auf deine Karte. Bei manchen Helferschichten (zum Beispiel beim Abbau) kannst du deine Gutscheine auch schon früher gegen Pfand erhalten. Die Gutscheine werden bei deiner nächsten Bestellung automatisch verrechnet. Wenn du die Gutscheine nicht oder nur teilweise einsetzen möchtest, kannst du den Vorschlag einfach ändern.",
    },
    7: {
      question: "Wie kann ich prüfen, was ich ausgegeben habe?",
      answer: "Auf pay.fsei.de kannst du deine Belege und dein Guthaben sehen.",
    },
    8: {
      question: "Wie viel Geld kann ich aufladen?",
      answer: "Du kannst maximal 50€ auf dein Bändchen laden.",
    },
    9: {
      question: "Kann ich auch bar oder mit Karte bezahlen?",
      answer:
        "Nein, der Aufwand hierfür wäre leider viel zu hoch. An allen Ständen wird nur noch StuStaPay als Zahlungsmittel akzeptiert. Du kannst deine Karte aber mit Bargeld oder Karte aufladen.",
    },
    10: {
      question: "Was passiert wenn ich am Ende noch Guthaben übrig habe?",
      answer:
        "Du kannst dir das Guthaben beim Ausgang an der Garderobe auszahlen lassen. Nach dem Fest sind keine Auszahlungen mehr möglich.",
    },
    11: {
      question: "Warum könnt ihr die Rückzahlung nicht zusichern?",
      answer:
        "Das hat rechtliche Gründe. Wenn wir die Rückzahlung garantieren, wären wir quasi eine Bank und müssten entsprechend teure Lizenzen einholen. Keine Angst, du bekommst dein Restguthaben trotzdem zurück.",
    },
    12: {
      question: "Kann ich mein Guthaben auf dem Fest auszahlen lassen?",
      answer:
        "Du kannst dir dein Guthaben nur bei Verlassen des Festes gegen Eintausch deiner Karte auszahlen lassen.",
    },
    13: {
      question: "Hilfe! Mein Chip ist kaputt!",
      answer:
        "Wende dich an eine der Aufladekassen. Dort kann deine Karte ausgetauscht und das Guthaben auf die neue Karte übertragen werden.",
    },
    14: {
      question: "Hilfe! Ich habe meinen Chip verloren!",
      answer:
        "Falls du deine ID und PIN aufgeschrieben hast, können wir die verlorene Karte sperren und dir eine neue aushändigen. Andernfalls können wir dein Guthaben leider nicht übertragen.",
    },
    15: {
      question: "Ich habe einen Chip gefunden",
      answer: "Bring diesen bitte zu einer Aufladekasse. Dort sammeln wir alle Fundsachen.",
    },
    16: {
      question: "Welche Daten werden von mir gespeichert?",
      answer:
        "Wir speichern zu deinem Bändchen folgende Informationen pseudonymisiert auf unserem zentralen Server:" +
        " Dein Kontostand," +
        " alle Transaktionen (Aufladungen, EC, Verkauf, Pfandrückzahlung) und" +
        " deine Belege",
    },
    17: {
      question: "Was passiert bei einem Ausfall von StuStaPay?",
      answer:
        "Sollte StuStaPay aus unvorhergesehenen Gründen ausfallen, werden wir schnellstmöglich auf eine Bezahlung mit Bargeld umstellen. Das Restguthaben auf den Karten zahlen wir selbstverständlich so schnell wie möglich zurück.",
    },
  },
} as const;

export default translations;
