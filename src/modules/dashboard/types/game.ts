export type Platform = "all" | "pc" | "browser";
export type PlatformOp = "Party" | "Matches" | "Streams";

export interface SearchParams {
    gameName?: string;
    platform: Platform;
    categories: string[];
    platformOp: PlatformOp;
}

export interface Streamer {
    id: number;
    username: string;
    channel_name: string;
    description: string;
    followers: number;
    viewers: number;
    game?: string;
    gameCategories?: string[];
    gamePlatforms?: string[];
}

export interface Game {
    id: number;
    name: string;
    platform: Platform[];
    category: string[];
    type: PlatformOp[];
    streamers: Streamer[];
}
