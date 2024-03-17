import img1 from "../../assets/home/ourservice1.png"
import img2 from "../../assets/home/ourservice2.png"
import img3 from "../../assets/home/ourservice3.png"
import img4 from "../../assets/home/ourservice4.png"
import shape from "../../assets/home/shape.png"
const Specialization = () => {
    const data = [
        {
            image: img1,
            name: "Exclusive Designs",
            description: "Choose from our huge collections"
        },
        {
            image: img2,
            name: "Customer Care",
            description: "We are 24/7 open just to improve your lifestyle"
        },
        {
            image: img3,
            name: "Do Customization",
            description: "Customize your own furniture according to your taste & budget"
        },
        {
            image: img4,
            name: "Quality & Brand Value",
            description: " Get the best quality & brand value of Partex Furniture"
        },
    ]
    return (
        <div className="py-5" >
            <div className="flex justify-center py-3">
                <div className="text-center items-center">
                    <h3 className="font-semibold py-3">What makes us different</h3>
                    <img src={shape} className="w-12 mx-auto" alt="" />
                    <p className="text-slate-500 font-semibold text-sm py-2">Discover The New, We’ve Brought For You</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {
                    data.map((item, index) => {
                        return <div key={index} className="card w-full bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={item.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{item.name}</h2>
                                <p>{item.description}</p>

                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Specialization;