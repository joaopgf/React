const Challenge = () =>{
    let n1 = 5;
    let n2 = 10;

    const somar = () =>{
        return console.log(n1+n2)
    }
    return(
        <div>
            <p>'Número 1: {n1}'</p>
            <p>'Número 2: {n2}'</p>
            <button onClick={somar}>Aperte aqui para somá-los</button>
        </div>
    );
};

export default Challenge;