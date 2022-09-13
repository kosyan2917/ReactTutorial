import React from "react";
import './thing-info.css'
const ThingInfo = () => {
    return <div className="mainInfo">
        <table>
            <thead>
            <tr>
                <td><img href="https://cs8.pikabu.ru/post_img/2016/02/04/7/145458292112119207.jpg"/></td>
                <td>
                    <h2>Имя</h2>
                    <div className="chars">
                        <p>Характеристика 1</p>
                        <p>Характеристика 2</p>
                    </div>

                </td>
            </tr>
            </thead>
        </table>
    </div>;
}
export default ThingInfo;