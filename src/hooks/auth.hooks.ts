import { jwtDecode } from "jwt-decode";

// Define the structure of the token payload
interface TokenPayload {
  id: string;
  email: string;
  password: string;
  role: string;
  firstName: string;
  userName: string;
  lastName: string;
  expiresIn: number;
}

// Function to get user details from the token
export const getUserFromToken = (): TokenPayload | null => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    return null; // Return null if no token is present
  }

  try {
    // Decode the token to extract user details
    const decodedToken: TokenPayload = jwtDecode(token);
    console.log(decodedToken);
    return decodedToken; // Return the user data
  } catch (error) {
    console.error("Error decoding token:", error);
    return null; // Return null if decoding fails
  }
};
