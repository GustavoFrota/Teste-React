import Button from "./Eventos/Button"

function Evento() {
    function MeuEvento() {
        console.log("Primeiro evento ativado")
    }

    function SegundoEvento() {
        console.log("Segundo evento ativado")
    }

    return (
        <>
        <p>Clique para ativar o evento:</p>
        <Button event={MeuEvento}  text="Primeiro evento"/>
        <Button event={SegundoEvento}  text="Segundo evento"/>
        
        
        </>
    )
}
export default Evento