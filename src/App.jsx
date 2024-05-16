import "./App.css"

import Banner from "./components/Banner"

import api from "./assets/iimages/svg//api.svg"
import cloud from "./assets/iimages/svg/cloud.svg"
import flex from "./assets/iimages/svg//flex.svg"
import host from "./assets/iimages/svg//host.svg"
import mail from "./assets/iimages/svg//mail.svg"
import surv from "./assets/iimages//svg/surv.svg"


function App() {
   return (
    <body>
   
      <div className="card">
      <h1>React Course</h1>
      <p>Front-End Javascript</p>
     </div>
 
    <Banner titule="titulo" description="descriçao" image={api} />
    <Banner titule="titulo" description="descriçao" image={cloud} />
    <Banner titule="titulo" description="descriçao" image={flex} />
    <Banner titule="titulo" description="descriçao" image={host} />
    <Banner titule="meio de comunicação" description="email" image={mail} />
    <Banner titule="titulo" description="descriçao" image={surv} />
          
    </body>
   
  );
}

export default App;
