"use client";
import React, { useEffect, useRef } from "react";
import { Title } from "./Title";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/store/category";

interface Props {
  title: string;
  items: any[];
  categoryId: number;
  listClassName?: string;
  className?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  className,
  title,
  items,
  categoryId,
}) => {
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  });

  const { activeId, setActiveId } = useCategoryStore((state) => state);

  useEffect(() => {
    if (intersection?.isIntersecting) {
      console.log(categoryId);
      setActiveId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="mb-5 font-extrabold" />
      <div className={cn("grid grid-cols-3 gap-[50px]", className)}>
        {items.map((item) => {
          return (
            <ProductCard
              key={item.name}
              id={item.id}
              name={item.name}
              price={item.items[0].price}
              imageUrl={item.imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
};
