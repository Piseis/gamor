import { Link } from "react-router";
import "./LoginFooter.css";

const LoginFooter = () => {
    return (
        <div className="signup-text">
            <p>
                {"Don't have an account? "}
                <Link to="/register" className="signup-link">
                    Sign up
                </Link>
            </p>
        </div>
    );
};

export default LoginFooter;
