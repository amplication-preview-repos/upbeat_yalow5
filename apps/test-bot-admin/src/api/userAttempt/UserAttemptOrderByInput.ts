import { SortOrder } from "../../util/SortOrder";

export type UserAttemptOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  timestamp?: SortOrder;
  attempt?: SortOrder;
  isCorrect?: SortOrder;
};
