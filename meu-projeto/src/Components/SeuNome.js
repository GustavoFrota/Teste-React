function SeuNome({ setNome }) {
    return(
        <diV>
            <p>Digite o seu nome:</p>
            <input type="text" placeholder="Qual o seu nome?" onChange={(e) => setNome(e.target.value)}></input>
        </diV>
    )
}
export default SeuNome