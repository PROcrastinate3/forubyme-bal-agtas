// Helpers that turn the plain values in siteConfig.js into real links.

// "+63 917-123-4567" -> "+639171234567"
export const cleanPhone = (phone) => phone.replace(/[^\d+]/g, "");

export const telLink = (phone) => `tel:${cleanPhone(phone)}`;
export const smsLink = (phone) => `sms:${cleanPhone(phone)}`;
export const mailLink = (email) => `mailto:${email}`;

// Accept "@name" or "name" — strip any leading @ or slashes.
const handle = (value) => value.trim().replace(/^[@/]+/, "");

export const facebookLink = (v) => `https://facebook.com/${handle(v)}`;
export const instagramLink = (v) => `https://instagram.com/${handle(v)}`;
export const githubLink = (v) => `https://github.com/${handle(v)}`;
export const messengerLink = (v) => `https://m.me/${handle(v)}`;

// Full URL is used as-is; otherwise treated as a Discord user ID.
export const discordLink = (v) =>
  /^https?:\/\//i.test(v.trim())
    ? v.trim()
    : `https://discord.com/users/${handle(v)}`;
