import { useEffect } from "react";

export default function MarketingEmbed() {
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
        src="https://api.clutchclicks.com/widget/form/zGdQxZ34LrYjfYbJAVzD"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          borderRadius: "4px",
        }}
        id="inline-zGdQxZ34LrYjfYbJAVzD"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Review Request Form"
        data-height="718"
        data-layout-iframe-id="inline-zGdQxZ34LrYjfYbJAVzD"
        data-form-id="zGdQxZ34LrYjfYbJAVzD"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Review Request Form"
      />
    </div>
  );
}
