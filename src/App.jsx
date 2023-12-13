import './App.css';
import elephant from "./images/elephant.jpeg";

  let data = [
    {
      id:1,
      img:elephant,
      src:'./src/images/elephant.jpeg'
    },
    {
      id:2,
      img:elephant,
      src:'./src/images/elephant.jpeg'
    },
    {
      id:3,
      img:elephant,
      src:'./src/images/elephant.jpeg'
    },
    {
      id:4,
      img:elephant,
      src:'./src/images/elephant.jpeg'
    }
  ]

function App() {
  return(
    <>
    <div className='header'><p>Kalvium Gallery</p></div>
     <div>
      {data.map(item => (
        <img key={item.id} src={item.src} alt={item.img} />
      ))}
     </div>
    </>
  )
}

export default App;
