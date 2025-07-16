import {
    Controller,
    type Control,
    type FieldValues,
    type Path,
} from "react-hook-form";
import { formatCategoryName } from "../../../modules/dashboard/components/platform-section/util/formatCategoryName";

interface Props<T extends FieldValues> {
    items: string[];
    label?: string;
    name: Path<T>;
    control: Control<T>;
    className?: string;
}
const CheckboxList = <T extends FieldValues>({
    control,
    name,
    items,
    className,
}: Props<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <div className="search-modal-checkbox-group">
                    {items.map((value) => (
                        <label
                            key={value}
                            className={`search-modal-checkbox-item ${className}`}
                        >
                            <input
                                type="checkbox"
                                className="search-modal-checkbox"
                                checked={
                                    field.value && field.value.includes(value)
                                }
                                onChange={(e) => {
                                    const newCategories = e.target.checked
                                        ? [...field.value, value]
                                        : field.value.filter(
                                              (c: string) => c !== value
                                          );
                                    field.onChange(newCategories);
                                }}
                            />
                            <span>{formatCategoryName(value)}</span>
                        </label>
                    ))}
                </div>
            )}
        />
    );
};

export default CheckboxList;
