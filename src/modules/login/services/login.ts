import type { Account } from "../../../core/types/account";
import type { Response } from "../../../core/types/response";
import type { LoginSchema } from "../schemas/loginSchema";
import { accounts } from "./_mock/accounts";

export const login = async (
    credentials: LoginSchema
): Promise<Response<Account>> => {
    // simulate api delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const account = accounts.find((x) => x.username === credentials.username);
    if (!account)
        return new Promise((resolve) => {
            return resolve({
                status: 401,
                errorMessage: "Invalid username or password",
            });
        });

    if (account.password !== credentials.password)
        return new Promise((resolve) => {
            return resolve({
                status: 401,
                errorMessage: "Invalid username or password",
            });
        });

    return new Promise((resolve) => {
        return resolve({
            status: 200,
            data: { username: account.username },
        });
    });
};
