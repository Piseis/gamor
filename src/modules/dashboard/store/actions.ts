import type { IStreamer } from "./initialState";

export type StreamerTypes = "Set player";

type Action<T> = {
    type: StreamerTypes;
    payload: T;
};

interface ISetStreamer extends Action<IStreamer | null> {
    type: "Set player";
}

export type TAction = ISetStreamer;
