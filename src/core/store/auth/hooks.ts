import { use } from "react";
import AuthContext from "./context";

const useAuthContext = () => {
    return use(AuthContext);
};

export default useAuthContext;
