import React from 'react';
import { useRouter } from 'next/router';
import Container from '../components/Container';
import HeroHeader from '../components/header/HeroHeader';
import GetStickerCTA from '../features/sections/GetStickerCTA';
import Image from 'next/image';
import { StatisticCard } from '../components/card/StatisticCard';
import {
  co2Saved,
  electricitySaved,
  flyersReduced,
  totalStickers,
  waterSaved,
} from '../utils/calculations';
import {
  faCloud,
  faHouseUser,
  faLightbulb,
  faTree,
  faWater,
} from '@fortawesome/free-solid-svg-icons';

import { getStickers } from '../services/repository/getStickers';

export async function getStaticProps() {
  const stickers = await getStickers();

  return {
    props: {
      stickers: stickers,
    },
    revalidate: 3,
  };
}

// view all blog posts
const Mission = ({ stickers }) => {
  const router = useRouter();
  return (
    <>
      <Container wrapperClass="header-wrapper">
        <HeroHeader title={'The Environment is in trouble'} />
      </Container>
      <Container wrapperClass="d-flex align-items-center  bg-2" title="How so?">
        <p>
          Surveys have shown that most flyers are thrown away without being
          read. Apart from the annoyance of finding a lot of unsolicited flyers
          mixed with important mail, how are flyers bad for the environment?
          Below you can see the impact of paper manufacturing.
        </p>
        {/* TODO: add environmental section */}
        {/* <EnvironmentImpact /> */}
        <p>
          As no official data is available on flyers, please note that the above
          only covers the paper manufacturing side of the operations. Printing
          requires further electricity and chemicals. Also, if thrown in the
          general bin as burnable trash, flyers will not be recycled. Recycling
          or burning also requires additional energy.
        </p>
      </Container>
      <Container
        wrapperClass="d-flex align-items-center"
        title="The lifecycle of flyers"
      >
        <p>
          The overall environmental footprint of a flyer can be decomposed as:
          <ul>
            <li>Mining and extraction of raw materials</li>
            <li>
              Transport from the extraction place to the paper processing
              factory
            </li>
            <li>Paper manufacturing</li>
            <li>Transport of that paper to printers</li>
            <li>Printing</li>
            <li>
              Transport of the flyer from the printer to the distribution center
            </li>
            <li>Transport from the distributor to your mailbox</li>
            <li>Recycling or incinerating the flyers which requires energy</li>
          </ul>
        </p>
        <div style={{ position: 'relative' }}>
          {router.locale === 'en' ? (
            <Image
              src="/lifecycle_en.png"
              layout="responsive"
              width={1000}
              height={900}
              objectFit="contain"
            />
          ) : (
            <Image
              src="/lifecycle_jp.png"
              layout="responsive"
              width={1000}
              height={900}
              objectFit="contain"
            />
          )}
        </div>
      </Container>

      {/* <Container
        wrapperClass="d-flex align-items-center bg-2"
        title="ecotowari in Numbers"
      >
        <p>
          A single ecotowari sticker helps reduce waste generated by brochures
          by 85 grammes per week on average (tests done in the Tokyo region). It
          might not seem like much in itself but imagine the impact that all the
          ecotowari stickers together are having... No need to imagine it! We
          have laid it out below in our real-time impact generator ↓
        </p>
        <div className="row justify-content-center align-items-center pt-4">
          <div className="col-md-4">
            <StatisticCard
              faIcon={faHouseUser}
              statistic={totalStickers(stickers)}
              description={
                router.locale === 'en'
                  ? 'Stickers in place'
                  : 'ステッカー使用数'
              }
            />
          </div>
          <div className="col-md-4">
            <StatisticCard
              faIcon={faTree}
              statistic={flyersReduced(stickers)}
              unit="kg"
              description={
                router.locale === 'en'
                  ? 'Paper waste reduced'
                  : '削減されたチラシ'
              }
            />
          </div>
          <div className="col-md-4">
            <StatisticCard
              faIcon={faWater}
              statistic={waterSaved(stickers)}
              unit="L"
              description={
                router.locale === 'en' ? 'Water saved' : 'リットルの水を節約'
              }
            />
          </div>
          <div className="col-md-4">
            <StatisticCard
              faIcon={faLightbulb}
              statistic={electricitySaved(stickers)}
              unit="KWh"
              description={
                router.locale === 'en' ? 'Electricity saved' : '省エネルギー'
              }
            />
          </div>
          <div className="col-md-4">
            <StatisticCard
              faIcon={faCloud}
              statistic={co2Saved(stickers)}
              unit="kg-CO2e"
              description={
                router.locale === 'en' ? 'CO₂ saved' : '削減されたCO₂'
              }
            />
          </div>
        </div>
      </Container> */}
      {/* CTA */}
      <Container wrapperClass="header-wrapper d-flex align-items-center bg-3">
        <GetStickerCTA />
      </Container>
    </>
  );
};

export default Mission;
