import bed from "../../assets/categories/img1.jpg"
import office from "../../assets/categories/office.jpg"
import dining from "../../assets/categories/dining.jpg"
import kitchen from "../../assets/categories/kitchen.jpg"


import ShowFurniture from "../showFurniture/ShowFurniture";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Categories = () => {

    const categories = [
        {
            id: 1,
            name: "Bed",
            image: bed
        },
        {
            id: 2,
            name: "Office",
            image: office
        },
        {
            id: 3,
            name: "Dining",
            image: dining
        },
        {
            id: 4,
            name: "Kitchen",
            image: kitchen
        },
    ]
    const [categoryName, setCategoryName] = useState(null)
    const navigate = useNavigate();



    const showFurnitureByCategory = (categoryName) => {
        setCategoryName(categoryName)
        navigate(`/furniture/${categoryName}`)

    }

    return (
        <div className="grid md:grid-cols-4 grid-cols-1 gap-5 py-3">

            {
                categories.map(category => {
                    return <div onClick={() => showFurnitureByCategory((category.name))} key={category.id} className="card card-compact w-full bg-base-100 shadow-xl hover:cursor-pointer hover:border-4  ">
                        <figure><img src={category.image} className="w-10/12 hover:ease-in-out" alt={category.name} /></figure>
                        <div className="">
                            <h2 className=" text-center py-4 font-bold">{category.name}</h2>

                        </div>

                    </div>
                })
            }
            {/* {
                categoryName && <ShowFurniture categoryName={categoryName} />
            } */}
        </div>
    );
};

export default Categories;