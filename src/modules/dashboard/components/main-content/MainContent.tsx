import { useStreamerContext } from "../../store";
import HeroSection from "../hero-section";
import PlatformSection from "../platform-section";
import { PresentationCard, PresentationStaticCard } from "../presentation-card";
import TrendingCategories from "../trending-categories";
import "./MainContent.css";

const MainContent = () => {
    const { state } = useStreamerContext();

    return (
        <main className="main-content">
            <div className="container">
                <div className="content-grid">
                    <HeroSection />
                    {state.player ? (
                        <PresentationCard player={state.player} />
                    ) : (
                        <PresentationStaticCard />
                    )}

                    <PlatformSection />
                </div>
                <TrendingCategories />
            </div>
        </main>
    );
};

export default MainContent;
