import { useEffect, useState } from 'react';
import './Home.css';

export const Series: React.FC<{}> = (props) => {
    const [data, setData] = useState([]);
    
    
    useEffect(()=>{

      

      fetch('http://localhost:3000/static/series.json')
      .then((response)=>response.json())
      .then(setData);
    },[])


    if (!data || !data.length) return null

    return(

        <div className="container">
           
            <div className="carousel">

                {data.map((item) => {
                
                const {id, name, images} = item
                return(
                <div className="item" key={id}>
                    <div className='image'>
                        <img src={images} alt={name}/>
                    </div>
                    <div className="info">
                        <span className="name">{name}</span>

                    </div>
                </div>
                )
                })}
            </div>

        </div>



    )
        
    
}