import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const loginSchema = z.object({
    username: z.string().min(1, { message: "Username is required" }),
    password: z.string().min(1, { message: "Password is required" }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
export const loginSchemaResolver = zodResolver(loginSchema);
