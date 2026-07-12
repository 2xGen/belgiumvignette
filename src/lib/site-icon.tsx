import { ImageResponse } from "next/og";

type SiteIconProps = {
  size: number;
};

export function SiteIcon({ size }: SiteIconProps) {
  const stripeHeight = Math.round(size * 0.125);

  return new ImageResponse(
    (
      <div
        style={{
          width: size,
          height: size,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#ffffff",
        }}
      >
        <div style={{ height: stripeHeight, width: size, backgroundColor: "#000000" }} />
        <div style={{ height: stripeHeight, width: size, backgroundColor: "#FDDA24" }} />
        <div style={{ height: stripeHeight, width: size, backgroundColor: "#EF3340" }} />
      </div>
    ),
    {
      width: size,
      height: size,
    },
  );
}
