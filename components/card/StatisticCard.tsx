import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCountUp } from 'react-countup';

export interface IStatisticCardProps {
  id: string;
  faIcon: IconDefinition;
  description: string;
  statistic: number;
  unit?: string; // kg, L, etc.
}

export function StatisticCard({
  id,
  faIcon,
  statistic,
  unit,
  description,
}: IStatisticCardProps) {
  //  configure countups
  useCountUp({
    ref: id,
    end: Math.round(statistic),
    enableScrollSpy: true,
    scrollSpyDelay: 150,
  });

  return (
    <div className="card">
      <FontAwesomeIcon
        icon={faIcon}
        size="lg"
        className="circle-icon"
        style={{
          width: '5rem',
          height: '5rem',
        }}
      />

      <h3 className="text-primary">
        <span id={id} /> {unit}
      </h3>
      <h6>{description}</h6>
    </div>
  );
}
