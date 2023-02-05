import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDroplet,
  faLightbulb,
  faFlask,
  faTree,
} from '@fortawesome/free-solid-svg-icons';

EnvironmentImpact.propTypes = {
  data: PropTypes.object,
};

export default function EnvironmentImpact({ data }) {
  const router = useRouter();

  return (
    <>
      <div className="row">
        {/* <div className="offset-md-2 col-md-8 text-center">
          <span className="text-center preTitle">Why ecotowari</span>
          <h2>{data.title[router.locale]}</h2>
          <pre className="text-start">{data.content[router.locale]}</pre>
        </div> */}
      </div>
      <div className="row">
        <div className="col-md-6 p-5 bg-primary">
          <div className="d-flex flex-column align-items-center text-white">
            <div className="w-25">
              <FontAwesomeIcon
                icon={faDroplet}
                size="lg"
                className="environment-icon"
              />
            </div>
            <h4 className="text-white">
              1kg of paper requires up to 100L of water to make.
            </h4>
          </div>
        </div>
        <div className="col-md-6 p-5 border">
          <div className="d-flex  flex-column align-items-center textiwhite">
            <div className="w-25">
              <FontAwesomeIcon
                icon={faLightbulb}
                className="environment-icon text-primary"
              />
            </div>
            <h4 className="text-primary">
              It takes as much electricity to make 1kg of paper as it does to
              run a LED light for 631 hours.
            </h4>
          </div>
        </div>
        <div className="col-md-6 p-5 border">
          <div className="d-flex  flex-column align-items-center textiwhite">
            <div className="w-25">
              <FontAwesomeIcon
                icon={faFlask}
                className="environment-icon text-primary"
              />
            </div>
            <h4 className="text-primary">
              About 200 individual chemicals are typically used in the
              papermaking process.
            </h4>
          </div>
        </div>
        <div className="col-md-6 p-5 bg-primary">
          <div className="d-flex  flex-column align-items-center textiwhite">
            <div>
              <FontAwesomeIcon
                icon={faTree}
                className="environment-icon text-white"
              />
            </div>
            <h4 className="text-white">
              It takes as much electricity to make 1kg of paper as it does to
              run a LED light for 631 hours.
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
