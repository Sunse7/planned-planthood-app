import styles from './Home.module.css';
import { useNavigate } from "react-router-dom";
import Divider from "../Components/Divider";
import LabeledInput from "../Components/LabeledInput";
import PlantCard from "../Components/PlantCard";
import PrimaryButton from "../Components/PrimaryButton";
import RoundImage from "../Components/RoundImage";
import { useState } from "react";
import DatePicker from "../Components/DatePicker";

function Home() {
  const navigate = useNavigate();
  const [plantName, setPlantName] = useState('');
  const [plantDate, setPlantDate] = useState('');
  const [url, setUrl] = useState('');
  const [assignee, setAssignee] = useState('');
  const [plantInfo, setPlantInfo] = useState([]);
  const [date, setDate] = useState('');


  //Ska man ha några start plantor i listan?

  function addPlantInfo(e) {
    e.preventDefault();
    console.log('hej');
    let plantToAdd = {
      plantName: plantName,
      plantDate: plantDate,
      url: url,
      assignee: assignee
    }
    setPlantInfo(plantToAdd, ...plantInfo);
  }

  return (
    <section className={styles.section}>
      <section>
        <RoundImage image='https://images.unsplash.com/photo-1591857177593-aec16c2d8f60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dG9tYXRvJTIwcGxhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
        <section>        
          <h2>Säsong att så</h2>
          <p>
          Våren är äntligen här i kollektivet! Lorem ipsum dolor sit amet
          consectetur. Sit venenatis arcu nunc consectetur neque. Vel amet netus
          amet eu elit.
          </p>
          <PrimaryButton title='SÅ-TIPS' action={() => navigate('sowtips')} />
        </section>
      </section>
        <Divider />
        <h2>Lägg till planterade planteringar</h2>
        <RoundImage image='https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRvbWF0byUyMHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
        <h4>Ny sådd:</h4>
        <LabeledInput title='Frönamn' placeholder='Tomat' type='text' action={setPlantName} value={plantName} />
        <DatePicker title='Datum för sådd' action={setPlantDate} value={plantDate} />
        <LabeledInput title='URL, exempelbild' placeholder='https://images.unsplash.co..' type='url' action={setUrl} value={url} />
        <LabeledInput title='Planterare' placeholder='Emma på 4an' type='text' action={setAssignee} value={assignee} />
        <PrimaryButton title='LÄGG TILL' action={addPlantInfo} />
        <Divider />
        <h4>Våra planerade planteringar:</h4>
        <PlantCard /> {/*Mappa ut korten, om listan är tom visa: "Det finns inga planerade planteringar än"*/}
        <PrimaryButton title='Planterade Plantor' action={() => navigate('/plantedplants')} />
    </section>
  );
}

export default Home;
