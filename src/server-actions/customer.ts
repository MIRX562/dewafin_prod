"use server";

import { getCustomerByEmail, getCustomerById } from "@/data/customer";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/sessionUser";
import {
  AddCustomer,
  AddCustomerSchema,
  EditCustomer,
} from "@/schemas/customer";
import { revalidatePath } from "next/cache";

type Response = {
  error?: string;
  success?: string;
};

export const addCustomer = async (values: AddCustomer): Promise<Response> => {
  // Checks customer auth
  const user = await currentUser();
  if (!user) {
    return { error: "Unauthorized" };
  }

  // Validate the provided fields using the schema
  const validatedFields = AddCustomerSchema.safeParse(values);
  if (!validatedFields.success) {
    // Log the invalid values for debugging purposes
    // console.log("Invalid inputs:", values);
    return { error: "Invalid inputs provided" };
  }

  const data = validatedFields.data;

  // Check if a customer with the provided email already exists
  const existingCustomer = await getCustomerByEmail(data.email);
  if (existingCustomer) {
    return { error: "Email already registered" };
  }

  try {
    // Create a new customer record in the database with email already verified
    await db.customer.create({
      data: data,
    });

    revalidatePath("/customer");
    // Return a success message
    return {
      success: "Success Creating New Customer",
    };
  } catch (error) {
    return { error: "Something wen't wrong" };
  }
};

export const deleteCustomer = async (customerId: number): Promise<Response> => {
  // Checks customer auth
  const user = await currentUser();
  if (!user) {
    return { error: "Unauthorized" };
  }

  try {
    // Create a new customer record in the database with email already verified
    await db.customer.delete({
      where: {
        id: customerId,
      },
    });

    // Return a success message
    return { success: "Customer is Deleted" };
  } catch (error) {
    return { error: "Something wen't wrong" };
  }
};

export const editCustomer = async (
  customerData: EditCustomer,
  customerId: number,
) => {
  // Checks customer auth
  const user = await currentUser();
  if (!user) {
    return { error: "Unauthorized" };
  }

  // Fetch the customer from the database
  const dbCustomer = await getCustomerById(customerId);

  // If no customer is found in the database, return an error
  if (!dbCustomer) {
    return { error: "Customer not found in database" };
  }

  // Update the customer settings in the database
  try {
    await db.customer.update({
      where: { id: dbCustomer.id },
      data: customerData,
    });

    revalidatePath("/customer");
    return { success: "Customer data successfully updated" };
  } catch (error) {
    // Handle potential errors during the update
    return { error: `Failed to update customer data` };
  }
};
