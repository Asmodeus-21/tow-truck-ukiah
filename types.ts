// Fix: Import `ReactElement` to resolve the "Cannot find namespace 'JSX'" error.
import type { ReactElement } from 'react';

export interface Service {
  title: string;
  description: string;
  icon: ReactElement;
  link: string;
}

export interface Review {
  author: string;
  text: string;
  rating: number;
}
