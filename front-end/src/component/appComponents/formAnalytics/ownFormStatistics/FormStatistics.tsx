import React, {useEffect, useState} from "react";
import Layout from "../../../navbarFooter/Layout";
import axios from "axios";
import { useParams } from 'react-router-dom';
import download from 'downloadjs'
import {getAuthHeader} from "../../../../utils/security/securityUtils";
import FormStatisticsUserBlock from "./FormStatisticsUserBlock";
import {Button} from "primereact/button";

function FormStatistics() {
    const [ownedFormsStats, setOwnedFormsStats] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8080/api/forms/valuation/${id}`, {
            headers: getAuthHeader()
        }).then(response => setOwnedFormsStats(response.data))
    }, []);

    const getReport = () => {
        axios.post(`http://localhost:8080/api/report/${id}`, {}, {
            headers: getAuthHeader(),
            responseType: `blob`
        }).then(response => {
            const content = response.headers['content-type'];
            download(response.data, "report.pdf", content);
        });
    }

    return (
        <Layout>
            <div className="all-outer-container">
                <div className="all-outer-container">
                    <div className="form-info-block">
                        <div className="form-info-block-content">
                            <div className="flex" style={{marginBottom: `20px`}}>
                                <Button style={{fontSize: `20px`}}
                                        onClick={() => getReport()}>Create a report</Button>
                            </div>
                            {
                                ownedFormsStats.map(((value: any, index) =>
                                    <FormStatisticsUserBlock
                                        index={index + 1}
                                        userName={value.userName}
                                        surname={value.surname}
                                        answerDate={value.answerDate}
                                        resultScore={value.resultScore}
                                        formMaxResult={value.formMaxResult}
                                    />))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default FormStatistics