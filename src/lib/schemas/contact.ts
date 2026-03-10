import { z } from "zod";

// Contact form schema
export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(5000, "Message too long"),
});
