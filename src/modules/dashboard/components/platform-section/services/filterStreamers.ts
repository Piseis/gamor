import type { Response } from "../../../../../core/types/response";
import type { Game, SearchParams, Streamer } from "../../../types/game";
import { games } from "./_mock/games";

export const filterStreamers = async (
    params: SearchParams
): Promise<Response<Streamer[]>> => {
    const {
        gameName = "",
        platform = "all",
        categories = [],
        platformOp = "Streams",
    } = params;
    ``;
    const matchesPlatform = (game: Game): boolean => {
        if (platform === "all") return true;
        return game.platform.includes(platform);
    };

    const matchesCategories = (game: Game): boolean => {
        if (categories.length === 0) return true;
        return categories.some((cat) => game.category.includes(cat));
    };

    const matchesPlatformOp = (game: Game): boolean => {
        return game.type.includes(platformOp);
    };

    const filteredGames = games.filter((game) => {
        const nameMatch = game.name
            .toLowerCase()
            .includes(gameName.toLowerCase());
        const platformMatch = matchesPlatform(game);
        const categoriesMatch = matchesCategories(game);
        const platformOpMatch = matchesPlatformOp(game);

        return nameMatch && platformMatch && categoriesMatch && platformOpMatch;
    });

    const filteredStreamers = filteredGames.flatMap((game) =>
        game.streamers.map((streamer) => ({
            ...streamer,
            game: game.name,
            gameCategories: game.category,
            gamePlatforms: game.platform,
        }))
    );

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return new Promise((resolve) => {
        return resolve({
            status: 200,
            data: filteredStreamers,
        });
    });
};
