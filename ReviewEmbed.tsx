import { useEffect } from "react";

export default function ReviewEmbed() {
  useEffect(() => {
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, nofollow";
    document.head.appendChild(robots);
    return () => {
      document.head.removeChild(robots);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://api.clutchclicks.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <iframe
        src="https://api.clutchclicks.com/widget/survey/1O4aKYgogWYfyAkVTx0D"
        style={{ border: "none", width: "100%", height: "100%" }}
        scrolling="no"
        id="1O4aKYgogWYfyAkVTx0D"
        title="survey"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
      />
    </div>
  );
}
