import { Settings2 } from "lucide-react";
import { useEffect, useState, type FC } from "react";
import { Button, FadingList } from "../../../../../../core/ui";
import { useFormContext } from "react-hook-form";
import type { Streamer } from "../../../../types/game";
import "./PlatformSearchGame.css";
import PlayerCard from "../player-card";

interface Props {
    openModal: () => void;
    players: Streamer[];
}

const PlatformSearchGame: FC<Props> = ({ openModal, players }) => {
    const [filteredGame, setFilteredGame] = useState<string | undefined>();

    const form = useFormContext();
    const gameName = form.watch("gameName");
    const platform = form.watch("platform");
    const categories = form.watch("categories");

    useEffect(() => {
        const buildFilterLabel = () => {
            const labelParts = [];
            if (gameName) labelParts.push(gameName);
            if (platform && platform !== "all") labelParts.push(platform);

            if (categories?.length > 0) {
                labelParts.push(
                    ...(Array.isArray(categories) ? categories : [categories])
                );
            }
            if (labelParts.length > 3) {
                return `${labelParts[0]} | ${labelParts[1]} | ${labelParts[2]} | ...`;
            }

            return labelParts.join(" | ");
        };

        setFilteredGame(buildFilterLabel());
    }, [gameName, platform, categories]);

    let playersCards = players.map((player, index) => (
        <PlayerCard key={player.id} player={player} index={index} />
    ));

    if (form.formState.isSubmitting) {
        playersCards = [];
        playersCards.push(<span>Loading...</span>);
    }

    return (
        <div className="step">
            <div className="step-header">
                <span className="step-number">02.</span>
                <h3 className="step-title">Searching Game</h3>
            </div>
            <div className="card">
                <div className="search-container">
                    <label>{filteredGame || "No filters added"}</label>
                    <Button variant="ghost" onClick={openModal} type="button">
                        <Settings2 className="search-icon" />
                    </Button>
                </div>
                <FadingList
                    items={playersCards}
                    listHeight={200}
                    fadeHeight={100}
                />

                <Button
                    type="submit"
                    variant="primary"
                    size="large"
                    className="search-btn"
                >
                    Search Now
                </Button>
            </div>
        </div>
    );
};

export default PlatformSearchGame;
