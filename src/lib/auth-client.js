import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://a8-skill-sphere-online-learning-pla.vercel.app"
});


export const { signIn, signUp, useSession } = createAuthClient()