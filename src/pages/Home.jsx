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

  let startPlants = [
    {
      plantName: 'Tomat',
      plantDate: '2023-04-05',
      url: 'https://images.unsplash.com/photo-1565195093469-82a4a4d00ed7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRvbWF0byUyMHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      assignee: 'Lucky the dog'
    },
    {
      plantName: 'Chili',
      plantDate: '2023-04-01',
      url: 'https://images.unsplash.com/photo-1614796703136-5d26c56f839a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNoaWxpJTIwcGxhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      assignee: 'Niclas chilli lover'
    },
    {
      plantName: 'Kattgräs',
      plantDate: '2023-04-03',
      url: 'https://images.unsplash.com/photo-1533460004989-cef01064af7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3Jhc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      assignee: 'Azmodan the cat'
    }
  ];

  const [plantInfo, setPlantInfo] = useState(startPlants);

  function addPlantInfo(e) {
    e.preventDefault();
    console.log('hej');
    let plantToAdd = {
      plantName: plantName,
      plantDate: plantDate,
      url: url,
      assignee: assignee
    }
    setPlantInfo([plantToAdd, ...plantInfo]);
    setPlantName('');
    setPlantDate('');
    setUrl('');
    setAssignee('');
  }

  function removePlant(e) {
    //Remove plant from plantInfo, move it to a new list? Show new list in Planterade plantor?
    console.log('removePlant function');
    
  }

  return (
    <section className={styles.wrapper}>
      <section className={styles.infoContainer}>
        <RoundImage image='https://images.unsplash.com/photo-1591857177593-aec16c2d8f60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dG9tYXRvJTIwcGxhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
        <section className={styles.textContainer}>        
          <h2>Säsong att så</h2>
          <p className={styles.infoText}>
          Våren är äntligen här i kollektivet! Lorem ipsum dolor sit amet
          consectetur. Sit venenatis arcu nunc consectetur neque. Vel amet netus
          amet eu elit.
          </p>
          <section className={styles.buttonContainer}>
          <PrimaryButton title='SÅ-TIPS' action={() => navigate('sowtips')} />
          </section>
        </section>
      </section>
      <section className={styles.dividerContainer}>
        <Divider />
        <h3>Lägg till planterade planteringar</h3>
      </section>
      <section className={styles.addContainer}>
        <section>
          <h4>Ny sådd:</h4>
          <LabeledInput title='Frönamn' placeholder='Tomat' type='text' action={setPlantName} value={plantName} />
          <LabeledInput title='URL, exempelbild' placeholder='https://images.unsplash.co..' type='url' action={setUrl} value={url} />
          <PrimaryButton title='LÄGG TILL' action={addPlantInfo} />
        </section>
        <section className={styles.dateAssigneeContainer}>
          <DatePicker title='Datum för sådd' action={setPlantDate} value={plantDate} />
          <LabeledInput title='Planterare' placeholder='Emma på 4an' type='text' action={setAssignee} value={assignee} />
        </section>
        < RoundImage image='https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRvbWF0byUyMHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
      </section>
      <section className={styles.dividerContainer}>
        <Divider />
        <h3>Våra planerade planteringar:</h3>
      </section>
      <section className={styles.cardContainer}>
        {
          plantInfo.map((plant, i) => <PlantCard key={i} plant={plant} action={removePlant} />)
        }
      </section>
      <section className={styles.plantedButtonContainer}>
        <PrimaryButton title='Planterade Plantor' action={() => navigate('/plantedplants')} />
      </section>
    </section>
  );
}

export default Home;
