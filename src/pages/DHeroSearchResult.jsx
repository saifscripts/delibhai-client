import heros from "../data/heros";
import { Hero } from "../features/DHero/index";
import Container from "../layouts/Container";
import Title from "../layouts/Title";

export default function DHeroSearchResult() {
  return (
    <>
      <Title color="black" title="ডেলিভাই হিরো" />
      <Container>
        <div className="my-8 flex flex-col gap-4 w-fit max-w-full mx-auto">
          {heros.map((hero) => (
            <Hero details={hero} key={hero.id} />
          ))}
        </div>
      </Container>
    </>
  );
}
