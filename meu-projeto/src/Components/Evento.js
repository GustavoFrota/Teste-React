function Evento() {
    function MeuEvento() {
        console.log("Fui ativado")
    }
    return (
        <>
        <p>Clique para ativar o evento:</p>
        <button onClick={MeuEvento}>Ativar!</button>
        
        </>
    )
}
export default Evento