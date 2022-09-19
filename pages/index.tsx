import PropTypes from 'prop-types';
import React from 'react';
import Container from '../components/Container';
import { useRouter } from 'next/router';
import IndexHeader from '../components/header/IndexHeader';
import Statistics from '../features/sections/Statistics';
import GetStickerCTA from '../features/sections/GetStickerCTA';
import FollowUs from '../features/sections/FollowUs';
import SentenceSummary from '../features/sections/SentenceSummary';
import { getStickers } from '../services/repository/getStickers';
import { getInstagram } from '../services/repository/getInstagram';

export async function getStaticProps() {
  const stickers = await getStickers();
  const instagram = await getInstagram();

  return {
    props: {
      stickers: stickers,
      instagram: instagram,
    },
    revalidate: 3,
  };
}

Index.propTypes = {
  stickers: PropTypes.arrayOf(PropTypes.object),
  instagram: PropTypes.arrayOf(PropTypes.object),
};

export default function Index({ stickers, instagram }) {
  const router = useRouter();

  return (
    <>
      <Container wrapperClass="header-wrapper index-wrapper">
        <IndexHeader
          title={
            router.locale === 'en'
              ? 'One sticker to reduce waste'
              : '1枚のステッカーでゼロウェイストの社会へ'
          }
          subtitle={
            router.locale === 'en'
              ? 'Free your mailbox from unsolicited flyers with this real-life spam filter!'
              : '我々のゴールは、あなたのポストを望んでいないチラシから解放することです。'
          }
          buttonPath={'#sticker'}
          buttonText={
            router.locale === 'en' ? 'Get a sticker' : 'ステッカーをゲット'
          }
          img={'/mailbox-split-green.png'}
        />
      </Container>

      {/* 1 Sentence Summary */}
      <Container wrapperClass="d-flex align-items-center bg-1">
        <SentenceSummary />
      </Container>

      {/* Ecotowari Positive Impact */}
      <Container wrapperClass="d-flex align-items-center bg-2 ">
        <Statistics stickers={stickers} />
      </Container>

      {/* CTA */}
      <Container wrapperClass="header-wrapper d-flex align-items-center bg-3">
        <GetStickerCTA />
      </Container>

      {/* Socials */}
      <Container wrapperClass="d-flex align-items-center bg-2">
        <FollowUs instagram={instagram} />
      </Container>

      {/* <Container wrapperClass="d-flex align-items-center bg-2"><LatestNews posts={posts} /></Container> */}
    </>
  );
}
