function ServiceNotFound() {
  const { host, protocol } = location;
  const domain = host.split(".").slice(1).join("");

  return (
    <div className="min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-6rem)] flex flex-col justify-center items-center">
      <h1 className="text-red-400 text-7xl">Service Not Found</h1>
      <a
        href={`${protocol}//${domain}`}
        className="bg-secondary px-8 py-3 mt-4 font-bold text-white rounded-md text-xl hover:bg-accent"
      >
        Go to Delibhai Home
      </a>
    </div>
  );
}

export default ServiceNotFound;
