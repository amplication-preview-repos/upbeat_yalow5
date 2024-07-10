import { UserAttemptWhereInput } from "./UserAttemptWhereInput";
import { UserAttemptOrderByInput } from "./UserAttemptOrderByInput";

export type UserAttemptFindManyArgs = {
  where?: UserAttemptWhereInput;
  orderBy?: Array<UserAttemptOrderByInput>;
  skip?: number;
  take?: number;
};
