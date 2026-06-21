import { environment } from "@env/environment";
import { Language } from "./language.enum";

export interface ITranslationCacheConfig {
  cacheDuration?: number; // ms
  useTransferState?: boolean;
  useLocalStorage?: boolean;
  useMock?: boolean;
}

export interface ILanguageItem {
  code: string;
  name: string;
  nativeName: string;
  iconPath: string;
  direction: 'ltr' | 'rtl';
}

export const DEFAULT_TRANSLATION_CACHE_CONFIG: ITranslationCacheConfig = {
  // cacheDuration: 1000 * 60 * 60 * 10, // 10 hours
  cacheDuration: 1000 * 60 * 60 * 0, // 0 hours
  useTransferState: false,
  useLocalStorage: true,
  useMock: environment.features.useInMemoryApi,  // Enable mock translations when using in-memory API for development/testing
};

export const TRANSLATION_KEYS = {
  STORAGE_AR: 'agro-teba-international-site-translations-ar-storage',
  STORAGE_EN: 'agro-teba-international-site-translations-en-storage',
} as const;

export const AVAILABLE_LANGUAGES: ILanguageItem[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    iconPath: 'assets/images/flags/flag-en.svg',
    direction: 'ltr',
  },
  {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    iconPath: 'assets/images/flags/flag-ar.svg',
    direction: 'rtl',
  },
];

export const SUPPORTED_LANGUAGES = [
  Language.EN,
  Language.AR,
] as const;


export const DEFAULT_LANGUAGE_CODE: Language = Language.EN;