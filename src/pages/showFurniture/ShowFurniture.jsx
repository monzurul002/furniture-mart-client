import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { MdOutlineAddShoppingCart, MdOutlineFavoriteBorder } from "react-icons/md";
import "./ShowFurniture.css"



const ShowFurniture = () => {
    const { categoryName } = useParams()
    console.log(categoryName);
    const { data: furnitures = [] } = useQuery({
        queryKey: ["furniture"],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/furniture?category=${categoryName}`);
            console.log(res);
            return res.data;
        }
    });

    // useEffect(() => {
    //     fetch(`http://localhost:5000/furniture?category=${categoryName}`)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])

    return (
        <div>
            <h2 className="">{categoryName}</h2>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {
                    furnitures.map(furniture => {
                        return <div key={furniture._id} className="card card-compact w-full bg-base-100 shadow-xl relative hover:cursor-pointer hover:border-4 overflow-hidden  ">
                            <figure><img src={furniture?.image} className="w-10/12 hover:ease-in-out" alt={furniture?.productName} /></figure>

                            <h2 className=" text-center py-4 font-bold">{furniture.productNameame}</h2>


                            <div className="w-full card-body absolute  ">
                                <div className="flex justify-center   items-center gap-3">
                                    <button><MdOutlineAddShoppingCart />
                                    </button>
                                    <button><MdOutlineFavoriteBorder />
                                    </button>
                                </div>
                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    );
};

export default ShowFurniture;