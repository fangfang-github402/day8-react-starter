import ProductItem from "./ProductItem";

const ProductCategory = () => {
    const products = [
        {
            name: "Football",
            price: 49.99,
            status: true
        },
        {
            name: "Baseball",
            price: 9.99,
            status: true
        },
        {
            name: "Tennis Racquet",
            price: 29.99,
            status: false
        }
    ]
    return (
        <div>
            {products.map((product,index) => {
                return <ProductItem productItem={product} key={product.name + index}/>
            })}
        </div>
    );
}

export default ProductCategory;