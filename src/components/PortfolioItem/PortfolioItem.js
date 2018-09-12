import React from "react";
import "./PortfolioItem.css";

const PortfolioItem = props => (
    <div
        className="portfolioItem"
        style={{
            backgroundImage: props.image ? `url(${props.image})` : "none"
        }}
    >
        {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    </div>
)


export default PortfolioItem;
