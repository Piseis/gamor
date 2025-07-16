import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../theme/context/ThemeContext";
import "./ToogleSwitch.css";

const ToggleSwitch = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="toggle-container">
            <label className="toggle-switch">
                <input
                    type="checkbox"
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                />
                <span className="slider round"></span>
            </label>
            <span className="toggle-label">
                {theme === "dark" ? <Moon /> : <Sun />}
            </span>
        </div>
    );
};

export default ToggleSwitch;
