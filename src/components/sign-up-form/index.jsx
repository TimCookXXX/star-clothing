import { useState } from "react";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { FormInput } from "../form-input";
import { Button } from "../UI/Button";
import { SignUpContainer } from "./sign-up-form.styles";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

export const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Password do not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Cannot create user, email already use");
            } else {
                console.log("User creation encountered an error", error);
            }
        }
    };

    const handleChange = (event) => {
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
