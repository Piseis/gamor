import type { Account } from "../../types/account";

export interface IUSer extends Account {}

export interface IAuthState {
    user: IUSer | null;
    doLogout: boolean;
}

const initialState: IAuthState = {
    user: null,
    doLogout: false,
};

export default initialState;
