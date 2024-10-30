export default function isMobilePhone(str) {
  return /^(\+?880|0)1[13456789][0-9]{8}$/.test(str);
}
