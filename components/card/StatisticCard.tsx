import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

export interface IStatisticCardProps {
  faIcon: IconDefinition;
  description: string;
  statistic: number;
  unit?: string; // kg, L, etc.
}

export function StatisticCard({
  faIcon,
  statistic,
  unit,
  description,
}: IStatisticCardProps) {
  return (
    <>
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <>
            <>
              <div className="card text-center">
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
                  {isVisible ? <CountUp end={statistic} /> : null}
                  {unit}
                </h3>
                <h6>{description}</h6>
              </div>
            </>
          </>
        )}
      </VisibilitySensor>
    </>
  );
}
