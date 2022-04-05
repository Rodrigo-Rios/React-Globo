import { useParams } from 'react-router-dom';

export const ComponentWithParam: React.FC<{}> = (props) => {
    const params = useParams();
    return ( <>
    <div><img src="https://spinoff.com.br/wp-content/uploads/Captura-de-Tela-2019-09-12-a%CC%80s-11.11.24.png" alt="" /></div>
    <div><img src="https://spinoff.com.br/wp-content/uploads/Captura-de-Tela-2019-09-12-a%CC%80s-11.11.24.png" alt="" /></div>    
    </>)
}