import React from "react";

interface CardProps {
  title: string;
  description: string;
  footer?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, footer }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-sm">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-500 text-sm mt-2">{description}</p>
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  );
};

export default Card;
