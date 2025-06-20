function Hero() {
    return (
        <section className="container-fluid" id="supportHero">

            <div className="p-5" id="supportTitle">
                <h4>Support Portal</h4>
                <a href="" className="fs-5">Tract Tickets </a>
            </div>

            <div className=" row " id="supportDescripton">

                <div className="col-6 p-5">
                    <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1> <br></br>
                    <input placeholder="Eg. how do i activate F&O, why is my order getting rejected... "></input><br></br><br></br>
                    <a href="" className="fs-5">Track account opening </a>&nbsp;&nbsp; 
                    <a href="" className="fs-5">Track segment activation </a>&nbsp;&nbsp;
                    <a href="" className="fs-5">Intraday margins </a>&nbsp;&nbsp;
                    <a href="" className="fs-5">Kite user manual</a>&nbsp;&nbsp;
                </div>

                <div className="col-6  p-5">
                    <h1 className="fs-3">Featured</h1>
                    <ol style={{lineHeight : "3rem"}}>
                        <li><a href="" className="fs-5">Latest Intraday leverages and Square-off timings</a></li>
                        <li><a href="" className="fs-5">Surveillance measure on scrips - December 2024</a></li>
                    </ol>                    
                </div>

            </div>

        </section>
    );
}

export default Hero;