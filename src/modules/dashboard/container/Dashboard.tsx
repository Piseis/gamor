import MainLayout from "../../../core/ui/main-layout/MainLayout";
import MainContent from "../components/main-content";
import { StreamerProvider } from "../store";

const DashboardPage = () => {
    return (
        <div className="gamor-platform">
            <MainLayout>
                <StreamerProvider>
                    <MainContent />
                </StreamerProvider>
            </MainLayout>
        </div>
    );
};

export default DashboardPage;
