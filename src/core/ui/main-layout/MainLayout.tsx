import type { FC, PropsWithChildren } from "react";
import { Header, HeaderMobile } from "../header";
import "./MainLayout.css";
import { useViewPort } from "../../hooks";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
    const { isMobile } = useViewPort();

    return (
        <div className="main-layout">
            {isMobile ? <HeaderMobile /> : <Header />}
            {children}
        </div>
    );
};

export default MainLayout;
