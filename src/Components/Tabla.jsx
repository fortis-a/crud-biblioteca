import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Tabla({filas, campos, controlador}){

  useEffect(() => {
    
  }, [])

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <td><Link to = "/autores/Add"  className="btn btn-success">Nuevo</Link></td>
            {campos.map((value, index) => {
              return <th key= {index}>{value}</th>
            })}
          </tr>
        </thead>
       
        <tbody>
          {filas.map((value, index) => {
            return <tr key={index}>
              <td>
                <Link to={`/${controlador}/Edit/${value.autorId}`} className="btn btn-primary">Editar</Link>
                <Link to={`/${controlador}/Delete/${value.autorId}`} className="btn btn-danger">Eliminar</Link>
              </td>  {/* para que coincida los encabezados con los datos */}
             
              {Object.values(value).map((value2, index2) => {
                return <td key={index2}>{value2}</td>
              })}   {/* nunca olvidar los key */}
            </tr>
          })}
        </tbody>
      
      </table>
    </div>
  )
}

export default Tabla