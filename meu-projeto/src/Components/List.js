import Item from './Item'

function List() {
    return(
       <>
         <ul>
            <Item marca='Ferrari' lancamento={1985}/>
            <Item marca='Fiat' lancamento={1964}/>
         </ul>
       </>
    )

}

export default List