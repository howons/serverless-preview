export const scrollIntoView = (
  container,
  item,
  isVertical,
  behavior,
  alignTo = 'start',
) => {
  const [direction, itemStartOffset, itemSize, containerSize] = isVertical
    ? ['top', item.offsetTop, item.offsetHeight, container.offsetHeight]
    : ['left', item.offsetLeft, item.offsetWidth, container.offsetWidth];

  const coordOptions = {
    start: itemStartOffset,
    center: itemStartOffset - containerSize / 2 + itemSize / 2,
    end: itemStartOffset + itemSize,
  };

  container.scrollTo({
    [direction]: coordOptions[alignTo] ?? 0,
    behavior,
  });
};
