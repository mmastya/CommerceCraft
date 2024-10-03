import { cn } from "@/lib/utils";

type Variant = {
  name: string;
  value: string;
  disabled?: boolean;
};

interface Props {
  items: readonly Variant[];
  defaultValue?: string;
  onClick?: (value: Variant["value"]) => void;
  selectedValue?: Variant["value"];
  className?: string;
}

export const GroupVariants: React.FC<Props> = ({
  items,
  onClick,
  selectedValue,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex justify-between bg-[#F3F3F7] rounded-3xl p-1 select-none",
        className
      )}
    >
      {items.map((item) => {
        return (
          <button key={item.name}  className={cn(
            'flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-400 text-sm',
            {
              'bg-white shadow': item.value === selectedValue,
              'text-gray-500 opacity-50 pointer-events-none': item.disabled,
            },
          )}>
            {item.name}
          </button>
        );
      })}
    </div>
  );
};
