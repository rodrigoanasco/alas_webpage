import viteLogo from '../assets/react.svg'
import ProfileCard from './Components/ProfileCard'

function AboutUs(){
    return(
        <>
        {/*Start with title*/}
        <h1>About us</h1>

        {/*First square mentioning the role of someone and all of that*/}
        <table>
            <tr>
                <td>
                    <ProfileCard
                    role={"Director of Web"}
                    name={"Rodrigo Anasco"}
                    description={"I like to eat"}
                    image={viteLogo}
                    />
                </td>
                <td>
                    <ProfileCard
                    role={"President"}
                    name={"Paiton Pires"}
                    description={"Peru>Chile"}
                    image={viteLogo}
                    />
                </td>
            </tr>

        </table>









        </>
    )
}

export default AboutUs