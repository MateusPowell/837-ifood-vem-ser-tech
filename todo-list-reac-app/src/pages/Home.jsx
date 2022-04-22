import { TodoListItem } from '../components/TodoListItem'
import './Home.css'

export function Home() {
    const itemsArray = [
        { id: 1, text: "Acordar 7 horas da manhã", checked: false},
        { id: 2, text: "Lavar toda a louça suja que está dentro ou fora da pia", checked: false},
        { id: 3, text: "Levar os cachorros para passear por 30 min", checked: false},
        { id: 4, text: "Lavar o carro todo", checked: true},
    ];

    // localStorage.setItem("abc", "oi, tudo bem?");
    // sessionStorage.setItem("def", "não, ta tudo uma bela bosta!");
    console.log(itemsArray);

    return (
        <div className="container">
            {itemsArray.map(({id, text, checked}) => {
                {/* return <TodoListItem {...obj} /> */}
                return <TodoListItem id={id} text={text} key={id} checked={checked}/>
            })}
        </div>
    )
}