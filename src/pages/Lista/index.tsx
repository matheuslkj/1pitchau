import { Link, useParams } from "react-router-dom"
import { Menu } from "../../components/Menu"
import { CardBody, CardHeader, Detalhe } from "./style"
import { useEffect, useState } from "react"
import axios from "axios"

interface IDataDetalhesContato {
  id: string,
  nome: string,
  telefone: string,
  email: string,
  cidade: string,
  obs: string
}

export const Lista = () => {

  const [dataContato, setDataDetalhesContato] = useState<IDataDetalhesContato | null>(null);
  const { id } = useParams<{id: string}>();

  useEffect(() => {
      axios.get(`http://localhost:3000/contatos/${id}`).then((res) => {
        setDataDetalhesContato(res.data)
      })
  }, [id]);

  return (
    <>
      <Menu />
      <br />
      {
        dataContato && (
        <Detalhe
          key={dataContato.id}
          id={dataContato.id}
        >
          <CardHeader>
            <h3>Detalhes do Contato de {dataContato.nome}</h3>
          </CardHeader>
          <CardBody>
            <p><strong>Nome: </strong>{dataContato.nome}</p>
            <p><strong>Telefone: </strong>{dataContato.telefone}</p>
            <p><strong>Email: </strong>{dataContato.email}</p>
            <p><strong>Cidade: </strong>{dataContato.cidade}</p>
            <p><strong>Observação: </strong>{dataContato.obs}</p>
            <br />
            <Link to={'http://localhost:3001/list'} style={{textDecoration: 'none'}}>
              <button>Voltar</button>
            </Link>
          </CardBody>
        </Detalhe>
        )
      }
    </>
  )
}