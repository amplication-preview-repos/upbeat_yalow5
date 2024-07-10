import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

export const UserAttemptEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="userId" source="userId" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="attempt" source="attempt" />
        <BooleanInput label="isCorrect" source="isCorrect" />
      </SimpleForm>
    </Edit>
  );
};
