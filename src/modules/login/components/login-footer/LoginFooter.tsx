import { Link } from "react-router";
import styles from "./LoginFooter.module.css";

const LoginFooter = () => {
    return (
        <div className={styles.signupText}>
            <p>
                {"Don't have an account? "}
                <Link to="/register" className={styles.signupLink}>
                    Sign up
                </Link>
            </p>
        </div>
    );
};

export default LoginFooter;
