import { z } from "zod";

export const JobFormValidation = z.object({
  title: z.string(),
  companyName: z.string().min(2, "Business Name name is required"),
  locationType: z.enum(["Remote", "Hybrid", "On-site"]),
  salaryRange: z
    .object({
      min: z.coerce.number().min(0),
      max: z.coerce.number().min(0),
    })
    .refine((val) => val.max >= val.min, {
      message: "Max salary should be greater than or equal to min salary",
    }),
});

export const JobDetailValidation = z.object({
  description: z
    .string()
    .min(5, { message: "Description must be at least 5 characters." }),
  requirements: z
    .string()
    .min(1, "Requirements cannot be empty"),
  benefits: z
    .string()
    .min(1, "Benefits cannot be empty"),
  howToApply: z.string().min(5, "How to apply information is required"),
});
