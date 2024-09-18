import seriesData from "../api/seriesData.json";
import {SeriesCard} from "./SeriesCard";

const  NetflixSeries = () => {  // this netflix is the partents components 
  return (
<ul>
    {seriesData.map((curElem)=>( 
 <SeriesCard key={curElem.id} curElem={curElem} />  // this is the curElem is the props where we transfer data to the porps 
    ))
}
        </ul>
   
  )
}

export default NetflixSeries


