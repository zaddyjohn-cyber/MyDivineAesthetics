export const BRAND = 'My Divine Aesthetics';
export const PHONE_DISPLAY = '+1 (617) 943-0892';
export const PHONE_TEL = '+16179430892';
export const PHONE_WHATSAPP = '16179430892';
export const EMAIL = 'hello@mydivineaesthetics.com';

const DEFAULT_WA_MESSAGE =
  "Hi My Divine Aesthetics — I'd love to learn more about your services and book a consultation.";

export function whatsappLink(message = DEFAULT_WA_MESSAGE) {
  return `https://wa.me/${PHONE_WHATSAPP}?text=${encodeURIComponent(message)}`;
}
