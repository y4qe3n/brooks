import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How MrBrooksDigital Marketing handles information submitted through this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="privacy-page">
      <SiteHeader />
      <main>
        <section className="privacy-hero">
          <div className="section-shell">
            <p className="eyebrow eyebrow-light">Clear by design</p>
            <h1>Privacy, without the small-print energy.</h1>
            <p>
              This page explains what information the website collects through its enquiry form and how that information is used. It should be reviewed with official business and legal details before launch.
            </p>
          </div>
        </section>
        <section className="section-shell privacy-content">
          <aside className="privacy-index">Privacy policy · Website enquiries</aside>
          <div className="privacy-copy">
            <article>
              <h2>Information collected</h2>
              <p>
                When you submit the enquiry form, the website collects your full name, business name, email address, selected service, and message. A phone number and project budget may also be provided voluntarily. The form records the time of submission.
              </p>
            </article>
            <article>
              <h2>How information is used</h2>
              <p>
                Enquiry information is used to understand your request, respond to you, discuss relevant services, and maintain an appropriate record of the conversation. It is not used to claim consent for unrelated marketing.
              </p>
            </article>
            <article>
              <h2>Storage and retention</h2>
              <p>
                Form submissions are stored in the website&apos;s secured application database. Information should be retained only for as long as reasonably necessary to respond to the enquiry, manage any resulting business relationship, and meet applicable obligations. A specific retention schedule must be confirmed by the business before public launch.
              </p>
            </article>
            <article>
              <h2>Analytics and cookies</h2>
              <p>
                The site includes an optional integration point for privacy-focused Plausible Analytics. It is inactive unless an official analytics domain is configured. If analytics or other tracking tools are enabled later, this policy and any consent controls should be reviewed before deployment.
              </p>
            </article>
            <article>
              <h2>Sharing information</h2>
              <p>
                Enquiry details should only be shared with service providers or team members who need them to operate the website or respond to your request, subject to appropriate safeguards. Information is not intended to be sold.
              </p>
            </article>
            <article>
              <h2>Your choices</h2>
              <p>
                Depending on the law that applies to you, you may have rights to request access, correction, restriction, or deletion of your personal information. You may also be able to object to certain uses. Use the main website&apos;s enquiry form to make a privacy request until official privacy contact details are configured.
              </p>
            </article>
            <article>
              <h2>Business details required</h2>
              <p>
                The business&apos;s legal name, operating jurisdiction, privacy contact email, and policy effective date have not been supplied and are therefore not invented here. These items require configuration and legal review before this policy is treated as final.
              </p>
              <p><a href="/#contact">Go to the enquiry form →</a></p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
