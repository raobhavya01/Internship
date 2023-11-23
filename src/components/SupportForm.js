import { useEffect, useState } from "react";

function SupportForm(props)
{
    const [Name,setName] = useState(props.NameValue);
    const [EmailID,setEmailID] = useState(props.EmailIDValue);
    const [PhoneNo,setPhoneNo] = useState(props.PhoneNoValue);
    const [Probleme,setProbleme] = useState(props.ProblemeValue);

    useEffect(()=>{
        setName(props.NameValue);
        setEmailID(props.EmailIDValue);
        setPhoneNo(props.PhoneNoValue);
        setProbleme(props.ProblemeValue);
    },[props.NameValue,props.EmailIDValue,props.PhoneNoValue,props.ProblemeValue]);
   
    const arr = [Name,EmailID,PhoneNo,Probleme];  //[Raj,raj@gmail.com,1]
   
    const handleClick = () =>{
        props.getState(arr);
    }

    return(
        <div style={{maxWidth:"40%",margin:"0px auto"}}>
            <input defaultValue={props.NameValue} onChange={(event)=>setName(event.target.value)} class="form-control my-3" placeholder="Enter your Name" />
            <input defaultValue={props.EmailIDValue} onChange={(event)=>setEmailID(event.target.value)} class="form-control my-3" placeholder="Enter your EmailID" />
            <input defaultValue={props.PhoneNoValue} onChange={(event)=>setPhoneNo(event.target.value)} class="form-control my-3" placeholder="Is your PhoneNo" />
            <input defaultValue={props.ProblemeValue} onChange={(event)=>setProbleme(event.target.value)} class="form-control my-3" placeholder="Discuss your Probleme Here" />
            <button onClick={handleClick} class="btn btn-success my-3 d-block mx-auto" type="submit">{props.children}</button>
        </div>
    )
}

export default SupportForm;