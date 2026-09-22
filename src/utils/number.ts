/**
 * Format an Indonesian mobile number as `+62 8xx-xxxx-xxxx`.
 *
 * Accepted forms include:
 * `+6285353896139`, `6285353896139`, `0085353896139`,
 * `085353896139`, and `+62 853-5389-6139`.
 */
export function formatPhoneNumber(value: string | number): string {
  const input = String(value).trim()
  let digits = input.replace(/\D/g, "")

  if (digits.startsWith("00")) digits = digits.slice(2)
  if (digits.startsWith("62")) digits = digits.slice(2)
  else if (digits.startsWith("0")) digits = digits.slice(1)

  // Indonesian mobile numbers contain 9–12 digits after the leading 8.
  if (!/^8\d{8,11}$/.test(digits)) return input

  const groups = [digits.slice(0, 3)]
  for (let index = 3; index < digits.length; index += 4) {
    groups.push(digits.slice(index, index + 4))
  }

  return `+62 ${groups.join("-")}`
}
