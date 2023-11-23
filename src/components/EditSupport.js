import { useParams } from "react-router-dom";
import SupportForm from "./SupportForm";
import { useEffect, useState } from "react";
import Axios from "axios";

function EditSupport() {
    const { id } = useParams();
    const [initialValue, setInitialValue] = useState({ Name: "", EmailID: "", PhoneNo: "", Probleme: "" });
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        Axios.get("https://crud-deployment-backend-15pi.onrender.com/petRoute/update-Pet/" + id)
            .then((res) => {
                if (res.status === 200) {
                    const { Name,  EmailID , PhoneNo , Probleme} = res.data;
                    setInitialValue({ Name,  EmailID , PhoneNo , Probleme });
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }, [id])

    const getState = (childData) => {
        setNewData(childData);
    }

    const handleSubmit = () => {
        const data = { Name: newData[0], EmailID: newData[1], PhoneNo: newData[2],Probleme: newData[3] };
        Axios.put("https://crud-deployment-backend-15pi.onrender.com/petRoute/update-Pet/" + id, data)
            .then((res) => {
                if (res.status === 200)
                    alert("Record updated successfully")
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }
    return (
        <form onSubmit={handleSubmit}>
            <SupportForm getState={getState}
                NameValue={initialValue.Name}
                BreedValue={initialValue.Breed}
                VaccinatedValue={initialValue.Vaccinated}
                OwnerValue={initialValue.Owner}
                TrainedValue={initialValue.Trained}
                >
                    Update Support
            </SupportForm>
        </form>
    )
}
export default EditSupport;