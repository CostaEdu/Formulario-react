import { useState } from 'react'
import './Formulario.css'
import ValueForm from '../ValueForm';
import Botao from '../Botao';

function Formulario() {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');
    const [cep, setCep] = useState('');
    const [cidade, setCidade] = useState('');
    const [Uf, setUf] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [rua, setRua] = useState('');

    const submitSenha = (evento) => {
        evento.preventDefault()
        if (senha != confSenha) { alert("senhas não são iguais") }
        else {}
    }

    return (
        <section className='formulario'> 
            <form onSubmit={submitSenha}>
                <img className='logo' src='/img/logo-black.png' alt='logo'/>
                <ValueForm 
                    obrigatorio = {true}
                    label = "Nome"
                    placeholder = "Digite seu nome"
                    valor = {nome}
                    aoAlterado = {valor => setNome(valor)}
                />
                <ValueForm 
                    obrigatorio = {true}
                    label = "Sobrenome"
                    placeholder = "Digite seu sobrenome"
                    valor = {sobrenome}
                    aoAlterado = {valor => setSobrenome(valor)}
                />
                <ValueForm 
                    obrigatorio = {true}
                    label = "E-mail"
                    placeholder = "Digite seu e-mail"
                    valor = {email}
                    aoAlterado = {valor => setEmail(valor)}
                />
                <ValueForm 
                    obrigatorio = {true}
                    label = "Telefone"
                    placeholder = "Digite seu telefone"
                    valor = {tel}
                    aoAlterado = {valor => setTel(valor)}
                />
                <ValueForm 
                    obrigatorio = {true}
                    label = "Cpf ou CNPJ"
                    placeholder = "Digite seu CPF ou CNPJ"
                    valor = {cpf}
                    aoAlterado = {valor => setCpf(valor)}
                />
                <ValueForm 
                    obrigatorio = {true}
                    label = "Senha"
                    placeholder = "Digite sua senha"
                    valor = {senha}
                    aoAlterado = {valor => setSenha(valor)}
                />
                <ValueForm 
                    obrigatorio = {true}
                    label = "Confirme sua senha"
                    placeholder = "Digite novamente a sua senha"
                    valor = {confSenha}
                    aoAlterado = {valor => setConfSenha(valor)}
                />
                <ValueForm 
                    obrigatorio = {true}
                    label = "CEP"
                    placeholder = "Digite seu CEP"
                    valor = {cep}
                    aoAlterado = {valor => setCep(valor)}
                />
                <ValueForm 
                    obrigatorio = {true}
                    label = "Cidade"
                    placeholder = "Digite sua cidade"
                    valor = {cidade}
                    aoAlterado = {valor => setCidade(valor)}
                />
                <ValueForm 
                    obrigatorio = {true}
                    label = "UF"
                    placeholder = "Digite seu Estado"
                    valor = {Uf}
                    aoAlterado = {valor => setUf(valor)}
                />
                <ValueForm 
                    obrigatorio = {true}
                    label = "Numero"
                    placeholder = "Digite o número"
                    valor = {numero}
                    aoAlterado = {valor => setNumero(valor)}
                />
                <ValueForm 
                    obrigatorio = {true}
                    label = "Bairro"
                    placeholder = "Digite seu bairro"
                    valor = {bairro}
                    aoAlterado = {valor => setBairro(valor)}
                />
                <ValueForm 
                    obrigatorio = {true}
                    label = "Rua"
                    placeholder = "Digite sua rua"
                    valor = {rua}
                    aoAlterado = {valor => setRua(valor)}
                />
                <Botao>
                    Cadastrar
                </Botao>
            </form>
        </section>
    )
}

export default Formulario