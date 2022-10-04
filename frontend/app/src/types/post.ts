import type { Togo } from './togo';

export type Post = {
  title: string;
  description: string;
  publishedAt: string;
  image: string;
  togo: Togo;
};
