export const modifyString = (value: string): string => {
  if (value.length <= 20) return value;
  return value.slice(0, 20).concat("...");
};
