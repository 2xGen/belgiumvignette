import { ImageResponse } from "next/og";

type SiteIconProps = {
  size: number;
};

export function SiteIcon({ size }: SiteIconProps) {
  const stripeWidth = Math.round(size / 3);

  return new ImageResponse(
    (
      <div
        style={{
          width: size,
          height: size,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ width: stripeWidth, height: size, backgroundColor: "#0B1220" }} />
        <div style={{ width: stripeWidth, height: size, backgroundColor: "#F5C518" }} />
        <div
          style={{
            width: size - stripeWidth * 2,
            height: size,
            backgroundColor: "#EF3340",
          }}
        />
      </div>
    ),
    {
      width: size,
      height: size,
    },
  );
}
