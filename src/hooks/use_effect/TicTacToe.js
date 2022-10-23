import { useEffect, useState } from "react";
import "./Tictactoe.css"
function TicTacToe(){
    let [char, setChar] = useState("O")
    let [btnst, setBtnst] = useState({
        b1:"",
        b2:"",
        b3:"",
        b4:"",
        b5:"",
        b6:"",
        b7:"",
        b8:"",
        b9:""
    })

    useEffect(()=>{
        checkWin()
    },[btnst])

    function checkWin(){
        let lines = [
            ["b1", "b2", "b3"],
            ["b4", "b5", "b6"],
            ["b7", "b8", "b9"],
            ["b1", "b4", "b7"],
            ["b2", "b5", "b8"],
            ["b3", "b6", "b9"],
            ["b1", "b5", "b9"],
            ["b3", "b5", "b7"],
        ]
        lines.forEach(line=>{
            let [a,b,c] = line
            if((btnst[a]==btnst[b]&& btnst[b]==btnst[c]) && (btnst[a]!="" && btnst[b]!="" &&btnst[c]!="")){
                alert(char+" WINS")
                setBtnst({
                    b1:"",
                    b2:"",
                    b3:"",
                    b4:"",
                    b5:"",
                    b6:"",
                    b7:"",
                    b8:"",
                    b9:""
                })
                setChar("O")
            }
        })
        
    }
    
    function handleClick(e, btn){
        if(e.target.value=="" && char=="O")
        {
            setBtnst({...btnst,[btn]:"X"})
            setChar("X")
        }
        else if(e.target.value=="" && char=="X")
        {
            setBtnst({...btnst,[btn]:"O"})
            setChar("O")
        }
        checkWin()
    }

    return (<>
        <h1>Game On!</h1>
        <table className="tictactoe" border="1">
            <tr>
                <td><button onClick={(e)=>handleClick(e, "b1")}>{btnst.b1}</button></td>
                <td><button onClick={(e)=>handleClick(e, "b2")}>{btnst.b2}</button></td>
                <td><button onClick={(e)=>handleClick(e, "b3")}>{btnst.b3}</button></td>
            </tr>
            <tr>
                <td><button onClick={(e)=>handleClick(e, "b4")}>{btnst.b4}</button></td>
                <td><button onClick={(e)=>handleClick(e, "b5")}>{btnst.b5}</button></td>
                <td><button onClick={(e)=>handleClick(e, "b6")}>{btnst.b6}</button></td>
            </tr>
            <tr>
                <td><button onClick={(e)=>handleClick(e, "b7")}>{btnst.b7}</button></td>
                <td><button onClick={(e)=>handleClick(e, "b8")}>{btnst.b8}</button></td>
                <td><button onClick={(e)=>handleClick(e, "b9")}>{btnst.b9}</button></td>
            </tr>
        </table>
    </>)
}

export default TicTacToe;