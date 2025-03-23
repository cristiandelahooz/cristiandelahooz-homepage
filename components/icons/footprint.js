const FootprintIcon = props => {
  return (
    <svg
      width={20}
      height={20}
      className="w-5 inline-block transition-transform group-hover:rotate-[20deg]"
      viewBox="0 0 40 40"
      fill="currentColor"
      {...props}
    >
      <path
        d="M10 5 L20 35 L20 25 L15 5 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M20 5 C24 10, 20 25, 03 38 C32 20, 26 18, 29 5 Q25 8, 22 3 Z"
        fill="orange"
        stroke="red"
        strokeWidth="2"
      />
    </svg>
  )
}

export default FootprintIcon
