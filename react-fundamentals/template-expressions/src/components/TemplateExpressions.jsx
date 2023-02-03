const TemplateExpressions = () => {
    const name = "Augusto Cury";

    const data = {
        age: 31,
        job: 'Escritor'
    };

    return (
        <div>
            <h1>Olá, { name }! Tudo bem?</h1>
            <h2>Você atua como: { data.job }.</h2>
            <h2>4 + 4 = { 4 + 4 }</h2>
            { console.log("Template Expressions") }
        </div>
    )
}

export default TemplateExpressions;