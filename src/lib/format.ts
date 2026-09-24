
/**
 * Karta currency utilities.
 *
 * Centralises NGN formatting so pricing, cart totals, checkout,
 * dashboards, and commercial surfaces all use the same presentation.
 */

const NAIRA_LOCALE = 'en-NG'
const NAIRA_CURRENCY_SYMBOL = '₦'

export const formatNaira = (amount: number): string =>
  `${NAIRA_CURRENCY_SYMBOL}${amount.toLocaleString(NAIRA_LOCALE)}`
