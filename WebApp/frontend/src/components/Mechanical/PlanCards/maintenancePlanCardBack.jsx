import './planCard.css'
import './flipCard.css'
import { useParams } from 'react-router-dom'

export default function PlanCardBack({ details }) {
  const { id } = useParams()

  // props assign
  const data = [details]

  return (
    <div>
      <div className="container">
        {data.map((data) => (
          <h3 className="cardTitle">{data.planName}</h3>
        ))}
        <hr className="cardHR" />
      </div>
      <div className="planID">
        <label>Plan ID</label>
        {data.map((data) => (
          <input defaultValue={data.planID} disabled />
        ))}

        <br></br>
        <h1>Description</h1>
      </div>
      <div className="planDetails description">
        {data.map((data) => (
          <p>{data.planDescription}</p>
        ))}
      </div>
    </div>
  )
}
