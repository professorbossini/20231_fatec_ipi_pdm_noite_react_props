import React from 'react'

const Pedido = (props) => {
  return (
      <div className="d-flex">
        <div className="d-flex align-items-center">
          <i className={props.icone}></i>
        </div>
        <div className="flex-grow-1 border rounded ms-2">
          <h4 className="text-center">{props.titulo}</h4>
          <p className="text-center">{props.descricao}</p>
        </div>
      </div>
  )
}

export default Pedido