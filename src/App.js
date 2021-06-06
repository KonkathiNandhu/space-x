import Header from "./Components/Header";
import Launchescontainer from "./Components/Launchescontainer";

function App() {
  return (
    <div className="App">
     <Header />
     <Launchescontainer image="https://tvseriescritic.files.wordpress.com/2016/10/stranger-things-bicycle-lights-children.jpg"
     rocket_name="Jane Doe" mission_name="FalconSat"
     details="Engine failure at 33 seconds and loss of vehicle"
     launch_date_local= "2006-03-25T10:30:00+12:00"/>
    </div>
  );
}

export default App;