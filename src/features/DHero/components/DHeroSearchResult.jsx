import { useLocation } from "react-router-dom";
import Container from "../../../layouts/Container";
import Title from "../../../layouts/Title";
import { Hero } from "../index";

export default function DHeroSearchResult() {
  const { state } = useLocation();

  return (
    <>
      <Title color="black" title="ডেলিভাই হিরো" />
      <Container>
        <div className="my-8 flex flex-col gap-4 w-fit max-w-full mx-auto">
          {state?.heros.map((hero) => (
            <Hero details={hero} key={hero.id} />
          ))}
        </div>
      </Container>
    </>
  );
}
