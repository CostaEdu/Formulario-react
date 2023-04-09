import './ValueForm.css'

function ValueForm(props) {

    const placeholderModificado = `${props.placeholder}...`

    const aoDigitado = (evento) => { props.aoAlterado(evento.target.value) }
    return (
        <div className='valueForm'>
            <label>
                {props.label}
            </label>
            <input
                value={props.valor}
                onChange={aoDigitado}
                required={props.obrigatorio}
                placeholder={placeholderModificado}>
            </input>
        </div>
    )
}

export default ValueForm