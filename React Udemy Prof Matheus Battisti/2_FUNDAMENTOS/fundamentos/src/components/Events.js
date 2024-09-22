const Events = () =>{

    const handleMyEvent = (e) => {
        console.log(e)
        window.alert('aa')
    }

    const RenderSomething = (x) =>{
        if(x){
            return <h1>Posso renderizar isso</h1>
        } else{
            return <h1>e isso também</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui !</button>
            </div>
            <div>
                <button onClick={() => console.log('clicou !')}>Clique aqui também !</button>
            </div>
            <div>
                {RenderSomething(true)}
                {RenderSomething(false)}
            </div>
        </div>
    );
};

export default Events;