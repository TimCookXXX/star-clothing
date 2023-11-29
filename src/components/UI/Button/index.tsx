import { ButtonHTMLAttributes, FC } from "react";
import {
    BaseButton,
    ButtonSpinner,
    GoogleSignInButton,
    InvertedButton,
} from "./button-styles";

export enum BUTTON_TYPES {
    base = "base",
    google = "google-sign-in",
    inverted = "inverted",
}

const getButton = (buttonType = BUTTON_TYPES.base) =>
    ({
        [BUTTON_TYPES.base]: BaseButton,
        [BUTTON_TYPES.google]: GoogleSignInButton,
        [BUTTON_TYPES.inverted]: InvertedButton,
    }[buttonType]);

export type ButtonProps = {
    isLoading?: boolean;
    buttonType?: BUTTON_TYPES;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
    children,
    buttonType,
    isLoading,
    ...otherProps
}) => {
    const CustomButton = getButton(buttonType);

    return (
        <CustomButton disabled={isLoading} {...otherProps}>
            {isLoading ? <ButtonSpinner /> : children}
        </CustomButton>
    );
};
