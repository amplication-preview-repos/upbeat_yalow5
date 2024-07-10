import { UserAttempt as TUserAttempt } from "../api/userAttempt/UserAttempt";

export const USERATTEMPT_TITLE_FIELD = "userId";

export const UserAttemptTitle = (record: TUserAttempt): string => {
  return record.userId?.toString() || String(record.id);
};
