// import React from "react";
import ThemeToggler from "@/components/ThemeToggler";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-screen flex items-center justify-center relative">
    <div className="absolute bottom-5 right-5 text-white">
      <ThemeToggler />
    </div>
    {children}</div>;
}
