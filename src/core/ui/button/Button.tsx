import {
    type ButtonHTMLAttributes,
    type FC,
    type PropsWithChildren,
} from "react";
import "./Button.css";

interface Props
    extends PropsWithChildren,
        ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "ghost" | "outline";
    size?: "small" | "medium" | "large";
    className?: string;
}

const Button: FC<Props> = ({
    className,
    size = "medium",
    variant = "primary",
    children,
    ...props
}) => {
    return (
        <button className={`btn ${variant} ${size} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
