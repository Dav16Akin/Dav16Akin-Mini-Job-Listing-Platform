import { LoaderCircle } from "lucide-react";
import { Button } from "../ui/button";


interface ButtonProps {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
}

const SubmitButton = ({ isLoading, className, children }: ButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={className ?? "w-full"}
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <LoaderCircle className="animate-spin" />
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
