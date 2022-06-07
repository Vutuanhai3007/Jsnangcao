import { getProduct } from "../api/product";

const ProductDetail = {
    render: async (id) => {

        const response = await getProduct(id);
        const {data} = response // const data = response.data
        return (
            `<div>
                <div>ID: ${data.id}</div>
                <div>Name: ${data.name}</div>
                <div>Description: ${data.description}</div>
                <div>Price: ${data.price.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</div>
                <div>Status: ${data.status == true ? 'Hiển thị' : 'Ẩn'}</div>
            </div>`
        );
        
    }
}

export default ProductDetail;