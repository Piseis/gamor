import type { TAction } from "./actions";
import type { IPlayerState } from "./initialState";

const reducer = (state: IPlayerState, action: TAction): IPlayerState => {
    const { type } = action;
    switch (type) {
        case "Set player":
            return { ...state, player: action.payload };
        default:
            return state;
    }
};

export default reducer;
