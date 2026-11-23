import type { Metadata } from "next";
import {
  Benefits,
  CocktailMenu,
  Faq,
  FindCocktail,
  IncludedStrip,
  Introduction,
  MicroneedlingHero,
  Myths,
  ScalpBlock,
  SessionSteps,
  Team,
  WhyRightFit,
} from "@/src/components/sections/treatments/microneedling";
// Existing trust bar (1000+ clients, 4.9 Google, 15+ years), reused as is.
import {
  BeforeAfter,
  ServiceStats,
  SuccessStories,
} from "@/src/components/sections/treatments/hydra-glass";
import ServiceSchema from "@/src/components/seo/ServiceSchema";
import {
  cocktailCollections,
  microneedlingPageMeta,
} from "@/src/components/sections/treatments/microneedling/Microneedling.data";

export const metadata: Metadata = {
  title: microneedlingPageMeta.title,
  description: microneedlingPageMeta.description,
  alternates: { canonical: microneedlingPageMeta.path },
};

// One Service offer per treatment on the menu, with name and GBP price.
const offers = cocktailCollections.flatMap((collection) =>
  collection.groups.flatMap((group) =>
    group.rows.map((row) => ({
      name: row.title,
      price: row.price,
      description: row.description,
    })),
  ),
);

/**
 * /treatments/microneedling
 *
 * Waiting on the client: microneedling before and after images and three
 * microneedling reviews. The slider and the Success stories section currently
 * show the HydraGlass content as a stand-in.
 * The closing CTA is the site footer, registered for this route in
 * app/(website)/layout.tsx.
 */
export default function MicroneedlingPage() {
  return (
    <>
      <ServiceSchema
        name="WALDOR Microneedling Cocktail Menu"
        description={microneedlingPageMeta.description}
        offers={offers}
      />
      <MicroneedlingHero />
      <Introduction />
      <SessionSteps />
      <CocktailMenu />
      <Myths />
      <FindCocktail />
      <IncludedStrip />
      <ScalpBlock />
      <ServiceStats />
      {/* TODO: temporary HydraGlass slider. Swap for microneedling results once supplied. */}
      <BeforeAfter />
      <WhyRightFit />
      <Benefits />
      <Team />
      {/* TODO: temporary HydraGlass reviews. Swap for three microneedling reviews once supplied. */}
      <SuccessStories />
      <Faq />
    </>
  );
}
