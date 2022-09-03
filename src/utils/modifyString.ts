export const modifyString = (value: string): string => {
  if (value.length <= 15) return value;
  return value.slice(0, 15).concat("...");
};
