import Link from "next/link";
import Heading from "./Heading";
import Feature from "./Feature";

function OtherSolutions({ content }) {
  return (
    <section className="container mx-auto">
      <Heading type="h3" style=" !text-black-800">
        {content.otherSolutions.headline}
      </Heading>
      <div className="flex items-center justify-center gap-8 flex-wrap mb-10  ">
        {content.otherSolutions.features.map((feature) => (
          <Link href={`/solutions/${feature.link}`} key={feature.name}>
            <Feature name={feature.name} src={feature.icon} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default OtherSolutions;
