const TemplateExpressions = () => {
    const name = "João"
    const data = {
        age: 19,
        job: 'programador',
    }

    return(
        <div>
            <h1>Olá {name} !</h1>
            <p>Sua idade é {data.age} e sua profissão é {data.job}</p>
            <p>{4 + 4}</p>
            <p>{console.log('JSX React !')}</p>
        </div>
    );
};

export default TemplateExpressions;