import Divider from "../Components/Divider";
import LabeledInput from "../Components/LabeledInput";
import PlantCard from "../Components/PlantCard";
import PrimaryButton from "../Components/PrimaryButton";
import RoundImage from "../Components/RoundImage";

function Home() {
  return (
    <section>
        <RoundImage image='https://images.unsplash.com/photo-1591857177593-aec16c2d8f60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dG9tYXRvJTIwcGxhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
        <h2>Säsong att så</h2>
        <p>
        Våren är äntligen här i kollektivet! Lorem ipsum dolor sit amet
        consectetur. Sit venenatis arcu nunc consectetur neque. Vel amet netus
        amet eu elit.
        </p>
        <PrimaryButton title='SÅ-TIPS' />
        <Divider />
        <h2>Lägg till planterade planteringar</h2>
        <RoundImage image='https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRvbWF0byUyMHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
        <h4>Ny sådd:</h4>
        <LabeledInput title='Frönamn' placeholder='Tomat' type='text' />
        <LabeledInput title='Datum för sådd' placeholder='' type='date' />
        <LabeledInput title='URL, exempelbild' placeholder='https://images.unsplash.co..' type='url' />
        <LabeledInput title='Planterare' placeholder='Emma på 4an' type='text' />
        <PrimaryButton title='LÄGG TILL' />
        <Divider />
        <h4>Våra planerade planteringar:</h4>
        <PlantCard /> {/*Mappa ut korten, om listan är tom visa: "Det finns inga planerade planteringar än"*/}
        <PrimaryButton title='Planterade Plantor' /> {/*En navigate to här? Till en ny page PlantedPlants */}
    </section>
  );
}

export default Home;
