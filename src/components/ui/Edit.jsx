import { SlidersHorizontal } from 'lucide-react';

export default function Edit({ onClick }) {
  return (
    <button
      className="flex text-sm items-center gap-2 text-primary hover:underline"
      onClick={onClick}
    >
      <SlidersHorizontal size={12} />
      Edit
    </button>
  );
}
