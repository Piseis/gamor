import "./PlatformSection.css";
import PlataformOptions from "../components/plataform-options/PlataformOptions";
import PlatformSearchGame from "../components/platform-search-game/PlatformSearchGame";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
    searchSchemaResolver,
    type SearchSchema,
} from "../schemas/searchSchema";
import SearchModal from "../components/search-modal/SearchModal";
import { filterStreamers } from "../services/filterStreamers";
import type { Streamer } from "../../../types/game";
import useStreamerContext from "../../../store/hooks";

type FormData = SearchSchema;
const defaultValues: FormData = {
    platform: "all",
    categories: [],
    platformOp: "Party",
};

const PlatformSection = () => {
    const form = useForm<FormData>({
        resolver: searchSchemaResolver,
        defaultValues,
    });
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
    const [players, setPlayers] = useState<Streamer[]>([]);
    const { dispatch } = useStreamerContext();

    const onHandleSubmit = async (data: FormData) => {
        dispatch({ type: "Set player", payload: null });
        const response = await filterStreamers(data);
        setPlayers(response.data!);
    };

    const onhandleCloseModal = () => {
        setIsSearchModalOpen(false);
    };

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onHandleSubmit)}>
                <div className="platform-section">
                    <PlataformOptions />
                    <PlatformSearchGame
                        players={players}
                        openModal={() => setIsSearchModalOpen(true)}
                    />
                </div>
                <SearchModal
                    isOpen={isSearchModalOpen}
                    onClose={onhandleCloseModal}
                />
            </form>
        </FormProvider>
    );
};

export default PlatformSection;
