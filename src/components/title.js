import styled from "@emotion/styled";

const TitleBox = styled.div`
    display: flex;
    width: 100%;
`
const TitleText  = styled.p`
    font-size: 42px;
    text-align: center;
    font-family: "Garamond";
    letter-spacing: 0.1em;
    margin: auto;
`

const Title = (props) => {
    return <TitleBox><TitleText>{props.children}</TitleText></TitleBox>;
}

export default Title
