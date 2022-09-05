export const getInputs = (list: HTMLCollection): Element[] => {
  return [...list].map((div) => div.children[0]);
};
