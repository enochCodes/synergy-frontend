export interface SignUpDTO {
  userName: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
}

export interface CreatorProfile {
  niches: string[];
  bio: string;
  socialLinks: {
    tiktok: string;
    instagram: string;
    facebook: string;
  };
}

export interface ApiResponse {
  status: number;
  token: string;
  success: boolean;
  message: string;
}
