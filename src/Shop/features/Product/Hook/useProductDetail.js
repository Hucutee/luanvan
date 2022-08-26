import { useEffect, useState } from "react";
import product2Api from '../../../../api/product2Api'
export default function useProductDetail(productId){
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
 //               setLoading(true)
                const result = await product2Api.getProduct(productId);
                setProduct(result.data);
            } catch (error) {
                console.log('loi productid',error);
            }
        //    setLoading(fals e);
        })();
    },[productId]);
    return {product,loading};
}