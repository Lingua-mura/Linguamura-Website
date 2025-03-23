'use client'

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  className?: string;
  color?: string;
  size?: number;
  label?: string;
  showLabel?: boolean;
}

const BackButton = ({
  className = "",
  color = "#000000",
  size = 30,
  label = "Back",
  showLabel = false,
}: BackButtonProps) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={`inline-flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 transition-colors
        ${className}`}
      aria-label="Go back"
    >
      <ArrowLeft size={size} color={color} />
      {showLabel && (
        <span className={`text-sm font-medium text-[${color}]`}>{label}</span>
      )}
    </button>
  );
};

export default BackButton;
