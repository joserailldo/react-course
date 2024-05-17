import "./styles.css"

import ChevronRight from "../../assets/iimages/svg/chevron-right.svg"
import EmptyState from "../../assets/iimages/svg/empty-state.png"

export default function Layout(props) {
  return (
    <div className="layout-container">
      <div className="layout-content">
        <div className="layout-description">
          <div className="layout-text">
            <h4>{props.tag}</h4>
            <h1>{props.tag}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
          </div>
          <div className="layout-button">
            <button className="button-box">Leia mais</button>
            <button className="button-link">
              <p>Documentação</p>
              <img src={ChevronRight} alt="" />
            </button>
          </div>
        </div>
        <img src={EmptyState} alt="" />
      </div>
    </div>
  )
}