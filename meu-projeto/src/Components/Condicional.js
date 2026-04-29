import { useState } from "react"

function Condicional() {
    function EnviarEmail(e) {
        e.preventDefault()
        console.log("Testando")

    }


    return (
        <div>
            <h2>Cadstre o seu e-mail:</h2>
            <form>
               <input type="email" placeholder="Digite o seu e-mail"></input>
               <button type="submit" onClick={EnviarEmail}>Enviar e-mail</button>
            </form>
            
        </div>
    )
}
export default Condicional