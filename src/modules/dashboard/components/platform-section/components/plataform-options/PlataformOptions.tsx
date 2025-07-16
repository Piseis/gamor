import { useEffect, useState } from "react";
import { Button } from "../../../../../../core/ui";
import { useFormContext } from "react-hook-form";
import "./PlataformOptions.css";

const PlataformOptions = () => {
    const [selectedPlatform, setSelectedPlatform] = useState("Party");
    const form = useFormContext();

    useEffect(() => {
        form.setValue("platformOp", selectedPlatform);
    }, [selectedPlatform]);

    return (
        <div className="step">
            <div className="step-header">
                <span className="step-number">01.</span>
                <h3 className="step-title">Choose Platform</h3>
            </div>

            <div className="platform-options">
                {["Party", "Matches", "Streams"].map((platform) => (
                    <Button
                        type="button"
                        key={platform}
                        variant="ghost"
                        onClick={() => setSelectedPlatform(platform)}
                        className={`platform-btn ${
                            selectedPlatform === platform ? "active" : ""
                        }`}
                    >
                        {platform}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default PlataformOptions;
