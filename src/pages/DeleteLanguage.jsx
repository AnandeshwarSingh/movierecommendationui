import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { useParams } from "react-router-dom";
import LanguageService from "../services/LanguageService";

import AdminSidebar from "./AdminSidebar"


let DeleteLanguage=()=>{
    const { languageId } = useParams();
    //requestParams
    const [msg,setMsg] = useState("");
    const [error, setError]  = useState({
        "statusCode":0,
        "message":""
    });
    // useEffect(()=>{
    //     const deleteLanguage = async () => {
    //         try {
    //             let res = await LanguageService.deleteLanguage(languageId);
    //             setMsg(res.data);
    //         } catch (err) {
    //             setError(err.response ? err.response.data : { message: "Unknown error" });
    //         }
    //     };
    //     deleteLanguage();
    // },[languageId])

    useEffect(()=>{
        let promice = LanguageService.deleteLanguage(languageId);
        promice.then((res)=>{
            setMsg(res.data);
        })
        .catch((err)=>{
            setError(err.data);
        })
    },[]);

    return(<>
   
    <h1>This is delete page {languageId}</h1>
    {msg && msg.length > 0 ? (
                <AdminSidebar />
            ) : (
                error.message && <p style={{ color: "red", textAlign: "center" }}>{error.message}</p>
            )}

    </>)
}
export default DeleteLanguage;