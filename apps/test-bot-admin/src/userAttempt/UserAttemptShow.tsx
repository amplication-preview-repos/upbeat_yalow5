import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const UserAttemptShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userId" source="userId" />
        <TextField label="timestamp" source="timestamp" />
        <TextField label="attempt" source="attempt" />
        <BooleanField label="isCorrect" source="isCorrect" />
      </SimpleShowLayout>
    </Show>
  );
};
