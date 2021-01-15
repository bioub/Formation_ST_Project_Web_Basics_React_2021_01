import './ProductDetails.css';

import { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { fetchProductById } from '../api';
import { Product } from '../model';

interface RouteParams {
  productId: string;
}

type Props = RouteComponentProps<RouteParams>;

interface State {
  product: Product | null;
}

class ProductDetails extends Component<Props, State> {
  state: State = {
    product: null,
  };

  async componentDidMount() {
    const id = this.props.match.params.productId;
    const product = await fetchProductById(id);
    this.setState({
      product,
    });
  }

  render() {
    const { product } = this.state;

    if (!product) {
      return <div className="ProductDetails">Loading...</div>;
    }

    return (
      <div className="ProductDetails">
        <div className="phone-image">
          <img className="phone" src={'/' + product.images[0]} alt="Phone" />
        </div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <ul className="phone-thumbs">
          {product.images.map((i) => (
            <li key={i}>
              <img className="phone-thumb" src={'/' + i} alt="Phone" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductDetails;
