import { Request, Response } from 'express';
import { getRecentCommits } from './github.repository';

export const getRecentActivities = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const recentCommits = await getRecentCommits(30);
    res.status(200).json(recentCommits);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error(`Error in getRecentActivities: ${errorMessage}`);
    res.status(500).json({
      message: 'Failed to fetch recent activity',
      error: errorMessage,
    });
  }
};
