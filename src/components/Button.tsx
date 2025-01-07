import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
}) => {
  const className =
    variant === "primary"
      ? "bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      : "bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400";

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
