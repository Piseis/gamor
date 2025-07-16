import { FormProvider, useForm } from "react-hook-form";
import LoginForm from "../components/login-form/LoginForm";
import { loginSchemaResolver, type LoginSchema } from "../schemas/loginSchema";
import { login } from "../services/login";
import { useNavigate } from "react-router";
import useAuthContext from "../../../core/store/auth/hooks";
import { useState } from "react";

type FormData = LoginSchema;
const defaultValues: FormData = {
    username: "",
    password: "",
};

const LoginContainer = () => {
    const navigate = useNavigate();
    const { dispatch } = useAuthContext();
    const form = useForm<FormData>({
        resolver: loginSchemaResolver,
        defaultValues,
    });
    const [problemDetails, setProblemDetails] = useState<string | undefined>();

    const onHandleSubmit = async (data: FormData) => {
        const response = await login(data);
        if (response.data) {
            form.reset(defaultValues);
            resetProblemDetail();
            dispatch({ type: "Set user", payload: response.data });
            navigate("/", { replace: true });
        } else {
            setProblemDetails(response.errorMessage);
        }
    };

    const resetProblemDetail = () => {
        setProblemDetails(undefined);
    };

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onHandleSubmit)}>
                <LoginForm
                    problemDetail={problemDetails}
                    resetProblemDetail={resetProblemDetail}
                />
            </form>
        </FormProvider>
    );
};

export default LoginContainer;
