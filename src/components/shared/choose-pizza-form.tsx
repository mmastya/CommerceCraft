import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({ className }) => {
  return <div className={cn("", className)}>Pizza Form</div>;
};
