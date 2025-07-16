import "./HeaderMobile.css";
import { Avatar, Button } from "..";
import useAuthContext from "../../store/auth/hooks";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { PanelTopClose, PanelTopOpen } from "lucide-react";
import ToggleSwitchMinimalist from "../toogle-switch/ToogleSwitchMinimalist";
import useViewport from "../../hooks/useViewport";

const HeaderMobile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = [
        { label: "Home", active: true },
        { label: "Streams", active: false },
        { label: "Party", active: false },
        { label: "Premium", active: false },
        { label: "Sign in", active: false, path: "login" },
        { label: "Create account", active: false, path: "register" },
    ];

    const { state } = useAuthContext();
    const { isMobile } = useViewport();

    useEffect(() => {
        if (!isMobile) {
            setIsMenuOpen(false);
        }
    }, [isMobile]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <div className="blurred-circle"></div>
                        Gamor
                    </div>

                    {isMenuOpen && (
                        <nav className="nav mobile">
                            {navItems.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.path ?? "#"}
                                    className={`nav-link ${
                                        item.active ? "active" : ""
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    )}
                    <div className="header-actions ">
                        <div className="header-actions">
                            <ToggleSwitchMinimalist />
                            {state.user && (
                                <Avatar
                                    alt={state.user.username}
                                    fallback={state.user.username[0]}
                                    size="lg"
                                />
                            )}
                        </div>

                        <Button
                            className="menu-toggle"
                            onClick={toggleMenu}
                            variant="ghost"
                        >
                            {isMenuOpen ? <PanelTopClose /> : <PanelTopOpen />}
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderMobile;
