export interface Player {
    id: number;
    avatar?: string;
    name: string;
    status: "online" | "offline";
}
