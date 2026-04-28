import Button from "./Eventos/Button"

function Evento() {
    function MeuEvento() {
        console.log("Primeiro evento ativado")
    }

    return (
        <>
        <p>Clique para ativar o evento:</p>
        <Button event={MeuEvento}  text="Primeiro evento"/>
        
        
        </>
    )
}
export default Evento