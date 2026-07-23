export interface IBlogComment {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  content: string;
  createdAt: Date;
  updatedAt?: Date;
  likes: number;
  replies?: IBlogComment[];
  isApproved?: boolean;
}