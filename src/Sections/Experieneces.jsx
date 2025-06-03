import { Timeline } from "../Components/Timeline"
import {experiences} from "../Constants"

const Experieneces = () => {
  return (
    <section className="relative c-space section-spacing">
      <h2 className="text-heading">Experiences</h2>
      <div className="w-full">
        <Timeline data={experiences} />
      </div>
      </section>
  )
}

export default Experieneces