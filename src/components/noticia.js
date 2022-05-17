
function Noticias(){

    const notas ={
        titulo : "Mi primer componente",
        descripcion : "Creando el primer componente para el info"

    }
    const {titulo, descripcion} = notas 

    return (
        <div className="mi-clase">
            <h1 className='mi-titulo'>Mi noticia: {titulo} </h1>
            <h2 className='mi-descripcion'>Mi noticia: {descripcion}</h2>
        </div>
    )

}

export default Noticias;