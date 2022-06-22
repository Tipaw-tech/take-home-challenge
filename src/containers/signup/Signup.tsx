/** @jsxImportSource @emotion/react */
import { useCallback, useState } from "react";
import SVGIcons from "../../assets/icons";
import Button from "../../components/button/Button";
import CheckBox from "../../components/check-box/CheckBox";
import TextInput from "../../components/text-input/TextInput";
import Helper from "../../utils/helper";
import {
  Container,
  EyeIconButton,
  FacebookButtonStyles,
  FooterTextStyles,
  Form,
  GoogleButtonStyles,
  SocialAuth,
  SubmitButtonStyles,
  SubTitle,
  Text,
  TextLink,
  Title,
} from "./Styles";

type TSignupForm = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  isTermsAccepted?: boolean;
};

const SignFormInputTypes = [
  "firstName",
  "lastName",
  "email",
  "password",
  "confirmPassword",
] as const;

type TSignupFormInput = typeof SignFormInputTypes[number];

const Signup = () => {
  const [formValues, setFormValues] = useState<TSignupForm>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [validateErrors, setValidateErrors] = useState<TSignupForm>();

  const handleTextInputChanged = useCallback(
    (value: string | boolean, type: TSignupFormInput) => {
      setFormValues({
        ...formValues,
        [type]: value,
      });
      if (validateErrors?.[type]) {
        delete validateErrors?.[type];
      }
    },
    [formValues, validateErrors]
  );

  const handleSubmit = useCallback(() => {
    // Validate
    const validateResult = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      isTermsAccepted: false,
    };
    const requiredText = "Ce champ est requis";
    if (!formValues.firstName) {
      validateResult.firstName = requiredText;
    }
    if (!formValues.lastName) {
      validateResult.lastName = requiredText;
    }
    if (!formValues.email) {
      validateResult.email = requiredText;
    } else if (!Helper.validateEmail(formValues.email)) {
      validateResult.email = "Email invalide";
    }
    if (!formValues.password) {
      validateResult.password = requiredText;
    }
    if (!formValues.confirmPassword) {
      validateResult.confirmPassword = requiredText;
    } else if (formValues.password !== formValues.confirmPassword) {
      validateResult.confirmPassword = "Mot de passe de confirmation incorrect";
    }
    if (!isTermsAccepted) {
      validateResult.isTermsAccepted = true;
    }
    if (
      validateResult.firstName ||
      validateResult.lastName ||
      validateResult.email ||
      validateResult.password ||
      validateResult.confirmPassword ||
      validateResult.isTermsAccepted
    ) {
      setValidateErrors(validateResult);
    }

    // Api call
  }, [formValues, isTermsAccepted]);

  return (
    <Container>
      <Form>
        <Title>S'inscrire</Title>
        <SubTitle>Rejoignez Tipaw aujourd'hui. C'est gratuit!</SubTitle>
        <Text>
          Vous étes un refuge, un éleveur, un vétérinaire ou toiletteur ?{" "}
          <TextLink>Cliquez-ici</TextLink>
        </Text>

        <SocialAuth>
          <Button
            customStyles={GoogleButtonStyles}
            variant="outlined"
            onClick={() => {}}
          >
            <SVGIcons type="google" />
            Inscription avec Google
          </Button>
          <Button customStyles={FacebookButtonStyles} onClick={() => {}}>
            <SVGIcons type="facebook" />
            Inscription avec Facebook
          </Button>
        </SocialAuth>

        <TextInput
          label="Votre prénom"
          value={formValues.firstName}
          onChange={(value) => handleTextInputChanged(value, "firstName")}
          error={validateErrors?.firstName}
          required
        />
        <TextInput
          label="Votre nom"
          value={formValues.lastName}
          onChange={(value) => handleTextInputChanged(value, "lastName")}
          error={validateErrors?.lastName}
          required
        />
        <TextInput
          label="Votre email"
          value={formValues.email}
          onChange={(value) => handleTextInputChanged(value, "email")}
          error={validateErrors?.email}
          required
        />
        <TextInput
          type={showPassword ? "text" : "password"}
          label="Votre mot de passe"
          value={formValues.password}
          onChange={(value) => handleTextInputChanged(value, "password")}
          error={validateErrors?.password}
          required
          extraEle={
            <EyeIconButton onClick={() => setShowPassword((old) => !old)}>
              <SVGIcons type="eye" />
            </EyeIconButton>
          }
        />
        <TextInput
          type={showConfirmPassword ? "text" : "password"}
          label="Confirmez Votre mot de passe"
          value={formValues.confirmPassword}
          onChange={(value) => handleTextInputChanged(value, "confirmPassword")}
          error={validateErrors?.confirmPassword}
          required
          extraEle={
            <EyeIconButton
              onClick={() => setShowConfirmPassword((old) => !old)}
            >
              <SVGIcons type="eye" />
            </EyeIconButton>
          }
        />

        <CheckBox
          label="J'ai lu et accepté les conditions générales d'utilisation de Tipaw"
          onChange={() => {
            setIsTermsAccepted((old) => !old);
            if (validateErrors?.isTermsAccepted) {
              delete validateErrors?.isTermsAccepted;
            }
          }}
          isChecked={isTermsAccepted}
          error={validateErrors?.isTermsAccepted}
        />

        <Button customStyles={SubmitButtonStyles} onClick={handleSubmit}>
          S'inscrire
        </Button>

        <Text css={FooterTextStyles}>
          Vous avez déja un compte? &nbsp;&nbsp;
          <TextLink>S'identifier</TextLink>
        </Text>
      </Form>
    </Container>
  );
};

export default Signup;
