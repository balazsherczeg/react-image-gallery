import React, {useEffect, useRef, useState} from 'react';
import {arrayOf, func, object, node} from 'prop-types';
import styled from 'styled-components';

import useWindowSize from '../utils/useWindowSize';
import useScroll from '../utils/useScroll';
import calculateMasonry from './calculateMasonry';
import getVisibleItems from './getVisibleItems';
import renderItems from './renderItems';

const MasonryStyled = styled.div`
  position: relative;
`;

const Masonry = ({
  items,
  itemComponent,
  handleClick,
}) => {
  const {
    height: windowHeight,
    width: windowWidth,
  } = useWindowSize();
  const {y: scrollTop} = useScroll();

  const [layoutCache, setLayoutCache] = useState({});
  const [renderedItems, setRenderedItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);

  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const {width: containerWidth} = containerRef.current.getBoundingClientRect();
      setLayoutCache(
        calculateMasonry({items, containerWidth}),
      );
    }
  }, [
    containerRef,
    items,
    windowWidth,
  ]);

  useEffect(() => {
    if (layoutCache.positions) {
      setRenderedItems(
        renderItems({items, itemComponent, handleClick}, layoutCache),
      );
    }
  }, [ // eslint-disable-line
    layoutCache,
  ]);

  useEffect(() => {
    if (layoutCache.positions) {
      setVisibleItems(
        getVisibleItems(renderedItems, layoutCache, windowHeight, scrollTop),
      );
    }
  }, [ // eslint-disable-line
    renderedItems,
    scrollTop,
  ]);

  const {containerHeight} = layoutCache;

  return (
    <MasonryStyled
      className="VMG__Masonry"
      style={{height: containerHeight}}
      ref={containerRef}
    >
      {visibleItems}
    </MasonryStyled>
  );
};

Masonry.propTypes = {
  items: arrayOf(object).isRequired,
  itemComponent: node.isRequired,
  handleClick: func.isRequired,
};

export default Masonry;
