import "./PlatformSection.css";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
    searchSchemaResolver,
    type SearchSchema,
} from "../schemas/searchSchema";
import { filterStreamers } from "../services/filterStreamers";
import type { Streamer } from "../../../types/game";
import {
    PlatformSearchGame,
    PlatformOptions,
    SearchModal,
} from "../components";
import { useStreamerContext } from "../../../store";

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
                    <PlatformOptions />
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
