import React from "react";
import { useNavigate } from "react-router-dom";

type Image = {
    src: string,
    alt: string,
}

type Props = {
    title: string,
    discription: string,
    images: Image[],
    price?: number,
}

const Product = (props: Props) => {
    const navigate = useNavigate();

    const handlePsyClick = () =>{
        navigate('/checkout')
    }
    return (
        <div className="container p-0 mt-10 border-l border-r border-b rounded grid grid-cols-3">
            <img className="col-span-3" src={props.images[0].src} alt={props.images[0].alt} />
            <div className="col-span-2">
                <h1 className="text-4xl font-bold border-b p-6">{props.title}</h1>
                <p className="text-gray-900 p-6">{props.discription}</p>
            </div>
            <div className="border-l p-6 flex flex-col">
                <button onClick={handlePsyClick} className="
                bg-indigo-500 
                text-white 
                hover:bg-indigo-600 
                font-bold 
                rounded 
                shadow-[0.25rem_0.25rem_0px_rgba(0,0,0,1)]
                focus:outline-none
                border border-gray-900
                hover:border-gray-900
                border-2"
                >
                    Buy now
                </button>
            </div>
        </div>
    )
}

export default Product;