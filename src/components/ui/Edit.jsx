import { Button } from "@/components/ui/button";

export default function Edit({ onClick }) {
  return (
    <Button variant="link" onClick={onClick}>
      Edit
    </Button>
  );
}
