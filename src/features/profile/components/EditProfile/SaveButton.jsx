import { Button } from "@/components/ui/button";
import { useFormContext } from "react-hook-form";

export default function SaveButton({ isLoading }) {
  const {
    formState: { isSubmitting },
  } = useFormContext();
  return (
    <Button
      type="submit"
      className="mt-4 w-full"
      disabled={isSubmitting || isLoading}
    >
      সংরক্ষণ করুন
    </Button>
  );
}
