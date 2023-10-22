import styled from "@emotion/styled"
import Sequence from "./sequence"

const Div = styled.div`
    display: flex;
    align-content: center;
`
const Inner = styled.span`
    margin: auto;
`
const Footer = (props) => {
    let sequence = []
    sequence.push(props.children.tel)
    sequence.push(props.children.email)
    sequence.push(props.children.address)
    return <Div><Inner><Sequence>{sequence}</Sequence></Inner></Div>;

}

export default Footer
