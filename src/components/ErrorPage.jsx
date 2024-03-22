import { useNavigate, useRouteError } from "react-router-dom";
import Container from "../layouts/Container";

const { host, protocol } = location;
const domain = host.split(".").slice(1).join(".");

function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  const navigate = useNavigate();

  return (
    <Container>
      <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 sm:min-h-[calc(100vh-6rem)]">
        <h1 className="text-center text-3xl lg:text-4xl">
          {error.status} - {error.statusText}
        </h1>
        <p className="max-w-xl text-center text-gray-600">
          The page/service you are looking for might have been removed had its
          name changed or is temporarily unavailable.
        </p>
        <div className="space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="rounded-md bg-secondary px-4 py-2 font-semibold text-white hover:bg-accent"
          >
            Previous Page
          </button>
          <a href={`${protocol}//${domain}`}>
            <button className="rounded-md bg-secondary px-4 py-2 font-semibold text-white hover:bg-accent">
              Home Page
            </button>
          </a>
        </div>
      </div>
    </Container>
  );
}

export default ErrorPage;
