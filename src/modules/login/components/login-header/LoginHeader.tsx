import { Link } from "react-router";
import "./LoginHeader.css";
import { ArrowLeft } from "lucide-react";

const LoginHeader = () => {
    return (
        <div className="header">
            <Link to="/" className="back-link">
                <ArrowLeft className="back-icon" />
                Back to Home
            </Link>
            <h1 className="title">Welcome Back</h1>
            <div className="subtitle">Gamor</div>
            <p className="description">
                Sign in to continue your gaming journey
            </p>
        </div>
    );
};

export default LoginHeader;
