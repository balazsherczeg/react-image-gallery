import React, {useState, useEffect} from 'react';
import {hot} from 'react-hot-loader';

import Album from './src';

const Fetch = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    if (items === null) {
      const fetchItems = async () => {
        const response = await fetch('http://localhost/~balazs/bubamara/wp-json/samsara/v2/items');
        const json = await response.json();
        setItems(json);
      };

      fetchItems();
    }
  }, [items]);

  return (
    <Album items={items} />
  );
};

export default hot(module)(Fetch);
