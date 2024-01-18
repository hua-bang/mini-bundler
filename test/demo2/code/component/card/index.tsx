import React from "react";
import "./index.css";

const Card: React.FC<CardProps> = ({ title }) => {
  return <span style="text">{title}</span>;
};

interface CardProps {
  title: string;
}

export default Card;
