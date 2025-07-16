import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../theme/context/ThemeContext";
import Button from "../button";

const ToggleSwitchMinimalist = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button variant="outline" size="medium" onClick={toggleTheme}>
            {theme === "dark" ? <Moon /> : <Sun />}
        </Button>
    );
};

export default ToggleSwitchMinimalist;
