import { useEffect } from "react";

interface SEOOptions {
  title: string;
  description: string;
  path?: string;
}

const BASE_URL = "https://williamsonbodyshop.com";

/**
 * Dynamically updates document title and meta description per page.
 * Also updates og:title, og:description, twitter:title meta tags, and canonical link.
 */
export const useSEO = ({ title, description, path }: SEOOptions) => {
  useEffect(() => {
    document.title = title;

    const upsertMeta = (attr: string, key: string, value: string) => {
      let el = document.querySelector(
        `meta[${attr}="${key}"]`,
      ) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);

    // Canonical link — update per page path
    const canonicalUrl = path ? `${BASE_URL}${path}` : `${BASE_URL}/`;
    let link = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonicalUrl);
  }, [title, description, path]);
};
