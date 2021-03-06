import React from "react";
import "../../../../style/accauntFormInfo.css";
import {Card} from "primereact/card";

function StatisticsRecord({text, color, index}) {
    return (
        <Card style={{background: `${color}`, margin: `15px 0`}}>
            <p style={{textAlign: "left", color: `black`, fontSize: `20px`}}>
                {`${index}. ${text}`}
            </p>
        </Card>
    )
}

export default StatisticsRecord