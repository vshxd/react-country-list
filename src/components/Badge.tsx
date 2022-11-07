import { Color } from "../types/colors";
import { BadgeLabel } from "../types/badgeLabels";

interface IBadge {
  label: BadgeLabel;
  count: number;
  color: Color;
}

export const Badge = ({ label, count, color }: IBadge) => {
  return (
    <span className={`badge bg-${color} col-2 py-2`}>
      {label}: {count}
    </span>
  );
};
