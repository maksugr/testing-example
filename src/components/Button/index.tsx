import { type FC } from "react";

export interface IButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
}

export const Button: FC<IButtonProps> = ({
    label,
    onClick,
    disabled = false,
}) => {
    return (
        <button onClick={onClick} disabled={disabled} data-testid="button">
            {label}
        </button>
    );
};
