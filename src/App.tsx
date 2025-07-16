import { RouterProvider } from "react-router";
import { router } from "./core/router/route";
import "./core/theme/global.css";
import { ThemeProvider } from "./core/theme/context/ThemeContext";
import { AuthProvider } from "./core/store/auth";

function App() {
    return (
        <AuthProvider>
            <ThemeProvider>
                <RouterProvider router={router} />
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;
