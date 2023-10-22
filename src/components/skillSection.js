import Sequence from "./sequence"
import BoldAndCapped from "./boldAndCapped";
import Box from "./box";

const SkillSection = (props) => {
    let skillGroups = props.children.map((element) =>
        <Box>
            <BoldAndCapped>{element.skillType}</BoldAndCapped>

            <Sequence>{element.skills}</Sequence>
        </Box>
    );

    return (
        <div>
            {skillGroups}
        </div>)
}

export default SkillSection
