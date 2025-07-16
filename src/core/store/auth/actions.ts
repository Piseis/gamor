import type { IUSer } from "./initialState";

export type AuthTypes = "Set user" | "Do logout";

type Action<T> = {
    type: AuthTypes;
    payload: T;
};

interface ISetUser extends Action<IUSer | null> {
    type: "Set user";
}

interface IDoLogout extends Action<boolean> {
    type: "Do logout";
}

export type TAction = ISetUser | IDoLogout;
