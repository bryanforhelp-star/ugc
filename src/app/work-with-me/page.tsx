import { SITE } from "@/lib/site";

export const metadata = { title: "Work with me" };

const EMAIL = SITE.workWithMe.email;

export default function WorkWithMePage() {
  return (
    <div className="page">
      <div className="wrap">
        <h1 className="page-title">work with me</h1>

        <section className="work-section">
          <h2>brands &amp; partnerships</h2>
          <p className="work-block">
            for brand deals, collaborations, sponsored content, or partnerships,
            email:
          </p>
          <a className="work-email" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </section>

        <section className="work-section">
          <h2>want to work together?</h2>
          <p className="work-block">
            for ai workflows, marketing, content, creative projects, or anything
            i&apos;m building, reach me here:
          </p>
          <a className="work-email" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </section>
      </div>
    </div>
  );
}
