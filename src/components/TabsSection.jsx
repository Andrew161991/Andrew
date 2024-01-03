import Button from "./Button/Button";

export default function TabsSection({active, onChange}){
    return(
        <section>
            <Button isActive={active === 'main'} onClick={() => onChange('main')}>Главное</Button>
            <Button isActive={active === 'feedback'} onClick={() => onChange('feedback')}>Обратная связь</Button>
            <Button isActive={active === 'effect'} onClick={() => onChange('effect')}>Пользователи</Button>
        </section>
    )
}