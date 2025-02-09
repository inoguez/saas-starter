import React from 'react';

export default function RealitaLogo({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width || '36'}
      height={height || '40'}
      viewBox='0 0 36 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.4726 0.589251L33.9743 10.0963C34.8711 10.684 35.4111 11.6841 35.4111 12.7563V31.7702C35.4111 32.8424 34.8711 33.8424 33.9743 34.4303L26.3773 39.4107C25.4 40.0514 24.15 40.1045 23.1218 39.5492C22.0936 38.9937 21.4528 37.9193 21.4528 36.7507V19.0009L17.7288 16.5595L14.0047 19.0009V36.7507C14.0047 37.9193 13.3639 38.9937 12.3357 39.5492C11.3075 40.1045 10.0575 40.0514 9.08023 39.4107L1.48323 34.4303C0.586585 33.8424 0.0463867 32.8424 0.0463867 31.7702V12.7563C0.0463867 11.6841 0.586585 10.684 1.48323 10.0963L15.9849 0.589251C17.0438 -0.104946 18.4137 -0.104946 19.4726 0.589251ZM17.7288 3.2493L3.22705 12.7563V31.7702L10.824 36.7507V17.2828L17.7288 12.7563L24.6335 17.2828V36.7507L32.2305 31.7702V12.7563L17.7288 3.2493Z'
        fill='#00BB77'
      />
    </svg>
  );
}
