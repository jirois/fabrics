import React, { useEffect } from 'react';
import './product.scss'

function ProductItemDetails({ isModalOpen, closeModal, product }) {
    return (
        <div className={`${isModalOpen ? 'modal open' : 'modal'}`}>
            <h1>Welcome done</h1>

            <button onClick={closeModal}>close</button>

        </div>
    );
}

export default ProductItemDetails;