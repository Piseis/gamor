import "./Header.css";
import { Avatar, Button, ToogleSwitch } from "..";
import { Link, useNavigate } from "react-router";
import { useAuthContext } from "../../store/auth";

const Header = () => {
    const navItems = [
        { label: "Home", active: true },
        { label: "Streams", active: false },
        { label: "Party", active: false },
        { label: "Premium", active: false },
    ];

    const { state } = useAuthContext();
    const navigate = useNavigate();

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <nav className="nav">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                to="#"
                                className={`nav-link ${
                                    item.active ? "active" : ""
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="logo">Gamor</div>

                    <div className="header-actions">
                        <ToogleSwitch />
                        {state.user ? (
                            <Avatar
                                alt={state.user.username}
                                fallback={state.user.username[0]}
                                size="lg"
                            />
                        ) : (
                            <div className="header-actions">
                                <Button
                                    variant="ghost"
                                    size="large"
                                    onClick={() => navigate("login")}
                                >
                                    Sign in
                                </Button>
                                <Button
                                    variant="primary"
                                    className="rounded header-create-account"
                                    size="large"
                                    onClick={() => navigate("register")}
                                >
                                    Create account
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
