import Container from "../../layouts/Container";
import Section from "../section/Section";
import SectionTitle from "../section/SectionTitle";

export default function SocialLinks() {
  return (
    <Section>
      <Container className="">
        <div className="mx-auto max-w-xl">
          <SectionTitle>যোগাযোগ করুন</SectionTitle>
          <div className="flex h-4 items-center justify-center gap-4"></div>
        </div>
      </Container>
    </Section>
  );
}
