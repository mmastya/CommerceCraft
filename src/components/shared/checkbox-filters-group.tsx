"use client";
import React, { useState } from "react";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { Button, Input } from "../ui";

type Item = FilterChecboxProps;

export interface Props {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  className,
}) => {
  const [showAll, setShowAll] = useState(false);
  //const [value, setValue] = useState<string[]>(defaultValue || []);
  const [searchValue, setSerchValue] = useState<string>("");

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : defaultItems.slice(0, limit);

  const onChangeSearchInput = (value: string) => {
    setSerchValue(value);
  };

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
        {list.map((item) => {
          return (
            <FilterCheckbox
              onCheckedChange={() => console.log("log")}
              checked={false}
              key={String(item.value)}
              text={item.text}
              value={item.value}
              endAdornment={item.endAdornment}
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
