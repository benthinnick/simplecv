import styled from "@emotion/styled";

export const List = styled.ul`
    margin: 0;
    padding: 0;
    margin-top: 0;
    margin-bottom: 0;
    font-family: "Arsenal";
`

const ListItem = styled.li`
    &:after {
        content: " | "
    };
    &:last-child:after {
        content: ""
    };
    display:inline;
    font-family: "Arsenal";
    margin-top: 0;
    margin-bottom: 0;
`


const Sequence = (props) => {
    return (<List>{
        props.children.map(item => (<ListItem>{item}</ListItem>))
    }</List>);
}

export default Sequence
