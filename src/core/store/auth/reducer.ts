import type { TAction } from "./actions";
import type { IAuthState } from "./initialState";

const reducer = (state: IAuthState, action: TAction): IAuthState => {
    const { type } = action;
    switch (type) {
        case "Set user":
            return { ...state, user: action.payload, doLogout: false };
        case "Do logout":
            return {
                ...state,
                doLogout: action.payload,
                user: action.payload ? null : state.user,
            };
        default:
            return state;
    }
};

export default reducer;
