import reducer from "./reducer";
import initialState from "./initialState.ts";
import AuthContext from "./context";
import { useReducer, type FC, type PropsWithChildren } from "react";

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
