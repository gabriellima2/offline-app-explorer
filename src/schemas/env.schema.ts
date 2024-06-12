import { z } from 'zod'

export const envSchema = z.object({
	EXPO_PUBLIC_SUPABASE_URL: z.string().url(),
	EXPO_PUBLIC_SUPABASE_ANON_KEY: z.string(),
})
