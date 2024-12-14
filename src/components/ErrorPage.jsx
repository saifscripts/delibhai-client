import { Button } from "@/components/ui/button";
import { useNavigate, useRouteError } from "react-router-dom";
import Container from "../layouts/Container";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);
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
          <Button onClick={() => navigate(-1)}>Previous Page</Button>
          <Button onClick={() => navigate("/")}>Home Page</Button>
        </div>
      </div>
    </Container>
  );
}

export default ErrorPage;
