import React, {useState} from 'react';
import {arrayOf} from 'prop-types';

import {itemPropType} from './data/propTypes';
import Carrousel from './components/Carrousel';
import Loading from './components/Loading';
import ImageComponent from './components/Image';
import Masonry from './components/Masonry';
import Layout from './components/Layout';

const Album = ({
  items,
}) => {
  const [fullView, setFullView] = useState(null);
  const [showFullView, setShowFullView] = useState(false);

  const handleItemClick = (index) => {
    setFullView(index);
    setShowFullView(true);
  };

  const handleHideFullView = () => {
    setShowFullView(false);
  };

  const handleUnmountFullView = () => {
    setTimeout(() => setFullView(null), 1000);
  };

  const modal = fullView != null
    ? (
      <Carrousel
        items={items}
        index={fullView}
        onClose={handleHideFullView}
      />
    )
    : null;

  return (
    <div className="VMG">
      {items ? (
        <Layout
          modal={modal}
          onUnmountModal={handleUnmountFullView}
          showModal={showFullView}
        >
          {items.length > 0 && (
            <Masonry
              handleClick={handleItemClick}
              items={items}
              itemComponent={ImageComponent}
            />
          )}
        </Layout>
      ) : (
        <Loading />
      )}
    </div>
  );
};

Album.propTypes = {
  items: arrayOf(itemPropType),
};

Album.defaultProps = {
  items: null,
};

export default Album;
