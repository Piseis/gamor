import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const searchSchema = z.object({
    gameName: z.string().optional(),
    platform: z.enum(["all", "pc", "browser"]),
    categories: z.array(z.string()),
    platformOp: z.enum(["Party", "Matches", "Streams"]),
});

export type SearchSchema = z.infer<typeof searchSchema>;
export const searchSchemaResolver = zodResolver(searchSchema);
