import type { FC, PropsWithChildren } from "react";
import { Header, HeaderMobile } from "../header";
import "./MainLayout.css";
import useViewport from "../../hooks/useViewport";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
    const { isMobile } = useViewport();

    return (
        <div className="main-layout">
            {isMobile ? <HeaderMobile /> : <Header />}
            {children}
        </div>
    );
};

export default MainLayout;
