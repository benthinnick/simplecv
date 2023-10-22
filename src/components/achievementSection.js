import BoldAndCapped from "./boldAndCapped"
import Box from "./box"
import Sequence from "./sequence"

const AchievSection = (props) => {
    let achievSection = props.children.map((item) => {

        let seq = [];
        seq.push(item.location);
        seq.push(item.date);
        return (
            <Box>
                <BoldAndCapped>{item.description}</BoldAndCapped>
                <Sequence>{seq}</Sequence>
            </Box>)
    })

    return <div>{achievSection}</div>
}

export default AchievSection
