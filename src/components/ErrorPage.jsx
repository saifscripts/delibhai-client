import { useNavigate, useRouteError } from "react-router-dom";
import Container from "../layouts/Container";

const { host, protocol } = location;
const domain = host.split(".").slice(1).join(".");

function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <Container>
      <div className="min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-6rem)] flex flex-col justify-center items-center">
        <h1 className="text-3xl lg:text-4xl text-center">
          {error.status} - {error.statusText}
        </h1>
        <div className="space-x-4 mt-6">
          <button
            onClick={() => navigate(-1)}
            className="bg-secondary px-4 py-2 font-bold text-white rounded-md hover:bg-accent"
          >
            Back
          </button>
          <a
            href={`${protocol}//${domain}`}
            className="bg-secondary px-4 py-2 font-bold text-white rounded-md hover:bg-accent"
          >
            Home Page
          </a>
        </div>
      </div>
    </Container>
  );
}

export default ErrorPage;
