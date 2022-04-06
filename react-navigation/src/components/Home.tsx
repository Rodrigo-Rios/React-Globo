import { useEffect, useState , useRef } from 'react';
import './Home.css';


export const Home: React.FC<{}> = (props) => {
    const [data, setData] = useState([]);
    const carousel = useRef(null);
    
    useEffect(()=>{

      

      fetch('http://localhost:3000/static/plans.json')
      .then((response)=>response.json())
      .then(setData);
    },[])

    const handleLeftClick = (e: { preventDefault: () => void; }) =>{
        e.preventDefault();
        
        
    }

    const handleRightClick = (e: { preventDefault: () => void; }) =>{
        e.preventDefault();
       
        
    }

    if (!data || !data.length) return null

    return(

        <div className="container">
          
            <div className="carousel" ref={carousel}>

                {data.map((item) => {
                
                const {id, name, plan, price, images} = item
                return(
                <div className="item" key={id}>
                    <div className='image'>
                        <img src={images} alt={name}/>
                    </div>
                    <div className="info">
                        <span className="name">{name}</span>
                        <span className="plano">{plan}</span>
                        <span className="price">{price}</span>
                    </div>
                </div>
                )
                })}
            </div>

            <div className="buttons">
                <button onClick={handleLeftClick}>
                    <img src="/static/images/seta.png" alt="ScroollLeft"/>
                </button>

                <button onClick={handleRightClick}>
                    <img src="/static/images/seta.png" alt="ScroollRight"/>
                </button>

            </div>


        </div>



    )
        
    
}