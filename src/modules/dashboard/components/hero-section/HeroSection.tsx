import { useNavigate } from "react-router";
import { Button } from "../../../../core/ui";
import "./HeroSection.css";
import { useAuthContext } from "../../../../core/store/auth";

const HeroSection = () => {
    const { state } = useAuthContext();
    const navigate = useNavigate();

    return (
        <div className="hero-section">
            <h1 className="hero-title">
                start <span className="highlight">streaming</span> games
                differently
            </h1>
            <p className="hero-subtitle">gamor now has stream party platform</p>
            {!state.user && (
                <div className="hero-actions">
                    <Button
                        variant="ghost"
                        size="large"
                        className="rounded create-account"
                        onClick={() => navigate("register")}
                    >
                        Create account
                    </Button>
                    <Button
                        variant="ghost"
                        size="large"
                        onClick={() => navigate("login")}
                    >
                        Sign in
                    </Button>
                </div>
            )}
        </div>
    );
};

export default HeroSection;
