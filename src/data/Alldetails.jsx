import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

function Alldetails() {
    const [faculty , setFaculty ] = useState([]);
    
    useEffect(()=>{
        fetch('https://658fc42bcbf74b575eca1e9b.mockapi.io/faculty')
    .then((res)=>{
       return res.json()
    })
    .then((res)=>{
        console.log(res);
        setFaculty
        (res);
    })
    },[])

    let f = faculty.map((fac)=>{
        return (
            <>
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
              <img className="w-24 h-24 rounded-full mx-auto" src={fac.image} alt="" width="384" height="512" />
              <div className="pt-6 space-y-4 text-center">
                <figcaption className=" font-medium">
                  <div>
                    <Link to={"../Onedetail/"+fac.id}>{fac.name}</Link>
                  </div>
                </figcaption>
              </div>
            </figure>
            </>
        )
    })

    return(
        <div className="grid grid-cols-3 gap-4">
            {f}
        </div>
    );
}

export default Alldetails