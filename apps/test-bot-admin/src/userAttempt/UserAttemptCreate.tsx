import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

export const UserAttemptCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="userId" source="userId" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="attempt" source="attempt" />
        <BooleanInput label="isCorrect" source="isCorrect" />
      </SimpleForm>
    </Create>
  );
};
