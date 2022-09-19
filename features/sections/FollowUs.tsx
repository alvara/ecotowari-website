import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { IInstagram } from '../../services/type';

interface IFollowUs {
  instagram: IInstagram[];
}
export default function FollowUs({ instagram }: IFollowUs) {
  console.log('INSTAGRAM: ', instagram);
  const router = useRouter();
  return (
    <>
      <div className="row">
        <h2 className="text-center">Follow us!</h2>

        <div className="text-center mb-4">
          <Link href="https://www.instagram.com/ecotowari/">
            <a target="_window">
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                className="social-icon"
              />
            </a>
          </Link>

          <Link href={`https://www.facebook.com/ecotowari`}>
            <a target="_window">
              <FontAwesomeIcon
                icon={faFacebook}
                size="lg"
                className="social-icon"
              />
            </a>
          </Link>
        </div>
      </div>
      <div className="row row-cols-2 row-cols-md-4">
        {instagram.map((item) => (
          <div key={item.id} className="col">
            <div style={{ marginBottom: '2rem' }}>
              <Link href={item.url} passHref={true}>
                <a>
                  <Image
                    src={item.image[0].thumbnails.large.url}
                    width="250"
                    height="250"
                    layout="responsive"
                    objectFit="scale-down"
                    alt="test"
                    className=""
                    quality={30}
                  />
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
