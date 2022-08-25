import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

// Define Proptypes for PortfolioItem Component
HeroHeader.propTypes = {
  preTitle: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  date: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  img: PropTypes.string,
  buttonPath: PropTypes.string,
  buttonText: PropTypes.string,
  textAlign: PropTypes.string,
};

export default function HeroHeader({
  preTitle,
  title,
  subtitle,
  date,
  tags = [],
  img,
  textAlign = 'center', // align text to center or left. left by default
  buttonPath = '/',
  buttonText,
}) {
  return (
    <div
      className={`row header justify-content-center align-items-center text-center flex-column-reverse flex--column ${
        textAlign === 'center' ? 'text-md-center' : 'text-md-start'
      }`}
    >
      <div
        className={`${
          textAlign === 'center' ? 'col-md-12' : 'col-offset-1 col-md-5'
        }`}
      >
        {preTitle && <span className="preTitle">{preTitle}</span>}

        {title && <h1 style={{ marginBottom: 0 }}>{title}</h1>}

        {subtitle && <pre>{subtitle}</pre>}

        {date && <p>{new Date(date).toDateString()}</p>}

        {tags.length > 0 &&
          tags.map((tag) => (
            <span className="pill mini" key={tag}>
              {tag}
            </span>
          ))}

        {buttonPath && buttonText && (
          <Link href={buttonPath} passHref>
            <button className="btn mb-3">
              {buttonText} <span className="btn-carrot">›</span>
            </button>
          </Link>
        )}
      </div>
      <div className="col-md-5">
        {img && (
          <Image
            src={img}
            width="550"
            height="300"
            objectFit={'scale-down'}
            alt="Background"
            quality={10}
            priority={true}
          />
        )}
      </div>
      <div className="bg-overlay"></div>
    </div>
  );
}
