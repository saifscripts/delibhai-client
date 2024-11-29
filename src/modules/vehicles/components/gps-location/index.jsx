import Map from "../../../../components/Map";
import Section from "../../../../components/section/Section";
import SectionTitle from "../../../../components/section/SectionTitle";
import { useGeolocation } from "../../../../contexts/location.context";
import Container from "../../../../layouts/Container";

function GPSLocation() {
  const { error, location, isLoading } = useGeolocation();

  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-xl">
          <SectionTitle>আপনার GPS লোকেশন</SectionTitle>
          <Map location={location} isLoading={isLoading} error={error} />
        </div>
      </Container>
    </Section>
  );
}

export default GPSLocation;
