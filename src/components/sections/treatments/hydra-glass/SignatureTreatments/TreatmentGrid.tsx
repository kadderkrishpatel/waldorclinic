import TreatmentCard from "./TreatmentCard";
import type { TreatmentCard as TreatmentCardType } from "./types";

interface Props {
  cards: TreatmentCardType[];
}

export default function TreatmentGrid({ cards }: Props) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {cards.map((card, index) => {
        const isLastUnpaired =
          index === cards.length - 1 && cards.length % 2 !== 0;

        return (
          <div key={card.id} className={isLastUnpaired ? "lg:col-span-2" : ""}>
            <TreatmentCard card={card} />
          </div>
        );
      })}
    </div>
  );
}
