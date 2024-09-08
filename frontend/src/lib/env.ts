import { z } from 'zod'

console.log(import.meta.env)

export const envSchema = z.object({
  MODE: z.enum(['production', 'development', 'test']),
})

export const env = envSchema.parse(import.meta.env)