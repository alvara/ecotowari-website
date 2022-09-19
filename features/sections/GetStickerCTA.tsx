import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Image from 'next/image';

GetStickerCTA.propTypes = {
  data: PropTypes.object,
};

export default function GetStickerCTA({ data }) {
  const router = useRouter();

  const url =
    'https://ecotowari.us14.list-manage.com/subscribe/post?u=fb888509b6f45d3e61ff06e47&amp;id=5ec65eaa39';

  return (
    <div id="sticker" className="row">
      <h2 className="text-center pb-0 mb-0">
        {router.locale === 'en' ? 'You can help' : 'ステッカーの入手方法'}
      </h2>
      <div className="offset-md-2 col-md-8">
        <div className="my-5">
          <Image
            src="/stickerv1.png"
            width="500"
            height="100"
            layout="responsive"
            objectFit="contain"
            alt="Sticker Preview"
            quality={30}
            priority
          />
        </div>
        <pre>
          {router.locale === 'en'
            ? `If you feel like your mailbox is being flooded with flyers and want to do yourself and the planet a favour, look no further. 

Be an actor of change, adopt an ecotowari sticker and join a growing movement for climate action!

We will soon launch a crowdfunding campaign where you will be able to get your hands on the ecotowari stickers so stay tuned for more information. Leave your email below and you will be the first to know when it launches in Q2 2022.`
            : `あなたのポストが不要なチラシで溢れていて、あなた自身、そして地球のためにアクションを起こしたい方、ecotowariステッカーが解決します！

2022年前半にクラウドファンディングを開始予定で、リターンとしてecotowariステッカーをお送りします。

詳細はメールにてアップデートしますので、ご希望の方は下記フォームにメールアドレスをお送りください。`}
        </pre>
        <div className="text-center mailingList">
          {/*  TODO: implement airtable mailing list  */}
          {/* <MailchimpSubscribe url={url} /> */}
        </div>
      </div>
      <div className="bg-overlay"></div>
    </div>
  );
}
