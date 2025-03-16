import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import config from '@/config';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
} 

export type CodeBlockProps = {
  code: string;
  language?: string;
  title?: string;
  lineNumbers?: boolean;
  wrap?: boolean;
  highlightLines?: string;
};

export const getCodeOptions = (overrides = {}) => {
  return {
    ...config.codeOptions,
    ...overrides
  };
}; 