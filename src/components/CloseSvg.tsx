interface Props {
  color?: string;
  size?: string;
}

export const CloseSvg = ({ color = "#C4C4CC", size = "32" }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.0607 5.93934C26.6464 6.52513 26.6464 7.47487 26.0607 8.06066L8.06066 26.0607C7.47487 26.6464 6.52513 26.6464 5.93934 26.0607C5.35355 25.4749 5.35355 24.5251 5.93934 23.9393L23.9393 5.93934C24.5251 5.35355 25.4749 5.35355 26.0607 5.93934Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.93934 5.93934C6.52513 5.35355 7.47487 5.35355 8.06066 5.93934L26.0607 23.9393C26.6464 24.5251 26.6464 25.4749 26.0607 26.0607C25.4749 26.6464 24.5251 26.6464 23.9393 26.0607L5.93934 8.06066C5.35355 7.47487 5.35355 6.52513 5.93934 5.93934Z"
        fill={color}
      />
    </svg>
  );
};
