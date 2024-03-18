
const SingleShowroom = ({ showroom }) => {
    console.log(showroom);
    return (
        <div className="hero  bg-base-100 border overflow-hidden">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-full md:w-1/2">
                    <img src={showroom.image} className="max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div className="w-full md:w-1/2 font-semilbold text-slate-400  ">
                    <h1 className="text-xl font-bold text-slate-500">{showroom.name}</h1>
                    <p className="py-1">{showroom.address}</p>
                    <p className="">{showroom.phone}</p>

                </div>
            </div>
        </div>
    );
};

export default SingleShowroom;