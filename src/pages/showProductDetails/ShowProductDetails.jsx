import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowProductDetails = () => {
    const [productDetails, setProductDetails] = useState({});
    const { id } = useParams();
    const [totalPrice, setTotalPrice] = useState(0);
    const [productQuantity, setProductQuantity] = useState(1)
    useEffect(() => {
        fetch(`http://localhost:5000/furniture/details/${id}`)
            .then(res => res.json())
            .then(data => setProductDetails(data))
    }, [productDetails, id])
    console.log(productDetails);

    const productCalculate = (condition) => {

        if (productQuantity < 0) {
            return alert("Minimum 1 product order.")
        }
        if (condition == "increment") {

            setProductQuantity(productQuantity + 1)


        } else {
            setProductQuantity(productQuantity - 1)
            return setTotalPrice(productDetails.price * productQuantity)
        }




    }



    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <img src={productDetails.image} className="w-full md:w-5/6 h-72" alt="" />
                </div>
                <div className="">
                    <h2 className="text-xl py-3">{productDetails.productName}</h2>
                    <h1 className="py-2 font-bold">$ {totalPrice ? totalPrice : productDetails?.price}</h1>
                    {/* <h1 className="py-2 font-bold">$ {totalPrice}</h1> */}
                    <h4 className="py-1">Category:  {productDetails.category?.toUpperCase()}</h4>
                    <div className="flex justify-between w-3/5 ">
                        <div className="py-3">
                            <span onClick={() => productCalculate("increment")} className="font-bold text-2xl border px-4 py-2 hover:bg-slate-200 hover:cursor-pointer">+</span>
                            <input
                                onChange={(e) => setProductQuantity(parseInt(e.target.value))} className="w-10 text-center font-bold" type="number" name="" min="0" value={productQuantity} id="" /> <span onClick={() => productCalculate("derement")} className="font-bold text-2xl border px-4 py-2 hover:bg-slate-200 cursor-pointer">-</span>
                        </div>
                        <button className="bg-blue-500 text-white px-3 rounded font-bold">Proced Checkout</button>
                    </div>
                </div>
            </div>
            {/* //details */}
            <div className="py-3">
                <h1 className="font-extrabold border-b-emerald-500 text-lime-500">Details</h1>
                <div>
                    <h2 className=" text-sm font-bold text-slate-500 py-2">{productDetails.productName}</h2>
                    <p className="font-bold text-slate-500">Specification</p>
                    <ul>
                        {
                            productDetails?.specification?.map((feature, index) => {
                                return <li className="text-slate-500" key={index}>{feature}</li>
                            })
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default ShowProductDetails;