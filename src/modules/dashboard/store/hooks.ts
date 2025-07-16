import { use } from "react";
import StreamerContext from "./context";

const useStreamerContext = () => {
    return use(StreamerContext);
};

export default useStreamerContext;
