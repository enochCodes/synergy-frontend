import axiosInstance from "./axiosInstance";
import { CreatorProfile, ApiResponse } from "../types/types";

export const setCreatorProfile = async (
  CreatorsData: CreatorProfile,
): Promise<ApiResponse> => {
  try {
    const response = await axiosInstance.post(
      "/creator/profiler",
      CreatorsData,
    );
    return {
      status: response.status,
      token: response.Data,
      success: true,
      message: response.message,
    };
  } catch (error) {
    return Promise.reject(error);
  }
};
