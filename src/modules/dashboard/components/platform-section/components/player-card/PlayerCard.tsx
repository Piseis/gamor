import { type FC } from "react";
import "./PlayerCard.css";
import { Plus } from "lucide-react";
import Avatar from "../../../../../../core/ui/avatar";
import Button from "../../../../../../core/ui/button";
import type { Streamer } from "../../../../types/game";
import useStreamerContext from "../../../../store/hooks";

interface Props {
    player: Streamer;
    index: number;
}

const PlayerCard: FC<Props> = ({ player, index }) => {
    const { dispatch } = useStreamerContext();

    const onHandlerAddPlayer = () => {
        dispatch({ type: "Set player", payload: player });
    };

    return (
        <div className="player-card">
            <div className="player-info">
                <span className="player-number">{index + 1}</span>
                <Avatar
                    alt={player.username}
                    fallback={player.username[0]}
                    size="sm"
                />
                <span className="player-name">{player.username}</span>
            </div>

            <Button
                type="button"
                variant="outline"
                size="small"
                className="add-btn"
                onClick={onHandlerAddPlayer}
            >
                <Plus size={16} />
            </Button>
        </div>
    );
};

export default PlayerCard;
