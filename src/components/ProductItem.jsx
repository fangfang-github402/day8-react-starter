import './ProductItem.css'

const ProductItem = (props) => {

    const {productItem} = props;

    return (
        <div className={"product-item-wrapper"}>
            <span className={"product-item-name"}>{productItem.name}</span>
            <span>{productItem.price}</span>
            {productItem.status ? <span className={"in-stock"}>In Stock</span> : <span className={"out-of-stock"}>Out Of Stock</span>}
        </div>
    )
}

export default ProductItem