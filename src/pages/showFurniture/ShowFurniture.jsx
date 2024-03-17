import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineAddShoppingCart, MdOutlineFavoriteBorder } from "react-icons/md";
import "./ShowFurniture.css";
import { useState } from "react";

const ShowFurniture = () => {
    const { categoryName } = useParams();
    const navigate = useNavigate();
    const [sortValue, setSortValue] = useState("default");

    const { data: furnitures = [], refetch } = useQuery({
        queryKey: ["furniture", sortValue], // Include sortValue in the query key to trigger a refetch when sortValue changes
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/furniture?category=${categoryName}&sort=${sortValue}`);
            return res.data;
        }
    });

    const seeProductDetails = (id) => {
        return navigate(`/furniture/details/${id}`);
    };

    const handleSortChange = (e) => {
        const value = e.target.value;
        setSortValue(value);
        refetch(); // Trigger a refetch when sort value changes
    };

    return (
        <div className="py-6">
            <div className="flex justify-between">
                <h2 className="font-bold"><span className="text-sm">You have searched for</span> {categoryName}</h2>
                <div>
                    <select onChange={handleSortChange}>
                        <option disabled>Sort By</option>
                        <option value="low">Low to high</option>
                        <option value="high">High to Low</option>
                    </select>
                </div>
            </div>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-7">
                {furnitures.map(furniture => (
                    <div key={furniture._id} onClick={() => seeProductDetails(furniture._id)} className="card card-compact w-full bg-base-100 shadow-xl relative hover:cursor-pointer hover:border-1 overflow-hidden">
                        <figure><img src={furniture?.image} className="hover:blur-sm w-11/12 pt-4 h-48 hover:ease-in-out" alt={furniture?.productName} /></figure>
                        <h2 className="text-center py-4">{furniture.productName}</h2>
                        <h2 className="font-bold text-center">${furniture.price}</h2>
                        <div className="w-full card-body h-full absolute">
                            <div className="flex justify-center items-center gap-3">
                                <button><MdOutlineAddShoppingCart /></button>
                                <button><MdOutlineFavoriteBorder /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShowFurniture;


