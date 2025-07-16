import type { Streamer } from "../types/game";

export interface IStreamer extends Streamer {}

export interface IPlayerState {
    player: IStreamer | null;
}

const initialState: IPlayerState = {
    player: null,
};

export default initialState;
