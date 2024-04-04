import { useEffect, useState } from "react";
import { FormContainer } from "./styles"
import axios from "axios";
import { Menu } from "../../components/Menu";
import { useNavigate } from "react-router-dom";


interface ICidades {
    id: number,
    nome: string
}

  

export const Contato = () => {
    const navigate = useNavigate();


    const [Cidades, setDataCidade] = useState<Array<ICidades>>([]);
    
    const [id, setId] = useState ("");
    const [nome, setNome] = useState ("");
    const [telefone, setTelefone] = useState ("");
    const [email, setEmail] = useState ("");
    const [cidade, setCidade] = useState ("");
    const [obs, setObs] = useState ("");

    useEffect(() => {

        axios.get('http://localhost:3000/cidades')
          .then((res) => {
            setDataCidade(res.data)
          })
          .catch((err: any) => {
            console.log(err)
          })
      }, [])

      function criarTarefa() {
        axios.post('http://localhost:3000/contatos', {id, nome , telefone, email, cidade, obs})
            .then((res) => console.log(res.data))
            .catch(err => console.error(err))
            

      }

      function limparCampos() {
        setNome("")
        setTelefone("")
        setEmail("")
        setCidade("")
        setObs("")
    }

    return (
        <>
        <Menu/>
            <body>
                <FormContainer onSubmit={criarTarefa}   >
                    <div>
                        <h1>Contato</h1>

                        <span>Está é a página de contato. Em caso de dúvidas, críticas ou sujestões, preencha o formulário abaixo e iremos responder.</span>

                            <label htmlFor="" >Digite seu nome</label>
                            <input type="text" id="nome" required placeholder="Digite o seu nome:" name="nome" value={nome} onChange={e => setNome(e.target.value)} />

                            <label htmlFor="">Digite seu número de telefone</label>
                            <input type="tel" id="telefone" required placeholder="Número de telefone:" name="telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />

                            <label htmlFor="">Digite seu e-mail</label>
                            <input type="email" id="email" required placeholder="Número seu e-mail:" name="email"  value={email} onChange={e => setEmail(e.target.value)} />

                            <label htmlFor=""></label>
                            <select name="cidades" id="citie" required value={cidade} onChange={e => setCidade(e.target.value)} >
                                    {
                                        Cidades.map((cidades) => {
                                            return (
                                                <option key={cidades.id} value={cidades.nome}>{cidades.nome}</option>
                                            )
                                        })
                                    }

                            </select>

                            <textarea name="obs" id="" value={obs} onChange={e => setObs(e.target.value)} ></textarea>

                            <button type="submit" onSubmit={limparCampos} 
                            
                            >Enviar</button>

                    </div>
                    
                </FormContainer>

                <button onClick={() => {
                                navigate('/list')
                              }} > Lista</button>
            </body>
        </>
    )
}