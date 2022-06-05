import api from './axios';

const prefix = '/products';

export const getProducts = () => api.get(prefix);

export const getProduct = (id) => api.get(`${prefix}/${id}`);

export const deleteProduct = (id) => api.delete(`${prefix}/${id}`);

//Phương thức post cỏa axios nhận 2 tham số là endpoint và dữ liệu
export const createProduct = (data) => api.post(prefix, data)