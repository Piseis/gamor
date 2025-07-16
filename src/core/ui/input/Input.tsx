import "./Input.css";
import {
    Controller,
    type Control,
    type FieldError,
    type FieldErrorsImpl,
    type FieldValues,
    type Merge,
    type Path,
} from "react-hook-form";

interface Props<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    type?: string;
    placeholder?: string;
    className?: string;
    error?:
        | string
        | FieldError
        | Merge<FieldError, FieldErrorsImpl<any>>
        | undefined;
}

const Input = <T extends FieldValues>({
    control,
    name,
    type = "text",
    placeholder,
    className,
    error,
}: Props<T>) => {
    return (
        <div className={`input-container ${className}`}>
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <input
                        {...field}
                        type={type}
                        placeholder={placeholder}
                        className={`input ${error ? "input-error" : ""}`}
                    />
                )}
            />
            {error && (
                <span className="error-message">
                    {error as unknown as string}
                </span>
            )}
        </div>
    );
};

export default Input;
