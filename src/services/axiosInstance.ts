import axios from "axios";
import { API_URL } from "../utils/constants";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: API_URL, // Set the base API URL
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json", // Default header for JSON requests
  },
});

// Add a request interceptor to attach authorization token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken"); // Retrieve token from localStorage or another storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error); // Handle request error
  },
);

// Add a response interceptor to handle responses and errors
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data; // Return only the response data
  },
  (error) => {
    if (error.response) {
      // Handle common response errors (e.g., unauthorized or server errors)
      if (error.response.status === 401) {
        // Redirect to login if unauthorized
        window.location.href = "/auth/login";
        alert(error.response.data?.message || "Unauthorized. Please log in.");
      } else if (error.response.status === 403) {
        // Show forbidden message
        alert("You do not have permission to perform this action.");
      } else {
        // Handle other error codes
        alert(
          error.response.data?.message ||
            "An error occurred. Please try again.",
        );
      }
    } else if (error.request) {
      // Handle cases where the request was made but no response was received
      alert(
        "No response from the server. Please check your network connection.",
      );
    } else {
      // Handle general errors
      alert(error.message);
    }
    return Promise.reject(error); // Pass error to the calling function
  },
);

export default axiosInstance;
