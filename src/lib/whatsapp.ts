/** Set VITE_WHATSAPP_NUMBER (digits only, with country code, e.g. 2348012345678) in .env to enable WhatsApp CTAs. */
const NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined;

export const whatsappEnabled = Boolean(NUMBER);
export const whatsappLink = (text: string) => `https://wa.me/${NUMBER}?text=${encodeURIComponent(text)}`;
