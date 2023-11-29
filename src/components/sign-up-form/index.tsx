import { useState, FormEvent, ChangeEvent } from "react";
import { FormInput } from "../form-input";
import { Button } from "../UI/Button";
import { SignUpContainer } from "./sign-up-form.styles";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
import { AuthError, AuthErrorCodes } from "firebase/auth";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

export const SignUpForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Password do not match");
            return;
        }

        try {
            dispatch(signUpStart(email, password, displayName));
            resetFormFields();
        } catch (error) {
            if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
                alert("Cannot create user, email already use");
            } else {
                console.log("User creation encountered an error", error);
            }
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <SignUpContainer>
            <h1>Don't have an account?</h1>
            <span>Sign Up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label={"Display name"}
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />

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

                <FormInput
                    label={"Confirm Password"}
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />

                <Button type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    );
};
