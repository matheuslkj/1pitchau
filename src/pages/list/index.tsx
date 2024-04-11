import { Link } from "react-router-dom"
import { Menu } from "../../components/Menu"
import { Detalhes, Informacoes, Tabela, Header, Headers } from "./styles"
import { useEffect, useState } from "react"
import axios from "axios"

interface IDataContatos {
  id: number,
  nome: string,
  telefone: string,
  email: string,
  cidade: string
}

export const List = () => {

  const [dataContatos, setDataContatos] = useState<Array<IDataContatos>>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/contatos').then((res) => {
      setDataContatos(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  })

  return(
  <>
  <Menu />
    <h1
      style={{
        textAlign: 'center',
        marginTop: '5px'
      }}
    >Lista de Contatos</h1>
    <Tabela>
      <Header>
        <Headers>
          <td>Nome</td>
          <td>Cidade</td>
          <td>#</td>
        
        </Headers>
      </Header>
      {
      dataContatos.map((contato) => {
        return (
        <Informacoes>
          <tr>
            <td>{contato.nome}</td>
            <td>{contato.cidade}</td>
            <Detalhes>
            <Link to={'http://localhost:3001/lista/' + contato.id}
                  style={{textDecoration: 'none'}}>
              <button>Detalhes</button>
            </Link>
            </Detalhes>
          </tr>
        </Informacoes>
         )
        })
      }
    </Tabela>
  </>
  )
}