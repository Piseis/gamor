import { Users, Play, Heart, Eye } from "lucide-react";
import "./PresentationCard.css";
import { Avatar, Button } from "../../../../../core/ui";
import type { Streamer } from "../../../types/game";

interface Props {
    player: Streamer;
    isLive?: boolean;
}

const PresentationCard = ({ player, isLive = true }: Props) => {
    const {
        channel_name,
        description,
        followers,
        username,
        viewers = 1245,
        gameCategories,
        game,
    } = player;

    const formatFollowers = (count: number) => {
        if (count >= 1000000) {
            return `${(count / 1000000).toFixed(1)}M`;
        }
        if (count >= 1000) {
            return `${(count / 1000).toFixed(1)}K`;
        }
        return count.toString();
    };

    return (
        <div className="presentation-card">
            <div className="card-content">
                <div className="card-header">
                    <div className="avatar-container">
                        <Avatar
                            alt={username}
                            fallback={username[0].toUpperCase()}
                            size="lg"
                        />
                        {isLive && <span className="live-dot"></span>}
                    </div>
                    <div className="user-info">
                        <h3 className="username">{username}</h3>
                        <p className="channel-name">{channel_name}</p>
                    </div>
                </div>

                <h4>{game}</h4>
                <div className="card-description">
                    <p className="description-text">{description}</p>
                </div>
                <div className="category-container">
                    {gameCategories?.map((category) => (
                        <ul key={category}>
                            <span className="category-badge-content">
                                #{category}
                            </span>
                        </ul>
                    ))}
                </div>

                <div className="stats-grid">
                    <div className="stat-item">
                        <div className="stat-header">
                            <Users className="stat-icon" size={16} />
                            <span className="stat-label">Followers</span>
                        </div>
                        <p className="stat-value">
                            {formatFollowers(followers)}
                        </p>
                    </div>
                    <div className="stat-item">
                        <div className="stat-header">
                            <Eye className="stat-icon" size={16} />
                            <span className="stat-label">Viewers</span>
                        </div>
                        <p className="stat-value">{formatFollowers(viewers)}</p>
                    </div>
                </div>

                <div className="actions">
                    <Button variant="ghost" className="watch-button">
                        <Play className="watch-icon" size={16} />
                        Watch Stream
                    </Button>
                    <Button className="favorite-button">
                        <Heart className="favorite-icon" size={16} />
                    </Button>
                </div>
            </div>

            <div className="floating-element element-1"></div>
            <div className="floating-element element-2"></div>
            <div className="floating-element element-3"></div>
        </div>
    );
};

export default PresentationCard;
