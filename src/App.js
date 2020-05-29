import React, { useEffect, useState} from "react";
import axios from "axios"
import MainPicture from './MainPicture/MainPicture'
import SidePictureBar from './SidePictureBar/SidePictureBar'
import PictureInfo from "./MainPicture/PictureInfo";

function App() {
  const [picturesInfo, setPicturesInfo] = useState('')
  const [pictureShow, setPictureShow] = useState(0)
  const [dayToShow, setDayToShow] = useState(["2020-5-26", "2020-5-25", "2020-5-24", "2020-5-23", "2020-5-22", "2020-5-21"])
  
 
  
  useEffect(()=> {
    axios.all(dayToShow.map(el => {
      return axios.get(`https://api.nasa.gov/planetary/apod?api_key=cgfYvqOxN5NfUqq5wFuzgLu93yenaQQBApHhtgJX&date=${el}`)
    }))
    .then(axios.spread((...response) => {
      setPicturesInfo(response)
      setPictureShow(response[0].data)
      
    }))
  },dayToShow)
  
  if(picturesInfo === '') {
    return "loading..."
  } else {
    return (
      <div className="App flex m-auto">
        <SidePictureBar InfoPicture={picturesInfo} PictureToShow={setPictureShow} SetDayToShow={setDayToShow}/>
        <MainPicture PictureToShow={pictureShow}/>
      </div>
    );
  }
  
}

export default App;
