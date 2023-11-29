import { useState, FormEvent, ChangeEvent } from "react";
import { FormInput } from "../form-input";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { Button, BUTTON_TYPES } from "../UI/Button";
import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";
import { useDispatch } from "react-redux";
import {
    emailSignInStart,
    googleSignInStart,
} from "../../store/user/user.action";
import { AuthError, AuthErrorCodes } from "firebase/auth";

const defaultFormFields = {
    email: "",
    password: "",
};

export const SignInForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            dispatch(emailSignInStart(email, password));
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            switch ((error as AuthError).code) {
                case AuthErrorCodes.INVALID_EMAIL:
                    alert("Incorrect email or password");
                    break;
                default:
                    console.log(error);
            }
        }
    };

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <SignInContainer>
            <h1>I already have an account</h1>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label={"Email"}
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />
                <FormInput
                    label={"Password"}
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button
                        type="button"
                        onClick={signInWithGoogle}
                        buttonType={BUTTON_TYPES.google}
                    >
                        Google Sign In
                    </Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
};
