import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/loading/LoadingBox';
import MessageBox from '../components/messagebox/MessageBox';
import ProductItemDetails from '../components/productdetails/ProductDetail';


function ProductScreen(props) {
    const dispatch = useDispatch()
    const productId = props.match.params.id;
    const productDetails = useSelector((state) => state.productDetails)

    const { loading, error, product } = productDetails
    console.log(product)
    useEffect(() => {
        dispatch(detailsProduct(productId))
    }, [dispatch, productId])
    return (
        <div>
            {loading ? <LoadingBox /> :
                error ? <MessageBox varaint="error" icon="ban">{error}</MessageBox> :
                    (
                        <div className="product-details">
                            <div className="col-1 ">
                                <img src={product.image}></img>
                            </div>
                            <div className="col-2" >
                                <div className="product-detail-heading">
                                    <h2>{product.name}</h2>
                                    <span className={`$`}>In Stock</span>
                                </div>
                                <div className="product-detail-pricing">
                                    <h4>${product.price}</h4>
                                    <h5>{product.rating}</h5>
                                </div>
                                <div>
                                    {product.description}
                                </div>
                            </div>

                        </div>
                    )}
        </div>
    );
}

export default ProductScreen;