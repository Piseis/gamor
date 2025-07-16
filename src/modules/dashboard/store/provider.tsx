import reducer from "./reducer";
import initialState from "./initialState.ts";
import StreamerContext from "./context";
import { useReducer, type FC, type PropsWithChildren } from "react";

const StreamerProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StreamerContext.Provider value={{ state, dispatch }}>
            {children}
        </StreamerContext.Provider>
    );
};

export default StreamerProvider;
