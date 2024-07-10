export type UserAttempt = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string | null;
  timestamp: Date | null;
  attempt: string | null;
  isCorrect: boolean | null;
};
