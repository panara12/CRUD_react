import { useEffect, useState } from "react";
import { json, useNavigate, useParams } from "react-router-dom";

function Newadd() {
    const params = useParams();
    const [data,setData] = useState({});
    const nevigate = useNavigate();
    let url = 'https://658fc42bcbf74b575eca1e9b.mockapi.io/faculty/';
    console.log(params.id);
    useEffect(()=>{
        if(params.id>0){
            fetch(url+params.id,{method:"get"})
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            setData(res)
        })
        
        }
        if(params.id== undefined){
            setData(data.name="",data.email="",data.image="",data.job="")
        }

    },[params.id,nevigate])
    return(
        <>
            <table>
                <tr>
                    <td>enter name : </td>
                    <td>
                        <input type="text"
                        value={data.name} 
                        onChange={(e)=>{
                            setData({...data,name:e.target.value})
                        }}
                        />
                    </td>
                </tr>
                <tr>
                    <td>enter image : </td>
                    <td>
                        <input type="text" 
                        value={data.image}
                        onChange={(e)=>{
                            setData({...data,image:e.target.value})
                        }}
                        />
                    </td>
                </tr>
                <tr>
                    <td>enter email : </td>
                    <td>
                        <input type="text" 
                        value={data.email}
                        onChange={(e)=>{
                            setData({...data,email:e.target.value})
                        }}
                        />
                    </td>
                </tr>
                <tr>
                    <td>enter job : </td>
                    <td>
                        <input type="text" 
                        value={data.job}
                        onChange={(e)=>{
                            setData({...data,job:e.target.value})
                        }}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <button 
                        className="bg-gray-500"
                        onClick={()=>{
                            if(params.id>0){
                                fetch('https://658fc42bcbf74b575eca1e9b.mockapi.io/faculty/'+params.id,
                            {
                                method:"PUT",
                                body:JSON.stringify(data),
                                headers:{
                                    "Content-Type":"application/json"
                                }
                            })
                            .then(()=>{
                                nevigate('/Alldetails');
                            }) 
                            } 
                            else{
                                fetch('https://658fc42bcbf74b575eca1e9b.mockapi.io/faculty/',
                            {
                                method:"POST",
                                body:JSON.stringify(data),
                                headers:{
                                    "Content-Type":"application/json"
                                }
                            })
                            .then(()=>{
                                nevigate('/Alldetails');
                            }) 
                        
                            }
                        }} 
                        >
                        {params.id>0 && "edit "}
                        {!(params.id)>0 && "new "} 
                        user</button>
                    </td>
                </tr>
            </table>
        </>
    );
}

export default Newadd