import React from 'react';
import styled from 'styled-components';

const MasonryItem = styled.div`
  position: absolute;
`;

const renderItems = (props, layoutCache) => {
  const {
    items,
    itemComponent: ItemComponent,
    handleClick,
  } = props;
  const {positions} = layoutCache;
  const renderedItems = [];
  let position;
  let item;

  for (let i = 0; i < items.length; i++) {
    position = positions[i];

    item = items[i];

    renderedItems.push(
      <MasonryItem
        key={i}
        style={position}
        onClick={() => handleClick(i)}
        className="VMG__MasonryItem"
        role="button"
      >
        <ItemComponent
          item={item}
          size={position}
        />
      </MasonryItem>,
    );
  }

  return renderedItems;
};

export default renderItems;
