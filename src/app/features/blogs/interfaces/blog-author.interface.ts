
export interface IBlogAuthor {
  id: string;
  name: string;
  avatar?: string;
  avatarAlt?: string;
  title?: string;
  bio?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}