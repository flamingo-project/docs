import React from 'react'

export default function Colors() {
    const colors = ["slate" ,"gray", "zinc", "neutral" ,"stone" ,"red" ,"orange" ,"amber", "yellow" ,"lime" ,"green" ,"emerald", "teal" ,"cyan" ,"sky", "blue" ,"indigo" ,"violet" ,"purple", "fuchsia", "pink" ,"rose"];
    const style = "bg-"
    return (
        <ul>
            {colors.map((e) =>{
                <li className={style+e+"-500"}>asd</li>
            })}
        </ul>
    )
}
