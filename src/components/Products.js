import ProductDetailContainer from "./ProductDetailContainer";
import './Products.css';

function Products() {
    return (
        <div className="productsContainer">
            <h2 className="title">Productos</h2>
            <ProductDetailContainer/>
        </div>
    );
}

export default Products;