import { SITE } from "./site";

export const MapEmbed = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: "56.25%",
          height: 0,
        }}
      >
        <iframe
          src={SITE.mapsEmbed}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title={`${SITE.businessName} location map`}
        />
      </div>
    </div>
  );
};
