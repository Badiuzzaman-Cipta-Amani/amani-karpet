import { whatsapp } from "@/data/common.json"

/** wa.me link to the shop's number with the default order message prefilled. */
export function whatsappUrl(message: string = whatsapp.message): string {
  const digits = whatsapp.phone.replace(/\D/g, "")
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
}
