import { ILanguageTranslations } from "./translation-api-response.dto";

export interface ICachedTranslations {
  data: ILanguageTranslations;
  language: string;
  timestamp: number;
  expiresAt: number;
}
