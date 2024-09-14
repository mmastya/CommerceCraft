import React from "react";

import { cn } from "@/lib/utils";
import { Title } from "./Title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={30000}
            defaultValue={0}
          />
          <Input type="number" min={0} max={30000} placeholder="30000" />
        </div>
        <RangeSlider min={0} max={30000} step={10} value={[0, 5000]} />
      </div>
      <CheckboxFiltersGroup
        title="Ингридиенты"
        className="mt-5"
        limit={6}
        defaultItems={[
          { text: "Сырный соус", value: "1" },
          { text: "Моццарелла", value: "2" },
          { text: "Чеснок", value: "3" },
          { text: "Соленые огурчики", value: "4" },
          { text: "Красный лук", value: "5" },
          { text: "Томаты", value: "6" },
        ]}
        items={[
          { text: "Сырный соус", value: "1" },
          { text: "Моццарелла", value: "2" },
          { text: "Чеснок", value: "3" },
          { text: "Соленые огурчики", value: "4" },
          { text: "Красный лук", value: "5" },
          { text: "Томаты", value: "6" },
          { text: "Колбаски", value: "7" },
          { text: "Пармезан", value: "8" },
        ]}
      />
      <div className="mt-5 border-t border-t-neutral-100 py-6">
        <p className="font-bold mb-3">Тип теста:</p>
        <div className="flex flex-col gap-3">
          <FilterCheckbox text="Традиционное" value="3" />
          <FilterCheckbox text="Тонкое" value="4" />
        </div>
      </div>
    </div>
  );
};
