import { useTheme } from "../../../../../core/theme/context/ThemeContext";
import "./PresentationStaticCard.css";

const PresentationCard = () => {
    const { theme } = useTheme();
    const characterImage = theme === "dark" ? "gustave.png" : "sciel.png";

    return (
        <div className="presentation-card">
            <div className="card-content">
                <h2 className="card-title">Presentation New Season</h2>
                <p className="card-subtitle">Join Live Stream</p>

                <div className="timer">
                    <span className="timer-text">11 : 45</span>
                </div>
            </div>

            <div className="character-image">
                <img
                    src={characterImage}
                    alt="Presentation Character"
                    className="character-img"
                />
            </div>

            <div className="floating-element element-1"></div>
            <div className="floating-element element-2"></div>
            <div className="floating-element element-3"></div>
        </div>
    );
};

export default PresentationCard;
