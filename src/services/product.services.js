import axios from "axios"

export const getProductByIdApi = async (id) => {
    try {
        const result = await axios.get(`https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`)
        return result;
    } catch (err) {
        throw new Error(err)
    }
}