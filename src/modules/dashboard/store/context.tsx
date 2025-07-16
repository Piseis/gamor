import { createContext, type Dispatch } from "react";
import type { IPlayerState } from "./initialState";
import type { TAction } from "./actions";
import initialState from "./initialState";

interface IContextProps {
    state: IPlayerState;
    dispatch: Dispatch<TAction>;
}

const StreamerContext = createContext<IContextProps>({
    state: initialState,
    dispatch: () => {},
});

export default StreamerContext;
