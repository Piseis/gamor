import { createContext, type Dispatch } from "react";
import type { IAuthState } from "./initialState";
import type { TAction } from "./actions";
import initialState from "./initialState";

interface IContextProps {
    state: IAuthState;
    dispatch: Dispatch<TAction>;
}

const AuthContext = createContext<IContextProps>({
    state: initialState,
    dispatch: () => {},
});

export default AuthContext;
