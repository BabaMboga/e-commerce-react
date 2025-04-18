import './ProductList.css';



function ProductList({products}){
    return (
        <div className='product-list'>
            {products.map((product) => (
                <div key={product.id} className='product-item'>
                    <img 
                        src={product.image}
                        alt={product.name}
                        className='product-image'
                    />
                    <h3 className='product-name'>{product.name}</h3>
                    <p className='product-price'>{product.price}</p>
                    <p className='product-description'>{product.description}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductList;