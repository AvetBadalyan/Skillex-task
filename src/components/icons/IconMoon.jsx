function IconMoon(props) {
  return (
    <svg viewBox="0 0 34 34" fill="none" aria-hidden="true" {...props}>
      <g filter="url(#icon_moon_shadow)">
        <path
          d="M16.4612 8.51314C16.8365 8.29921 17.0116 7.85226 16.8813 7.44035C16.751 7.02844 16.3509 6.7634 15.9208 6.80418C10.803 7.28942 6.80005 11.5977 6.80005 16.8421C6.80005 22.411 11.3145 26.9254 16.8834 26.9254C22.1275 26.9254 26.4356 22.9229 26.9212 17.8055C26.962 17.3754 26.697 16.9752 26.2851 16.8449C25.8732 16.7146 25.4263 16.8896 25.2123 17.2649C24.1065 19.2046 22.0217 20.509 19.6334 20.509C16.0896 20.509 13.2167 17.6361 13.2167 14.0923C13.2167 11.7038 14.5213 9.61883 16.4612 8.51314Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <filter
          id="icon_moon_shadow"
          x="-0.916699"
          y="-0.957837"
          width="35.6"
          height="35.6"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="3.4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.16 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default IconMoon;
