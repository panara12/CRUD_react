import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Onedetail() {

    const [faculty ,setFaculty] = useState({});
    const nevigate = useNavigate();
    let params = useParams();
    let url = 'https://658fc42bcbf74b575eca1e9b.mockapi.io/faculty/'+params.id;
    useEffect(()=>{
        fetch(url,{method:"get"})
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            setFaculty(res)
        })
    },[])

    return (
        <>
<div className="p-5 border rounded text-center text-gray-500 max-w-sm">
    <img className="w-32 h-32 rounded-full mx-auto" src={faculty.image} alt="" />
    <div className="text-sm mt-5">
        <a href="#"
            className="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">{faculty.name}
        </a>
        <p>Blogger &amp; Youtuber</p>
    </div>

    <p className="mt-2 text-sm text-gray-900">Lorem ipsum dolor sit amet, consecte adipisicing elit. Voluptatibus quia
        Maiores et perferendis eaque.</p>

        <button className="bg-gray-500 text-black" 
        onClick={()=>{
                fetch(url,{method:"delete"})
                .then(()=>{
                    nevigate("/Alldetails")
                })
        }}
        >Delete</button>
        <button className="bg-gray-500 text-white m-3" 
        onClick={()=>{
            nevigate("/Editdetail/"+params.id);
        }}
        >
            edit
        </button>


    </div>
        </>
    );
}
export default Onedetail