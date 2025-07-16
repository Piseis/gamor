import { useFormContext } from "react-hook-form";
import { X, Search } from "lucide-react";
import "./SearchModal.css";
import type { FC } from "react";
import { Button, CheckboxList, Input, Radio } from "../../../../../../core/ui";
import { gameCategories, platforms } from "../../util/constants";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const SearchModal: FC<Props> = ({ isOpen, onClose }) => {
    const form = useFormContext();

    const handleReset = () => {
        form.reset({
            gameName: "",
            platform: "all",
            categories: [],
        });
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="search-modal-overlay" onClick={onClose} />

            <div className="search-modal-content">
                <div className="search-modal-header">
                    <h2 className="search-modal-title">
                        <Search className="search-modal-icon" />
                        Game Search Filters
                    </h2>
                    <Button
                        type="button"
                        className="search-modal-close"
                        onClick={onClose}
                    >
                        <X size={20} />
                    </Button>
                </div>

                <div className="search-modal-body">
                    <div className="search-modal-section">
                        <label
                            htmlFor="gameName"
                            className="search-modal-label"
                        >
                            Game Name
                        </label>
                        <Input
                            control={form.control}
                            name="gameName"
                            placeholder="Search for a specific game..."
                            error={form.formState.errors.gameName?.message}
                        />
                    </div>

                    <div className="search-modal-section">
                        <label className="search-modal-label">Platform</label>
                        <div className="search-modal-radio-group">
                            {platforms.map((platform) => (
                                <Radio
                                    key={platform.value}
                                    control={form.control}
                                    label={platform.label}
                                    name="platform"
                                    value={platform.value}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="search-modal-section">
                        <div className="search-modal-header">
                            <label className="search-modal-label">
                                Categories
                            </label>
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() =>
                                    form.reset({
                                        ...form.watch(),
                                        categories: [],
                                    })
                                }
                                className="search-modal-clear"
                            >
                                Clear All
                            </Button>
                        </div>

                        <CheckboxList
                            items={gameCategories}
                            control={form.control}
                            name="categories"
                        />
                    </div>

                    <div className="search-modal-footer">
                        <Button
                            type="button"
                            onClick={handleReset}
                            variant="outline"
                        >
                            Reset Filters
                        </Button>
                        <Button type="button" onClick={onClose}>
                            Accept
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchModal;
