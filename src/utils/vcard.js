import { cleanPhone } from "./links";

// Escape characters that have special meaning in vCard text fields.
const esc = (s = "") =>
  s
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\r?\n/g, "\\n");

export function buildVCard({ name, title, phone, email, website }) {
  const parts = name.trim().split(/\s+/);
  const last = parts.length > 1 ? parts.pop() : "";
  const first = parts.join(" ");

  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${esc(name)}`,
    `N:${esc(last)};${esc(first)};;;`,
  ];
  if (title) lines.push(`TITLE:${esc(title)}`);
  if (phone) lines.push(`TEL;TYPE=CELL:${cleanPhone(phone)}`);
  if (email) lines.push(`EMAIL;TYPE=INTERNET:${esc(email)}`);
  if (website) lines.push(`URL:${website}`);
  lines.push("END:VCARD");

  return lines.join("\r\n");
}

// Builds the .vcf in the browser and triggers a download, which
// phones offer to open directly in the Contacts app.
export function downloadVCard(profile) {
  const blob = new Blob([buildVCard(profile)], {
    type: "text/vcard;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${profile.name.replace(/\s+/g, "_")}.vcf`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
