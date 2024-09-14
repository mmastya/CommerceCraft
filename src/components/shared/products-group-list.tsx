import React from "react";
import { Title } from "./Title";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";

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
}) => {
  return (
    <div className={className}>
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
