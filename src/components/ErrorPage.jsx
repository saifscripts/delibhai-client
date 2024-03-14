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
      <div className="min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-6rem)] flex flex-col gap-4 justify-center items-center">
        <h1 className="text-3xl lg:text-4xl text-center">
          {error.status} - {error.statusText}
        </h1>
        <p className="text-center text-gray-600 max-w-xl">
          The page/service you are looking for might have been removed had its
          name changed or is temporarily unavailable.
        </p>
        <div className="space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="bg-secondary px-4 py-2 font-semibold text-white rounded-md hover:bg-accent"
          >
            Previous Page
          </button>
          <a href={`${protocol}//${domain}`}>
            <button className="bg-secondary px-4 py-2 font-semibold text-white rounded-md hover:bg-accent">
              Home Page
            </button>
          </a>
        </div>
      </div>
    </Container>
  );
}

export default ErrorPage;
