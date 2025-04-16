import './App.css'
import Ginger from './Ginger.jpg'

function TierCard() {
  return (
    <div className="App">
      <h1 className='App-Card'>Mein Hund Ginger</h1>
      <img src={Ginger} alt="Ginger" className='Bild'/>
    </div>
  )
}

export default TierCard;