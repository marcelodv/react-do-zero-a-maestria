const RenderSomething = () => {
    const renderAnything = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Também posso renderizar isso!</h1>
        }
    }

    return (
        <div>
            {renderAnything(true)}
            {renderAnything(false)}
        </div>
    )
}

export default RenderSomething;