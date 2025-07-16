import {
    Controller,
    type Control,
    type FieldValues,
    type Path,
} from "react-hook-form";
import "./Radio.css";

interface Props<T extends FieldValues> {
    value: string;
    label: string;
    name: Path<T>;
    control: Control<T>;
    className?: string;
}

const Radio = <T extends FieldValues>({
    control,
    name,
    value,
    className,
    label,
}: Props<T>) => {
    return (
        <Controller
            key={value}
            name={name}
            control={control}
            render={({ field }) => (
                <label className={`search-modal-radio-item ${className}`}>
                    <input
                        type="radio"
                        className="search-modal-radio"
                        value={value}
                        checked={field.value === value}
                        onChange={() => field.onChange(value)}
                    />
                    <span>{label}</span>
                </label>
            )}
        />
    );
};

export default Radio;
