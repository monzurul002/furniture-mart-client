import { useQuery } from "@tanstack/react-query";
import axios from "axios";


function AllProducts() {
    const { data: allFurnitures = [] } = useQuery({
        queryKey: ["allFurnitures"], queryFn: async () => {
            const res = await axios.get("http://localhost:5000/allfurnitures");
            console.log(res);
            return res.data;
        }
    })

    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-7">
                {
                    allFurnitures.map(furniture => (
                        <div key={furniture._id} className="card card-compact w-full bg-base-100 shadow-xl relative hover:cursor-pointer hover:border-1 overflow-hidden">
                            <figure><img src={furniture?.image} className="hover:blur-sm w-11/12 pt-4 h-48 hover:ease-in-out" alt={furniture?.productName} /></figure>
                            <h2 className="text-center py-10">{furniture.productName}</h2>
                            <h2 className=" text-center absolute bottom-0 left-0 px-2 py-1  bg-blue-100">${furniture.price}</h2>
                            <button className="px-2 py-1 bg-blue-400 bottom-0 absolute right-0 text-white">Order Now</button>
                        </div>
                    ))}
            </div>

        </div>
    );
}

export default AllProducts;