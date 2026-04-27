import PropTypes from 'prop-types'
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

Item.PropTypes = {
   marca: PropTypes.string.isRequired,
   lancamento: PropTypes.number,
}

Item.defaultProps = {
   marca: 'Faltou a marca',
   lancamento: 0,
}

export default List