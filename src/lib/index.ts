export const getRandomElement = <T>(arr: T[]): T => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const isValidEmail = (email: string) => {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+/.test(email);
};

export function stripHtml(str: string) {
  return str.replace(/<\/?[^>]+(>|$)/g, "").trim();
}
