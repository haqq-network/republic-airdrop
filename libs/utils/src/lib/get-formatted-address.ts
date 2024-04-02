export function getFormattedAddress(
  address: string | undefined,
  before = 4,
  after = 4,
  withSpacer = true,
  spacer = '...',
) {
  return `${address?.slice(0, before)}${withSpacer ? spacer : ''}${address?.slice(-1 * after)}`;
}
