export const getStyleTag = (componentId) => {
  const id = componentId.startsWith('/') ? componentId.slice(1) : componentId;
  return `<link id="style-${id}" rel="stylesheet" href="./src/${id}.css" />`;
};
