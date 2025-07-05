import {
  ListBullets,
  HandsClapping,
  Palette,
  MagnifyingGlass,
  StarFour,
  Brain,
  Student,
} from "@phosphor-icons/react/dist/ssr"

export const NON_AUTH_DAILY_MESSAGE_LIMIT = 5
export const AUTH_DAILY_MESSAGE_LIMIT = 1000
export const REMAINING_QUERY_ALERT_THRESHOLD = 2
export const DAILY_FILE_UPLOAD_LIMIT = 5
export const DAILY_LIMIT_PRO_MODELS = 500

export const NON_AUTH_ALLOWED_MODELS = ["gemini-2.0-flash-001"]

export const FREE_MODELS_IDS = [
  "openrouter:deepseek/deepseek-r1:free",
  "openrouter:meta-llama/llama-3.3-8b-instruct:free",
  "pixtral-large-latest",
  "mistral-large-latest",
  "gpt-4.1-nano",
]

export const MODEL_DEFAULT = "gemini-2.0-flash-001"

export const APP_NAME = "justus"
export const APP_DOMAIN = "https://justus.chat"

export const SUGGESTIONS = [
  {
    label: "Zusammenfassung",
    highlight: "Zusammenfassen",
    prompt: `Zusammenfassen`,
    items: [
      "Fasse einen wichtigen Rechtsfall zusammen",
      "Fasse die Verfassung zusammen",
      "Fasse die Phasen eines Gerichtsverfahrens zusammen",
      "Fasse die Rechte des Angeklagten nach dem Gesetz zusammen",
    ],
    icon: ListBullets,
  },
  {
    label: "Rechtliche Hilfe",
    highlight: "Hilf mir",
    prompt: `Hilf mir`,
    items: [
      "Hilf mir, eine Klage zu schreiben",
      "Hilf mir, einen Mietvertrag zu prüfen",
      "Hilf mir, eine Verteidigungsschrift zu verfassen",
      "Hilf mir, die notwendigen Dokumente für eine Scheidung zu sammeln",
    ],
    icon: HandsClapping,
  },
  {
    label: "Rechtsdesign",
    highlight: "Design",
    prompt: `Design`,
    items: [
      "Gestalte eine Broschüre zur Aufklärung über Bürgerrechte",
      "Gestalte eine Infografik über die Schritte zur Unternehmensregistrierung",
      "Gestalte ein Poster zur Information über die Rechte von Arbeitnehmern",
      "Gestalte eine einfache Website zur Bereitstellung von Online-Rechtsberatung",
    ],
    icon: Palette,
  },
  {
    label: "Rechtsrecherche",
    highlight: "Recherchieren",
    prompt: `Recherchieren`,
    items: [
      "Recherchiere die neuesten Änderungen des islamischen Strafgesetzbuchs",
      "Recherchiere die Rechtsprechung in Immobiliensachen",
      "Recherchiere die Gesetze in Bezug auf Erbschaft und Testament",
      "Recherchiere die Rechte der Verbraucher im Iran",
    ],
    icon: MagnifyingGlass,
  },
  {
    label: "Inspiration holen",
    highlight: "Inspiriere mich",
    prompt: `Inspiriere mich`,
    items: [
      "Gib mir eine Idee für eine Kampagne zur Rechtsaufklärung",
      "Gib mir eine Idee für einen interessanten juristischen Artikel",
      "Gib mir eine Idee für einen Rechtspodcast",
      "Gib mir eine Idee für einen Online-Rechtswettbewerb",
    ],
    icon: StarFour,
  },
  {
    label: "Tiefes Nachdenken",
    highlight: "Nachdenken",
    prompt: `Nachdenken`,
    items: [
      "Denke über Gerechtigkeit und Fairness im Gesetz nach",
      "Denke über die Rolle des Anwalts in der Gesellschaft nach",
      "Denke über Berufsethik in der Anwaltschaft nach",
      "Denke über den Einfluss des Gesetzes auf das tägliche Leben nach",
    ],
    icon: Brain,
  },
  {
    label: "Sanftes Lernen",
    highlight: "Erklären",
    prompt: `Erklären`,
    items: [
      "Erkläre das Scheckgesetz in einfachen Worten",
      "Erkläre das Konzept von Verbrechen und Strafe in einfachen Worten",
      "Erkläre die Schritte zum Kauf und Verkauf von Immobilien in einfachen Worten",
      "Erkläre den Unterschied zwischen Zivil- und Strafrecht in einfachen Worten",
    ],
    icon: Student,
  },

]

export const SYSTEM_PROMPT_DEFAULT = `You are Justus, a precise, transparent, and reliable legal assistant. Your tone is professional, calm, minimal, and human. Instead of using complex or clichéd language, you speak clearly, and your focus is on explaining legal issues in simple, understandable terms.

You write with the intention of helping – not to impress, but to enlighten. Instead of judging or pressuring, you help the user understand their situation and make informed decisions.

You are precise, logical, and structured in your responses. If necessary, you ask clear, relevant questions to better clarify the issue. You use precise examples or metaphors to clarify when needed, but you always remain honest and realistic.

You are there for the user – not as a formal lawyer, but as a knowledgeable assistant to help them think clearly legally, analyze the situation, and move forward with confidence.`

export const MESSAGE_MAX_LENGTH = 10000
