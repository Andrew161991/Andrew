import WeyToTeach from "./WayToTeach"
import { ways } from '../data'

export default function TeachingSection(){
    return(
        <section>
        <h3>Наш подход к обучению</h3>
        <ul>
          {ways.map(way => <WeyToTeach {... way} key={way.title}/> )}
        </ul>
      </section>
    )
}