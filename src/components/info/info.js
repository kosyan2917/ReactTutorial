import React from "react";
import './info.css';
import ItemList from "../item-list/item-list";
import ThingInfo from "../thing-info/thing-info";

const Info = () => {
    return <div className="flex">
        <div className="item-list">
            <ItemList />
        </div>
        <div className="thing-info">
            <ThingInfo/>
        </div>
    </div>
}

export default Info