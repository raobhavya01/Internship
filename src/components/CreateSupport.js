import { useState } from "react";
import SupportForm from "./SupportForm";
import Axios from "axios";

function CreateSupport()
{
    const [arr,setArr] = useState([]); //arr=[Raj,raj@gmail.com,1]

    //Declaring a argument function
    const getState = (childData) => { //childData=[Raj,raj@gmail.com,1]
        setArr(childData);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {Name: arr[0],EmailID:arr[1],PhoneNo:arr[2],Probleme:arr[3]};
        Axios.post("https://crud-deployment-backend-15pi.onrender.com/petRoute/create-Pet",data)
        .then((res)=>{
            if(res.status === 200)
                alert("Record added successfully");
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
        event.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <SupportForm getState={getState}
                    NameValue=""
                    EmailIDValue=""
                    PhoneNoValue=""
                    ProblemeValue="">
                Create Support
            </SupportForm>
        </form>
    )
}
export default CreateSupport;