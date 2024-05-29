import "./styles.css"
import { Team } from "./src/pattern/composition"

const TeamUsers = [
    {
        image: "https://dribbble.com/",
        name: "JoseRaildo",
        role: "Estudante",
        description: "Administrador",
            SocialMedias: {
                linkedin: "https://br.linkedin.com//",
                x:"https://x.com/?lang=pt-br&mx=2/",
                dribble: "https://dribbble.com/",
            }
    },

]


export default function TeamComposition() {
    return (
        <div className="team-container">
            <Team.Section />
<div className="team-content-wrapper">
        {
           TeamUsers.map((user, key)=>{
            return (
                <Team.Content
                key={key}
                image={user.image}
                name={user.name}
                role={user.role}
                description={user.description}
                linkedin={user.socialMedialinkedin}
                x={user.socialMediasx}
                dribble={user.socialMediadribble}
                />
            )
           })}
</div>           
            <Team.Main />
        </div>
    )
}