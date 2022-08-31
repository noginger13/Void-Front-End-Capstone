import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlexContainer, FlexSelectContainer } from '../styles/Container.styled';
import { SingleStarOutline, HeartIcon } from '../styles/Stars.styled';
import {
  SelectSize,
  SelectQuantity,
  AddItem,
  FavIcon,
  ErrorMsg,
  SuccessMsg
} from '../styles/Select.styled';
import { addItemToCart } from '../../../actions/cartAction';
import getProductDetail from '../../../actions/productDetailAction';
import star from '../../../images/star.png';
import SizeSelector from './SizeSelector';
import QtySelector from './QtySelector';
import clickTracker from '../clickTracker';

export default function Select({ sizes, quantity, style }) {
  const localCarts = JSON.parse(localStorage.getItem('cartItems'));
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQty, setSelectedQty] = useState(1);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const productDetail = useSelector((state) => state.productDetail);
  const { id, name, category } = productDetail.productDetail;

  const currentProduct = localCarts
    ? localCarts.filter(
        (item) => item.product_id === id && item.style_id === style.style_id
      )
    : [];
  const [defaultQty, setDefaultQty] = useState(
    currentProduct.length >= 1 ? currentProduct[0].selected_qty : 1
  );
  const [defaultSize, setDefaultSize] = useState(
    currentProduct.length >= 1 ? currentProduct[0].selected_size : ''
  );
  const fav = currentProduct.length >= 1 ? currentProduct[0].favorite : false;
  useEffect(() => {
    if (currentProduct.length !== 0) {
      setDefaultQty(currentProduct[0].selected_qty);
      setDefaultSize(currentProduct[0].selected_size);
      setSelectedSize(currentProduct[0].selected_size);
      setSelectedQty(currentProduct[0].selected_qty);
    } else {
      setDefaultQty(1);
      setDefaultSize('');
      setSelectedQty(1);
      setSelectedSize('');
    }
    setError(false);
    setSuccess(false);
  }, [style.style_id]);

  const generateArray = (num) => {
    const range = [];
    for (let i = 0; i < num && i < 15; i++) {
      range.push(i + 1);
    }
    return range;
  };
  const [selectedQuantity, setSelectedQuantity] = useState(
    generateArray(quantity[0])
  );
  const onChangeHandler = (s) => {
    clickTracker('ProductOverview', 'Size Selector');
    const newQty = generateArray(quantity[sizes.indexOf(s)]);
    setSelectedQuantity(
      newQty.length === 0 ? generateArray(quantity[0]) : newQty
    );
    setSelectedSize(s);
    setError(false);
  };

  const onQtyChangeHandler = (q) => {
    clickTracker('ProductOverview', 'Quantity Selector');
    setSelectedQty(q);
  };

  const addItemHandler = () => {
    clickTracker('ProductOverview', 'Add to Cart');
    if (selectedSize === '') {
      setError(true);
      setSuccess(false);
    } else {
      const price =
        style.sale_price === null ? style.original_price : style.sale_price;
      const item = {
        product_id: id,
        product_name: name,
        product_category: category,
        product_image: style.photos[0].thumbnail_url,
        selected_size: selectedSize,
        selected_qty: selectedQty,
        style_id: style.style_id,
        style_name: style.name,
        product_price: price,
        total_price: Number(price) * Number(selectedQty),
        favorite: true
      };
      dispatch(addItemToCart(item));
      setError(false);
      setSuccess(true);
    }
  };
  return (
    <>
      {error && <ErrorMsg>Please Select a Size</ErrorMsg>}
      {success && <SuccessMsg>Added to your cart</SuccessMsg>}
      <FlexSelectContainer>
        <SizeSelector
          sizes={sizes}
          selectedQuantity={selectedQuantity}
          defaultSize={selectedSize}
          onChangeHandler={onChangeHandler}
        />
        <QtySelector
          selectedQuantity={selectedQuantity}
          selectedSize={selectedSize}
          defaultQty={selectedQty}
          onQtyChangeHandler={onQtyChangeHandler}
        />
      </FlexSelectContainer>
      {quantity.length !== 0 && (
        <FlexContainer>
          <AddItem onClick={addItemHandler} title="Add this item to your cart">
            <p>
              <span style={{ margin: 'auto 0', marginLeft: '15px' }}>
                ADD TO BAG
              </span>
              <i
                className="fa-solid fa-plus"
                style={{ float: 'right', marginRight: '15px' }}
              ></i>
            </p>
          </AddItem>
          <FavIcon>
            <div style={{ margin: 'auto' }}>
              <p style={{ textAlign: 'center' }}>
                {fav ? (
                  // <SingleStarOutline src={heart} style={{ color: 'red' }} />
                  <i
                    className="fa-solid fa-heart"
                    style={{
                      color: 'red',
                      padding: 'auto',
                      fontSize: '25px'
                    }}
                    title="This item already in your cart"
                  ></i>
                ) : (
                  <i
                    className="fa-solid fa-star"
                    style={{
                      fontSize: '25px',
                      color: 'lightgreen'
                    }}
                  ></i>
                )}
              </p>
            </div>
          </FavIcon>
        </FlexContainer>
      )}
    </>
  );
}
