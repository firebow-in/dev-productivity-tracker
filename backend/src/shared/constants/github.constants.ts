import dotenv from 'dotenv';
dotenv.config();

export const GITHUB_CONFIG = {
  OWNER: process.env.GITHUB_OWNER || '',
  REPO: process.env.GITHUB_REPO || '',
} as const;
