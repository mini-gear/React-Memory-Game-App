import { useState } from "react";
import Card from "./card";

function Cards() {

    const [item, setItems] = useState([
        {id:1, img:'/img/soccer.png', state: ''},
        {id:1, img:'/img/soccer.png', state: ''},
        {id:2, img:'/img/football.png', state: ''},
        {id:2, img:'/img/football.png', state: ''},
        {id:3, img:'/img/tt.png', state: ''},
        {id:3, img:'/img/tt.png', state: ''},
        {id:4, img:'/img/cricket.png', state: ''},
        {id:4, img:'/img/cricket.png', state: ''},
        {id:5, img:'/img/basketball.png', state: ''},
        {id:5, img:'/img/basketball.png', state: ''},
        {id:6, img:'/img/hockey.png', state: ''},
        {id:6, img:'/img/hockey.png', state: ''},
        {id:7, img:'/img/badminton.png', state: ''},
        {id:7, img:'/img/badminton.png', state: ''},
        {id:8, img:'/img/baseball.png', state: ''},
        {id:8, img:'/img/baseball.png', state: ''}
    ].sort(()=> Math.random()-.5))

    const [prev, setPrev] = useState(-1)
    const [turnCount, seTurnCount] = useState(0);

    function check(curr){
        if (item[curr].id == item[prev].id){
            item[curr].state = "correct"
            item[prev].state = "correct"
            setItems([...item])
            setPrev(-1)
        } else {
            item[curr].state = "wrong"
            item[prev].state = "wrong"
            setItems([...item])
            setPrev(-1)
            setTimeout(()=>{
                item[curr].state = ""
                item[prev].state = ""
                setItems([...item])
                
            },1000)
        }
    }

   
    function handleClick(id){
        if (item[id].state ? " correct " + item.state: "") {
            return console.log("already correct")
        }else{
            
        if (prev == -1){
            seTurnCount( turnCount+1 );
            item[id].state = "active"
            setItems([...item])
            setPrev(id)
        } else {
            check(id)
        }}
        
    }

    return  <><div className="container">
        { item.map((item, index)=> (
            <Card 
                key = {index}
                item = {item}
                id = {index}
                handleClick={handleClick}/>
        ))}


    </div> 
    <h3> Turn Counter {turnCount}</h3> </>

} 

export default Cards;