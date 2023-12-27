import './App.css';
import elephant from "./images/elephant.jpeg";

  let data = [
    {
      id:1,
      img:elephant,
    },
    {
      id:2,
      img:elephant,
    },
    {
      id:3,
      img:elephant,
    },
    {
      id:4,
      img:elephant,
    }
  ]
  const styles = {
    
  }

function App() {
  return(
    <>
    <div><h1>Kalvium Gallery</h1></div>
    <div>
      {data.map(item => (
      <img key={item.id} src={item.img} alt="" />
    ))}
    </div>
    </>
  )
}

export default App;
