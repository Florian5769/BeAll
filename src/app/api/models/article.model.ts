export interface ArticleModel {
  recentArticles: Array<Article>;
  allArticles: Array<Article>;
}

export interface Article {
  _id: string; //Article's id
  _userId: string;
  title: string;
  content: string;
  image: string;
  date: Date;
  tags: [];
  status: number; //rejeté(-2), brouillon(-1), en attente(0), approuvé (1)
  category: string;
  date_updated: Date;
  views: number;
  likes: number;
  grantNotification: boolean;
  userBio: string,
  userJoined: Date
}
