import { z } from "zod";

export const careersSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "First name is required")
    .max(50, "First name is too long"),

  lastName: z.string().trim().max(50, "Last name is too long").optional(),

  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .max(100, "Email is too long")
    .email("Please enter a valid email address"),

  subject: z
    .string()
    .trim()
    .min(1, "Subject is required")
    .max(150, "Subject is too long"),

  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(2000, "Message is too long"),

  // Honeypot: hidden from people, bots fill it in.
  website: z.string().optional(),
});

export type CareersFormValues = z.infer<typeof careersSchema>;
