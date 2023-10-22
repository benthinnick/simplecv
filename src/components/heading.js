import styled from "@emotion/styled"

const Line = styled.h2`
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #000;
    line-height: 0.1em;
    margin 10px 0 20px;
    font-family: "Garamond";
`
const HeadingText = styled.span`
    background: #fff;
    padding: 0 10px;
    letter-spacing: 0.1em;
`

const Heading = (props) => {
    return <Line><HeadingText>{props.children}</HeadingText></Line>;
}
export default Heading
