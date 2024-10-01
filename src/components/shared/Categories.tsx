"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import { Category } from "@prisma/client";

interface Props {
  categories: Category[];
  className?: string;
}

export const Categories: React.FC<Props> = ({ categories, className }) => {
  const activeId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {categories.map((item, index) => {
        return (
          <a
            className={cn(
              "flex items-center font-bold h-11 rounded-2xl px-5",
              activeId === item.id &&
                "bg-white shadow-md shadow-gray-200 text-primary"
            )}
            key={index}
            href={`/#${item.name}`}
          >
            <button>{item.name}</button>
          </a>
        );
      })}
    </div>
  );
};
