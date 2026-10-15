import sanitizeHtml from "sanitize-html";

// Plain CSS values only: no url(), expression() or script-like content.
const SAFE_STYLE_VALUE = /^(?!.*(url\s*\(|expression|javascript|@import))[#\w\s%.,()\-+/!]*$/i;

const STYLE_PROPERTIES = [
  "color",
  "background",
  "background-color",
  "text-align",
  "text-decoration",
  "font-size",
  "font-weight",
  "font-style",
  "line-height",
  "letter-spacing",
  "width",
  "height",
  "max-width",
  "aspect-ratio",
  "border",
  "border-width",
  "border-style",
  "border-color",
  "border-radius",
  "margin",
  "margin-top",
  "margin-right",
  "margin-bottom",
  "margin-left",
  "padding",
  "padding-top",
  "padding-right",
  "padding-bottom",
  "padding-left",
];

/**
 * Cleans HTML coming from WordPress before it is rendered with
 * dangerouslySetInnerHTML. Keeps normal post formatting (headings, lists,
 * links, images, tables, embeds from YouTube/Vimeo, colours) and removes
 * anything that can run code: <script>, inline event handlers
 * (onclick, onerror...), javascript: links, and unknown embeds.
 */
export function sanitizeBlogHtml(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: [
      "p", "br", "hr", "div", "span",
      "h1", "h2", "h3", "h4", "h5", "h6",
      "strong", "b", "em", "i", "u", "s", "mark", "sub", "sup", "small",
      "blockquote", "pre", "code",
      "ul", "ol", "li",
      "a", "img", "figure", "figcaption",
      "table", "thead", "tbody", "tfoot", "tr", "th", "td", "caption",
      "iframe",
    ],
    allowedAttributes: {
      "*": ["class", "id", "style", "title", "data-*"],
      a: ["href", "target", "rel", "name"],
      img: [
        "src", "srcset", "sizes", "alt", "width", "height", "loading", "decoding",
      ],
      iframe: [
        "src", "width", "height", "title", "allow", "allowfullscreen", "frameborder",
      ],
      th: ["colspan", "rowspan", "scope"],
      td: ["colspan", "rowspan"],
    },
    allowedStyles: {
      "*": Object.fromEntries(
        STYLE_PROPERTIES.map((property) => [property, [SAFE_STYLE_VALUE]]),
      ),
    },
    allowedSchemes: ["http", "https", "mailto", "tel"],
    allowedSchemesByTag: { img: ["http", "https"] },
    allowedIframeHostnames: [
      "www.youtube.com",
      "www.youtube-nocookie.com",
      "player.vimeo.com",
    ],
    transformTags: {
      a: (tagName, attribs) => {
        if (attribs.target === "_blank") {
          attribs.rel = "noopener noreferrer";
        }
        return { tagName, attribs };
      },
    },
  });
}
