import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useFetchData } from "../../../api/api";
import Container from "../../../layouts/Container";
import Title from "../../../layouts/Title";
import { Hero } from "../index";

export default function DHeroSearch() {
  const [heros, setHeros] = useState([]);
  const [searchParams] = useSearchParams();
  const { fetchData } = useFetchData();

  useEffect(() => {
    const _searchParams = Object.fromEntries([...searchParams]);
    fetchData("/v1/user/heros", _searchParams).then((data) => {
      if (data?.data?.success) {
        setHeros(data.data.data);
        localStorage.setItem("heroSearchParams", JSON.stringify(_searchParams));
      }
    });
  }, [searchParams]);

  return (
    <>
      <Title color="black" title="ডেলিভাই হিরো" />
      <Container>
        <div className="my-8 flex flex-col gap-4 w-fit max-w-full mx-auto">
          {heros?.map((hero) => (
            <Hero details={hero} key={hero.id} />
          ))}
        </div>
      </Container>
    </>
  );
}
