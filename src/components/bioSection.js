import Sequence from "./sequence";
import BoldAndCapped from "./boldAndCapped"
import Box from "./box"
import { List } from "./sequence"
import styled from "@emotion/styled";

const Ul = styled.ul`
    font-family: "Arsenal";
`

const BioSection = (props) => {
    let bioSection = props.children.map((item) => {

        let position = item.position;

        let jobData = []

        let endDate = item.endDate != "" ? item.endDate : "нынешнее время";
        jobData.push(item.company)
        jobData.push(item.location)
        jobData.push(item.startDate + " - " + endDate)

        return (
            <div>
                <Box>
                    <BoldAndCapped>{position}</BoldAndCapped>
                    <Sequence>{jobData}</Sequence>
                </Box>
                <Ul>{
                    item.tasks.map(item => (<li>{item}</li>))
                }</Ul>
            </div>)
    })
    return <div>{bioSection}</div>
}
export default BioSection
