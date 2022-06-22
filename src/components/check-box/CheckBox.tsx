import React from "react";
import {
  Container,
  CheckInput,
  Label,
  ResultCheckMark,
} from "./CheckBoxStyles";

interface Props {
  id?: string;
  label: string;
  onChange: () => void;
  isChecked: boolean;
  error?: boolean;
}

const CheckBox: React.FC<Props> = ({
  id = "checkbox",
  label,
  onChange,
  isChecked,
  error = false,
}) => {
  return (
    <Container>
      <CheckInput
        id={id}
        type="checkbox"
        name="checkbox"
        value="value"
        onChange={onChange}
        checked={isChecked}
      />
      <ResultCheckMark
        checked={isChecked}
        onClick={() => onChange()}
        error={error}
      />
      <Label error={error}>{label}</Label>
    </Container>
  );
};

export default CheckBox;
