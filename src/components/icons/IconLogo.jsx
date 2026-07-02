import { useId } from 'react';

function IconLogo({ mark = false, ...props }) {
  // Every <linearGradient> id must be unique in the document — the logo
  // renders more than once per page (sidebar + footer), so ids are
  // namespaced per instance instead of being hardcoded.
  const uid = useId();

  if (mark) {
    const gradientId = `logo-mark-${uid}`;
    return (
      <svg
        width="39"
        height="41"
        viewBox="0 0 39 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        {...props}
      >
        <path
          d="M39 30.656V41H8.89948C5.30408 41 0 35.3007 0 31.611V0H12.8737V28.163C12.8737 28.5964 14.3664 30.656 14.9575 30.656H39Z"
          fill={`url(#${gradientId})`}
        />
        <defs>
          <linearGradient
            id={gradientId}
            x1="0"
            y1="20.5"
            x2="39"
            y2="20.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF9B04" />
            <stop offset="1" stopColor="#FF7200" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  const id0 = `logo-0-${uid}`;
  const id1 = `logo-1-${uid}`;
  const id2 = `logo-2-${uid}`;
  const id3 = `logo-3-${uid}`;

  return (
    <svg
      width="129"
      height="37"
      viewBox="0 0 129 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M93.9855 15.7319V30.0092H67.609L60.5717 22.9973L60.4011 12.4403L67.609 5.36842H93.5245L87.8333 11.078L71.5298 11.131L67.2586 14.9735L67.3831 19.8717L71.4146 23.6727L85.5721 23.7972L87.3055 25.1733V21.4898H81.891C80.4618 19.7564 78.1522 18.1591 76.8222 16.4234C76.6447 16.1929 76.3773 16.1329 76.4787 15.7319H93.9855Z"
        fill={`url(#${id0})`}
      />
      <path
        d="M128.769 11.2394C128.418 8.01464 125.56 5.65889 122.43 5.37307C115.953 4.78067 108.563 5.75801 101.991 5.42839C99.7574 5.7534 97.653 7.74956 96.9684 9.84714C96.2307 12.1015 96.2399 21.5014 96.5442 24.113C96.9038 27.2225 99.5961 29.6151 102.625 30.007C109.104 29.5921 116.278 30.5694 122.672 30.0162C125.816 29.7465 128.446 27.2962 128.766 24.1337C129.066 21.151 129.091 14.199 128.769 11.2394ZM121.639 21.8448C121.515 23.2094 121.054 23.6773 119.68 23.8018C115.289 24.2006 110.303 23.4791 105.843 23.7972C104.762 23.7073 104.01 22.9005 103.886 21.8402C103.667 19.9916 103.667 14.9251 103.886 13.0788C104.036 11.8087 104.847 11.2279 106.069 11.1149C109.383 10.8106 116.135 10.8106 119.452 11.1149C119.989 11.1633 120.692 11.2924 121.093 11.6612C121.376 11.9194 121.591 12.4541 121.637 12.8437C121.881 14.8491 121.826 19.7795 121.639 21.8448Z"
        fill={`url(#${id1})`}
      />
      <path
        d="M57.8263 11.924C57.5612 8.54709 55.1755 5.72342 51.711 5.37305C45.303 4.72303 37.7932 5.80409 31.2677 5.42376C28.3748 6.06687 26.1758 8.26357 25.8255 11.267C25.4936 14.1068 25.4936 21.2686 25.8255 24.113C26.1805 27.1764 28.8681 29.7073 31.9062 30.007C38.162 30.6247 45.3653 29.5413 51.7248 30.0185C54.8482 29.6912 57.4966 27.3055 57.817 24.1337C58.1259 21.0588 58.0729 15.0473 57.8263 11.924ZM50.683 22.0684C50.5377 23.3154 49.9016 23.6958 48.7306 23.8018C45.333 24.113 38.7706 24.0853 35.3499 23.7995C33.9669 23.6842 33.3422 23.3177 33.1647 21.8402C32.9457 19.9962 32.9503 14.9251 33.167 13.0788C33.2777 12.1337 33.8309 11.4883 34.7183 11.1748C39.1393 11.3938 44.1459 10.7184 48.5001 11.1149C49.731 11.2278 50.5331 11.8179 50.683 13.0788C50.9089 14.9758 50.9042 20.1691 50.683 22.0684Z"
        fill={`url(#${id2})`}
      />
      <path
        d="M23.728 23.7926V30.0092H5.41454C3.22706 30.0092 0 26.5839 0 24.3665V5.36842H7.83252V22.2943C7.83252 22.5548 8.7407 23.7926 9.10028 23.7926H23.728Z"
        fill={`url(#${id3})`}
      />
      <defs>
        <linearGradient
          id={id0}
          x1="60.4011"
          y1="17.6888"
          x2="93.9855"
          y2="17.6888"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF9B04" />
          <stop offset="1" stopColor="#FF7200" />
        </linearGradient>
        <linearGradient
          id={id1}
          x1="96.3496"
          y1="17.6843"
          x2="129.001"
          y2="17.6843"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF9B04" />
          <stop offset="1" stopColor="#FF7200" />
        </linearGradient>
        <linearGradient
          id={id2}
          x1="25.5765"
          y1="17.6815"
          x2="58.0303"
          y2="17.6815"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF9B04" />
          <stop offset="1" stopColor="#FF7200" />
        </linearGradient>
        <linearGradient
          id={id3}
          x1="0"
          y1="17.6888"
          x2="23.728"
          y2="17.6888"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF9B04" />
          <stop offset="1" stopColor="#FF7200" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default IconLogo;
