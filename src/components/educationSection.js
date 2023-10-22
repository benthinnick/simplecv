import styled from "@emotion/styled";
import BoldAndCapped from "./boldAndCapped";
import Normal from "./normal";

import Box from "./box"


const EduSection = (props) => {
    let eduSection = props.children.map((item) => {
        let degreeAndMajor = item.degree + " " + item.specialty;
        let univerSityAndCity = item.school;
        let endDate = item.endYear != "" ? item.endYear : "нынешнее время";

        return (<Box>
            <div>
                <BoldAndCapped>{degreeAndMajor}</BoldAndCapped>
                <Normal>{univerSityAndCity}</Normal>
            </div>
            <Normal>{item.startYear + " - " + endDate}</Normal>
        </Box>);
    })

    return (
       <div>{eduSection}</div>
    )
}

export default EduSection
