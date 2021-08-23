import DOMPurify from "dompurify";

// Sanitize text when used inside dangerouslysetInnerHTML
export const sanitize = (content) => {
  return process.browser ? DOMPurify.sanitize(content) : content;
};
