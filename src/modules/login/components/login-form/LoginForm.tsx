import { useEffect, useState, type FC } from "react";
import { useFormContext } from "react-hook-form";
import "./LoginForm.css";
import { Eye, EyeOff } from "lucide-react";
import { useTheme } from "../../../../core/theme/context/ThemeContext";
import { Button, Input, Notification } from "../../../../core/ui";
import LoginHeader from "../login-header";
import LoginFooter from "../login-footer";

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
        <div className="login-container" data-theme={theme}>
            <div className="login-wrapper">
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
                <form className="form">
                    <div className="form-group">
                        <label htmlFor="username" className="label">
                            Username
                        </label>
                        <Input
                            control={form.control}
                            name="username"
                            placeholder="Enter your username"
                            error={form.formState.errors.username?.message}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="label">
                            Password
                        </label>
                        <div className="password-input-wrapper">
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
                                className="password-toggle"
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
                        className="submit-button"
                    >
                        {form.formState.isSubmitting
                            ? "Signing in..."
                            : "Sign In"}
                    </Button>
                </form>
                <LoginFooter />
            </div>
        </div>
    );
};

export default LoginForm;
