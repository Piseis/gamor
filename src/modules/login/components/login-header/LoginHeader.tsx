import { Link } from "react-router";
import styles from "./LoginHeader.module.css";
import { ArrowLeft } from "lucide-react";

const LoginHeader = () => {
    return (
        <div className={styles.header}>
            <Link to="/" className={styles.backLink}>
                <ArrowLeft className={styles.backIcon} />
                Back to Home
            </Link>
            <h1 className={styles.title}>Welcome Back</h1>
            <div className={styles.subtitle}>Gamor</div>
            <p className={styles.description}>
                Sign in to continue your gaming journey
            </p>
        </div>
    );
};

export default LoginHeader;
