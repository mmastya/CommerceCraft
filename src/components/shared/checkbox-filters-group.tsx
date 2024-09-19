"use client";
import React, { useState } from "react";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { Button, Input, Skeleton } from "../ui";

type Item = FilterChecboxProps;

export interface Props {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  loading?: boolean;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[];
  className?: string;
  selected: Set<string>,
  name: string
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  loading,
  onClickCheckbox,
  selected,
  name,
  className,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSerchValue] = useState<string>("");

  const onChangeSearchInput = (value: string) => {
    setSerchValue(value);
  };

  if (loading) {
    return (
      <div className={className}>
        <p className="font-bold mb-3">{title}</p>
        {...Array(limit)
          .fill(0)
          .map((_, index) => {
            return <Skeleton key={index} className="h-6 mb-4 rounded-[8px]" />;
          })}
      </div>
    );
  }

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : ((defaultItems || items)?.slice(0, limit));

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            placeholder={searchInputPlaceholder}
            onChange={(e) => onChangeSearchInput(e.target.value)}
            className="bg-gray-50 border-none"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list?.map((item) => {
          return (
            <FilterCheckbox
              onCheckedChange={() => onClickCheckbox?.(item.value)}
              checked={selected.has(item.value)}
              key={String(item.value)}
              text={item.text}
              value={item.value}
              endAdornment={item.endAdornment}
              name={name}
            />
          );
        })}
      </div>
      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <Button
            variant="link"
            onClick={() => setShowAll(!showAll)}
            className="text-primary mt-3 pl-0"
          >
            {showAll ? "Скрыть" : " + Показать все"}
          </Button>
        </div>
      )}
    </div>
  );
};
