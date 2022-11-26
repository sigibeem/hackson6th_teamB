// import { useState } from 'react';
import axios, { AxiosInstance } from 'axios';

const AggregateResult = () => {
    let instance: AxiosInstance

    instance = axios.create({
        baseURL: 'http://localhost:8080',
    });

    instance.get("/api/statistics/%3Cstr:weapon%3E/")
    // instance.get("/api/match_result/")
        .then(response=>{console.log(response.data)});

    return (<></>);
}

export default AggregateResult;

