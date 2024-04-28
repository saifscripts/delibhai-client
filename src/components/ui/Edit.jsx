export default function Edit({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="hover:bg-light active:bg-light rounded-md px-2 py-1 text-secondary"
    >
      Edit
    </button>
  );
}
