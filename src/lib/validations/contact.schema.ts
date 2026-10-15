import { z } from "zod";

export const contactSchema = z.object({
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

  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .max(20, "Phone number is too long")
    .regex(/^\+?[0-9\s\-()]+$/, "Please enter a valid phone number")
    .refine(
      (value) => {
        const digits = value.replace(/\D/g, "").length;
        return digits >= 7 && digits <= 15;
      },
      "Phone number must be 7 to 15 digits",
    ),

  treatment: z
    .array(z.string().trim().min(1).max(100, "Treatment name is too long"))
    .max(20, "Too many treatments selected")
    .optional(),

  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(2000, "Message is too long"),

  // Honeypot: hidden from people, bots fill it in.
  website: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
