export type Response<T> = {
    data?: T;
    status: number;
    errorMessage?: string;
};
