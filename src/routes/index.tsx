import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Claim Your Airbnb Reward" },
      {
        name: "description",
        content:
          "Airbnb reward — complete a quick questionnaire and a few easy tasks to claim your reward. Available in US, UK, AU & CA.",
      },
      { property: "og:title", content: "Claim Your Airbnb Reward" },
      {
        property: "og:description",
        content: "Quick Airbnb reward — takes about 5–10 minutes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const APPLY_URL = "https://linkthem.net/aff_c?offer_id=4438&aff_id=16139";
const BRAND_LOGO_URL = "/airbnb-logo.png?v=3";

const faqs = [
  {
    q: "Do I need to provide bank details?",
    a: "No, you do not need to provide any bank details to claim your Airbnb reward.",
  },
  {
    q: "How long do the deals take?",
    a: "Most deals can be completed within 5-10 minutes. You'll receive confirmation via email within 24 hours.",
  },
  {
    q: "What kind of deals are included?",
    a: "Deals include free trials, app sign-ups, and quick surveys — all easy to complete.",
  },
];

const steps = [
  "Complete a Quick Sign-Up",
  "Complete 4-5 Quick Deals (Guided)",
  "We'll Review Your Submission And Email You Within 24hrs",
];

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <header className="w-full bg-primary">
        <div className="flex h-56 sm:h-64 items-center justify-center px-4">
          <img
            src={BRAND_LOGO_URL}
            alt="Airbnb logo"
            className="h-28 w-auto rounded-2xl sm:h-36"
            width={200}
            height={200}
            fetchPriority="high"
          />
        </div>
      </header>

      <div className="h-10 w-full bg-gradient-to-b from-primary to-background sm:h-12" />

      <div className="relative z-10 mx-auto max-w-lg px-4 pb-8 pt-8 text-center sm:px-5">
        <h1 className="text-3xl font-black leading-tight text-foreground sm:text-4xl md:text-5xl">
          Claim Your Airbnb Reward
        </h1>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Available in US, UK, AU &amp; CA
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 sm:mt-5 sm:gap-2">
          <CheckCircle className="h-5 w-5 flex-shrink-0 text-success sm:h-6 sm:w-6" />
          <span className="text-sm font-bold text-foreground sm:text-lg">
            620+ Members Approved This Month
          </span>
        </div>

        <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-primary" />

        <h2 className="mt-8 text-sm font-extrabold uppercase tracking-widest text-foreground">
          How To Qualify
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">Takes ~5–10 minutes</p>

        <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:gap-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-4 text-left shadow-sm sm:gap-4 sm:px-5 sm:py-5"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground sm:h-12 sm:w-12 sm:text-lg">
                {i + 1}
              </span>
              <span className="text-sm font-semibold text-foreground sm:text-base">
                {step}
              </span>
            </div>
          ))}
        </div>

        <a
          href={APPLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 block w-full rounded-2xl bg-primary py-5 text-center text-xl font-bold uppercase tracking-wide text-primary-foreground shadow-lg transition-opacity hover:opacity-90"
        >
          Apply Now
        </a>

        <h2 className="mt-12 text-sm font-extrabold uppercase tracking-widest text-foreground">
          Frequently Asked Questions
        </h2>

        <div className="mt-6 divide-y divide-border">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="flex w-full items-center justify-between py-4 text-left"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="font-medium text-foreground">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform ${
                    openFaq === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === i && (
                <p className="pb-4 text-left text-sm text-muted-foreground">{faq.a}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-1 pb-8">
          <div className="flex items-center gap-2">
            <img
              src={BRAND_LOGO_URL}
              alt="Airbnb logo"
              className="h-8 w-8 rounded-md"
              width={32}
              height={32}
              loading="lazy"
            />
            <span className="font-bold text-foreground">Airbnb</span>
          </div>
          <p className="text-sm text-muted-foreground">Powered by Airbnb</p>
        </div>
      </div>
    </div>
  );
}
