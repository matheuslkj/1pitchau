import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Menu } from "../../../components/Menu"
import { Button, TBTr, THTh, THtr, Table, Td, TextButton } from "./styles"
import axios from "axios"


interface IContatos {
  id: number;
  nome: string;
  
}



export const List = () => {

  const [dataContatos, setDataContatos] = useState< Array <IContatos>>([])
  const { id } = useParams()

  const navigate = useNavigate();


  useEffect(() => {

    axios.get(`http://localhost:3000/contatos`)
      .then((res) => {
        setDataContatos(res.data)
      })
      .catch((err: any) => {
        console.log(err)
      })
  }, [])


  return (
    <>
      <Menu />
      <div
        style={{
          paddingLeft: '6%',
          paddingRight: '6%',
          marginTop: 20,
          marginBottom: 40
        }}
      >
        <h2>Lista de Contatos</h2>
        <Table>
        <thead>
                      <THtr>
                          <THTh style={{ minWidth: 300 }}>Nome: </THTh>

                      </THtr>
                  </thead>
        {
            dataContatos.map((contato) => {
              return (
          <><tbody>
                          <TBTr>
                              <Td width={300}>{contato.nome}</Td>
                              <Td>
                                  <Button type="button" onClick={() => {
                  navigate('/lista/' + id)
                }}
                                  >
                                      <TextButton>
                                        eu
                                      </TextButton>
                                  </Button>
                              </Td>
                          </TBTr>
                      </tbody></>
           )
        })
      }
        </Table>
      </div>
    </>
  )
}