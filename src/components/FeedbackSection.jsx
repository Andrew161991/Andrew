import { useState, useRef } from "react"
import Button from "./Button/Button"



export default  function FeedbackSection(){
    const [name, setName] = useState('')
    const [reason, setReason] = useState('help')
    const [hasError, setHasError] = useState(true)
    function handleChangeName(event){
        setName(event.target.value)
        setHasError(event.target.value.trim().length === 0)
    }
    function toggleError(){
        setHasError((prev) => !prev)
    }
    function StateVsRf(){
        const input = useRef()
        const [show, setShow] = useState(false)
        function handleKeyDown(event){
            if(event.key == 'Enter'){
                setShow(true)
            }
        }
        return(
            <div>
                <h3 >Input Value: {show && input.current.value}</h3>
                <input ref={input} placeholder="Push Enter" type="text" onKeyDown={handleKeyDown} className="control "/>
            </div>
        )
    }

    return(
        <section>
            <h3>Обрвтная связь</h3>
            <Button onClick={toggleError}>Toggle Error</Button>
            <form>
                <label htmlFor="name">Ваше имя</label> 
                <input type="text" id="name" className="control" value={name} style={{border: hasError ? '2px solid red' : null}} onChange={handleChangeName}  />

                <label htmlFor="reason">Причина обращения</label> 
                <select id="reason" className="control" value={reason} onChange={(event) => setReason(event.target.value)}>
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggest">Предложение</option>
                </select>
                <Button isActive={!hasError} disabled={hasError}>Отппвыить</Button>
            </form>
            <pre>
                Name: {name}<br/>
                Reason: {reason}
            </pre>
            <hr />
            <StateVsRf />
        </section>
    )
}