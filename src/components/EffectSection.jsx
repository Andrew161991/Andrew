import React, { useState, useEffect } from "react"
import Button from "./Button/Button"
import Modal from "./Modal/Modal"
import useInput from "../hooks/useinput"

export default function EffectSection(){
    const input = useInput()
    const [modal, setModal] = useState(false)
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        async function fetchUsers(){
            setLoading(true)
            const respons = await fetch('https://jsonplaceholder.typicode.com/users')
            const users = await respons.json()
            setUsers(users)
            setLoading(false)
        }
        fetchUsers()
    }, [])



    return(
        <section>
            <h3 style={{textDecoration: 'underline'}}>E F F E C T :</h3>
            <Button onClick={() => setModal(true)}>Открыть информацию</Button>
            <Modal open={modal}>
                <h3>ЦЕНТРИРОВАНИЕ БЛОКА ИЛИ ИЗОБРАЖЕНИЯ</h3>
                <p>Иногда центрировать нужно не текст, а блок в целом. Или, 
                    по-другому говоря: мы хотим, чтобы правое и левое поля были одинаковыми. 
                    Для этого нужно установить поля на 'auto'. Это обычно используется для блоков с фиксированной шириной, 
                    потому что если блок сам по себе гибкий, он просто займёт всю доступную ширину. Вот пример: <br />
                    <code style={{color: '#ffff', fontWeight: '700'}}>margin-left:auto; <br /> margin-right:auto;</code><br/><br/>
                    <Button onClick={() => setModal(false)} style={{backgroundColor: '#ccc'}} >Закрыть</Button>
                </p>
            </Modal>
            {loading && <p>L o a d i n g ...</p>}
            {!loading && 
            (<>
            <input type="text" className="control" {...input}  />
            <ul>{users.filter((user) => user.name.toLowerCase().includes(input.value.toLowerCase())).map((user) => <li key={user.id} >{user.name} - {user.phone}</li>)}</ul>
            </>)}
        </section>
    )
}