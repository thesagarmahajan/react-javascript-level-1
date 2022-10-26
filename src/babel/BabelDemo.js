import React from "react";

function BabelDemo(){
    let users = [
        {
            id:"1",
            name:"Sagar",
            gender:"Male"
        },
        {
            id:"2",
            name:"Ninad",
            gender:"Male"
        }
    ]
    return React.createElement("table", {border:"1"}, 
               React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "ID"),
                        React.createElement("th", null, "Name"),
                        React.createElement("th", null, "Gender"))),
               React.createElement("tbody", null, users.map((user)=>{
                return React.createElement("tr", null,
                            React.createElement("td", null, user.id),
                            React.createElement("td", null, user.name),
                            React.createElement("td", null, user.gender))
               })))
}

export default BabelDemo;