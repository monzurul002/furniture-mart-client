import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import SingleShowroom from "./SingleShowroom";

const Showroom = () => {
    const [division, setDivision] = useState('dhaka')

    const { data: showrooms = [] } = useQuery({
        queryKey: ["showroom", division],
        queryFn: async () => {
            const data = await axios.get(`http://localhost:5000/showrooms/${division.toLowerCase()}`)
            return data.data.list
        }
    })
    console.log(showrooms);

    return (
        <div >
            <div className="py-4">
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Pick the best fantasy franchise</span>

                    </div>
                    <select onChange={(e) => setDivision(e.target.value)} className="select select-bordered">
                        <option selected>Dhaka</option>
                        <option>Comilla</option>
                        <option>Chottogram</option>

                    </select>

                </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    showrooms.map((showroom, i) => {
                        return <SingleShowroom key={i} showroom={showroom} />
                    })
                }
            </div>

        </div>
    );
};

export default Showroom;