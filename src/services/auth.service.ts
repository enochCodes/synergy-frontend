import axiosInstance from "./axiosInstance";
import { ApiResponse } from "../types/types";

// Function for logging in
export const login = async (
  email: string,
  password: string,
): Promise<ApiResponse> => {
  try {
    const response = await axiosInstance.post("/auth/login", {
      email,
      password,
    });

    // Return the structured response based on your API response
    return {
      status: response.status,
      token: response.Data,
      success: true,
      message: response.message,
    };
  } catch (error: any) {
    // Enhanced error handling to capture the error message and status
    throw {
      message: error.response?.message || "An error occurred during login",
      status: error.response?.status || 500,
    };
  }
};

// Function for signing up
export const signup = async (
  role: string,
  data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
  },
): Promise<ApiResponse> => {
  try {
    data.role = role;
    const response = await axiosInstance.post("/auth/signup", data);

    // Ensure this return statement is hit
    return {
      status: response.status,
      token: response.Data,
      success: true,
      message: response.message,
    };
  } catch (error: any) {
    console.error("Error in signup function:", error);
    throw {
      message: error.response?.message || "An error occurred during signup",
      status: error.response?.status || 500,
    };
  }
};
