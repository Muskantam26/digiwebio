import { z } from "zod";

export function sanitizeInput(str: string): string {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

export const enquiryFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(8, "Phone number must be at least 8 digits")
    .max(20, "Phone number cannot exceed 20 characters")
    .regex(/^[0-9+\s\-()]+$/, "Phone number contains invalid characters"),
  company: z
    .string()
    .max(100, "Company name cannot exceed 100 characters")
    .or(z.literal("")),
  service: z
    .string()
    .min(1, "Please select a service"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message cannot exceed 2000 characters"),
});

export type EnquiryFormInputs = z.infer<typeof enquiryFormSchema>;

export const leadFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(8, "Phone number must be at least 8 digits")
    .max(20, "Phone number cannot exceed 20 characters")
    .regex(/^[0-9+\s\-()]+$/, "Phone number contains invalid characters"),
  company: z
    .string()
    .max(100, "Company name cannot exceed 100 characters")
    .or(z.literal("")),
  service: z
    .string()
    .min(1, "Please select a service"),
  budget: z
    .string()
    .or(z.literal("")),
  description: z
    .string()
    .min(10, "Project description must be at least 10 characters")
    .max(2000, "Description cannot exceed 2000 characters"),
});

export type LeadFormInputs = z.infer<typeof leadFormSchema>;
