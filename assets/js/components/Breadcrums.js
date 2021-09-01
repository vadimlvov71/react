import React from "react"


export default function Breadcrums({item}) {
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="product__details__breadcrumb">
                    <a href="./index">Home</a>
                    <span>{item.name}</span>
                </div>
            </div>
        </div>
    );
}
