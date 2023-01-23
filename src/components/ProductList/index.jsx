import React from 'react';
import Card from '../Card';
import Skeleton from '../Skeleton';

const ProductList = () => {
  const [productItems, setProductItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://63cbf28a9b72d2a88e051289.mockapi.io/lightings')
      .then((res) => res.json())
      .then((arr) => {
        setProductItems(arr);
        setIsLoading(!isLoading);
      });
  }, []);

  return (
    <div className="row">
      {isLoading
        ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
        : productItems.map((item) => <Card key={item.id} {...item} />)}
    </div>
  );
};

export default ProductList;
