export type UserAttemptUpdateInput = {
  userId?: string | null;
  timestamp?: Date | null;
  attempt?: string | null;
  isCorrect?: boolean | null;
};
