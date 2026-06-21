export interface ITranslationsApiResponse {
  status: boolean;
  message: string | null;
  data: ILanguageTranslations;
}

export interface ILanguageTranslations {
  [key: string]: string | INestedTranslation;
}

export interface INestedTranslation {
  [key: string]: string | INestedTranslation;
}
