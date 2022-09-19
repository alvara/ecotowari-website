import React from 'react';
import { useRouter } from 'next/router';
import Container from '../components/Container';
import HeroHeader from '../components/header/HeroHeader';

// view all blog posts
const Mission = () => {
  const router = useRouter();
  return (
    <>
      <Container wrapperClass="header-wrapper">
        <HeroHeader title={'About us'} />
      </Container>
      <Container wrapperClass="d-flex align-items-center" title="Our values">
        <p>
          Climate action is often seen as too big a task, something only
          governments or large corporations can undertake. At ecotowari, we
          believe every action matters. The multiplication of these individual
          actions can and will have a tangible impact and lead to sustainable
          change.
        </p>
        <p>
          Our initiative gives people an easy tool to tackle the waste problem,
          one flyer at a time. Ultimately, we hope for local governments and
          partner organizations to amplify this kind of initiative so we can
          collectively rise up to the challenges embodied in the United
          Nations&apos; Sustainable Development Goals.
        </p>
        <p>
          We also often hear that climate action implies sacrifices. It&apos;s
          just not true! Less can be more, especially when it comes to waste.
          Less waste, more realness!{' '}
        </p>
        <p>Let&apos;s all do what we can!</p>
      </Container>
      {/* SDG */}
      {/* <Container
        // TODO: refactor so bg-overlay is option bg-1, bg-2, and bg-3 within global container component
        wrapperClass="header-wrapper d-flex align-items-center bg-3 text-center"
        title="SDGs"
      >
        [SDG Information will go here as cards]
        <div className="bg-overlay"></div>
      </Container> */}
      {/* <Container
        wrapperClass="d-flex align-items-center bg-2 text-center"
        title="Meet the team"
      >
        <p>
          [Avatar circle with profiles of each person with summary of each team
          member]
        </p>
      </Container> */}
      <Container wrapperClass="d-flex align-items-center" title="Meet inigochi">
        <p>
          Inigo can be written as 1 2 5 in Japanese. Inigo’s parents picked this
          name in relation with the target 12.5 of the United Nations’
          Sustainable Development Goal 12 for sustainable consumption and
          production patterns. Target 12.5: “by 2030, substantially reduce waste
          generation through prevention, reduction, recycling, and reuse”.{' '}
        </p>
        <p>
          That SDG 12.5 target of waste reduction is ecotowari’s raison d’être
          so it’s only fitting that the mascot is named after it.
        </p>
        <p>
          Inigochi is Inigo’s cute nickname. We only want the best for Inigochi
          and the best would be for Inigochi to be adopted by as many people and
          families across Japan as possible. Share the love!
        </p>
      </Container>

      <Container
        wrapperClass="d-flex align-items-center bg-2"
        title="to our dear supporters"
      >
        <p>
          Our heartfelt gratitude to Ibaraki Kiyotaka from Studio Lucky for
          designing the sticker and the ecotowari mascot. Dear Lucky sensei,
          thank you for your friendship, your trust and for giving Inigochi a
          life! Follow Lucky Studio’s beautiful artwork here:
          <br />
          <a target={'_blank'} rel="noreferrer" href="https://lucky-lucky.jp/">
            https://lucky-lucky.jp/
          </a>
        </p>
        <p>
          Our special thanks go out to Aska for bearing with Rémy’s 1,000 ideas
          for names and mascots, providing always great input and making phone
          calls so we could navigate statistics and data to gain insight into
          the world of papermaking and flyers.
        </p>
        <p>
          We also want to aknowledge the contributions of Ayumi and Chie who
          shared with us their insight on marketing and communication at a time
          where ecotowari was nothing but a tiny seed.
        </p>
        <p>
          And last but definitely not least, a massive thank you to all the
          early supporters who gathered flyers so we could have real-world data
          on flyer distribution and for sporting the ecotowari sticker on their
          mailbox before it was cool!{' '}
        </p>
      </Container>
    </>
  );
};

export default Mission;
