import { useEffect, useState, type FC } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./LoginForm.module.css";
import { Eye, EyeOff } from "lucide-react";
import { useTheme } from "../../../../core/theme/context/ThemeContext";
import { Button, Input, Notification } from "../../../../core/ui";
import LoginFooter from "../login-footer/LoginFooter";
import LoginHeader from "../login-header/LoginHeader";

interface Props {
    problemDetail?: string;
    resetProblemDetail: () => void;
}

export const LoginForm: FC<Props> = ({ problemDetail, resetProblemDetail }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const { theme } = useTheme();
    const form = useFormContext();

    useEffect(() => {
        if (problemDetail) {
            setShowNotification(true);
        }
    }, [problemDetail]);

    const onHandleCloseNotification = () => {
        setShowNotification(false);
        resetProblemDetail();
    };

    return (
        <div className={styles.loginContainer} data-theme={theme}>
            <div className={styles.loginWrapper}>
                <LoginHeader />
                {showNotification && problemDetail && (
                    <Notification
                        message={problemDetail}
                        onClose={onHandleCloseNotification}
                        type="error"
                        autoClose
                        autoCloseDuration={5000}
                    />
                )}
                <div className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="username" className={styles.label}>
                            Username
                        </label>
                        <Input
                            control={form.control}
                            name="username"
                            placeholder="Enter your username"
                            error={form.formState.errors.username?.message}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="password" className={styles.label}>
                            Password
                        </label>
                        <div className={styles.passwordInputWrapper}>
                            <Input
                                control={form.control}
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                error={form.formState.errors.password?.message}
                            />
                            <Button
                                variant="ghost"
                                onClick={() => setShowPassword(!showPassword)}
                                className={styles.passwordToggle}
                            >
                                {showPassword ? (
                                    <EyeOff size={20} />
                                ) : (
                                    <Eye size={20} />
                                )}
                            </Button>
                        </div>
                    </div>

                    <Button
                        type="submit"
                        disabled={form.formState.isSubmitting}
                        className={styles.submitButton}
                    >
                        {form.formState.isSubmitting
                            ? "Signing in..."
                            : "Sign In"}
                    </Button>
                </div>
                <LoginFooter />
            </div>
        </div>
    );
};

export default LoginForm;
