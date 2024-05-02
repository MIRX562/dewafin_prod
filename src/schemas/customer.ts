import { z } from "zod";

// Define Zod schema for the Customer model
export const CustomerSchema = z.object({
  id: z.number(),
  email: z.string(),
  phone: z.string().optional(),
  address: z.string().optional(),
  website: z.string().optional(),
  taxId: z.string().optional(),
  notes: z.string().optional(),
});

export const AddCustomerSchema = z.object({
  email: z.string(),
  phone: z.string().optional(),
  address: z.string().optional(),
  website: z.string().optional(),
  taxId: z.string().optional(),
  notes: z.string().optional(),
});
export const EditCustomerSchema = z.object({
  email: z.string(),
  phone: z.string().optional(),
  address: z.string().optional(),
  website: z.string().optional(),
  taxId: z.string().optional(),
  notes: z.string().optional(),
});

export type Customer = z.infer<typeof CustomerSchema>;
export type AddCustomer = z.infer<typeof AddCustomerSchema>;
export type EditCustomer = z.infer<typeof EditCustomerSchema>;
