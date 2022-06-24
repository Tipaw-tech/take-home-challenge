/** @jsxImportSource @emotion/react */
import {
  Container,
  ErrorText,
  Input,
  Label,
  Required,
} from "./TextInputStyles";

interface Props {
  label?: string;
  type?: "text" | "password";
  value: string;
  error?: string;
  onChange: (value: string) => void;
  required?: boolean;
  extraEle?: React.ReactNode;
}

const TextInput = ({
  label = "",
  type = "text",
  value,
  error = "",
  onChange,
  required = false,
  extraEle = <></>,
}: Props) => {
  return (
    <Container>
      {label && (
        <Label>
          {label} {required ? <Required>*</Required> : ""}
        </Label>
      )}
      <Input
        type={type}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        hasError={!!error}
      />
      {extraEle}
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};

export default TextInput;
