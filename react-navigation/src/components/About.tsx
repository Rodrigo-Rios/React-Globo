import './About.css';

export const About: React.FC<{}> = (props) => {
        return <>

                <div className="about-section">
                        <h1>🎬ReactPrime🎬</h1>
                        <p>OUR TEAM </p>
                </div>

                <div className="row">
                        <div className="column">
                                <div className="card">
                                        <img className="olga" src="static/images/olga.jpeg" alt="Olga" width="100%" />
                                        <div className="container">
                                                <h2>Olga Mahin</h2>
                                                <p className="title">CEO & Founder</p>
                                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                                <p>olga@globo.com</p>
                                                <p><button className="button">Contact</button></p>
                                        </div>
                                </div>
                        </div>

                        <div className="column">
                                <div className="card">
                                        <img className="Marcel" src="static/images/marcel.jpeg" alt="Marcel" width="100%" />
                                        <div className="container">
                                                <h2>Marcel Pontes</h2>
                                                <p className="title">CEO & Founder</p>
                                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                                <p>marcel@globo.com</p>
                                                <p><button className="button">Contact</button></p>
                                        </div>
                                </div>
                        </div>

                        <div className="column">
                                <div className="card">
                                        <img className="Max" src="static/images/max.jpeg" alt="Max" width="100%" />
                                        <div className="container">
                                                <h2>Max Paz</h2>
                                                <p className="title">Art Director</p>
                                                <p>Diretor e criador de figurinhas da turma</p>
                                                <p>max@globo.com</p>
                                                <p><button className="button">Contact</button></p>
                                        </div>
                                </div>
                        </div>

                        <div className="column">
                                <div className="card">
                                        <img className="Rodrigo" src="static/images/rios.jpeg" alt="Rodrigo" width="100%" />
                                        <div className="container">
                                                <h2>Rodrigo</h2>
                                                <p className="title">Designer</p>
                                                <p>Psicólogo nas horas vagas.</p>
                                                <p>rodrigo@globo.com</p>
                                                <p><button className="button">Contact</button></p>
                                        </div>
                                </div>
                        </div>
                </div>
        </>
}