import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type UserAttemptWhereInput = {
  id?: StringFilter;
  userId?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  attempt?: StringNullableFilter;
  isCorrect?: BooleanNullableFilter;
};
