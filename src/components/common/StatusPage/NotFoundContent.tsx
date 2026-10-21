import StatusPage from "./StatusPage";

/** The 404 screen itself, without any site layout around it. */
export default function NotFoundContent() {
  return (
    <StatusPage
      code="404"
      eyebrow="Page not found"
      heading={{ before: "This page has", highlight: "drifted away" }}
      description="The page you're looking for may have moved or no longer exists. Let's guide you back to glowing, healthy skin."
      actions={[
        { label: "Back to home", href: "/" },
        {
          label: "Book a consultation",
          href: "/contact-us",
          variant: "secondary",
        },
      ]}
      showQuickLinks
    />
  );
}
