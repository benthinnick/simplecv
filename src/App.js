import './App.css';
import Heading from './components/heading';
import Section from './components/section';
import SkillSection from './components/skillSection';
import content from "./data.json"
import BioSection from './components/bioSection';
import EduSection from './components/educationSection';
import Footer from './components/footer';
import Title from './components/title';
import styled from '@emotion/styled';
import AchievSection from './components/achievementSection';

const VerticalBox = styled.div`
    display: flex;
    flex-direction: column;
`
const Heading2 = styled.h2`
    text-align:center;
    font-family: "Garamond";
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

function App() {
    return (
        <div>
            <Container>
                <VerticalBox>
                    <Title>{content.name}</Title>
                    <Footer>{content.contacts}</Footer>
                </VerticalBox>
                <Section>
                    <Heading>Навыки</Heading>
                    <SkillSection>{content.skills}</SkillSection>
                </Section>
                <Section>
                    <Heading>Опыт Работы</Heading>
                    <BioSection>{content.workExperience}</BioSection>
                </Section>

                <Section>
                    <Heading>Достижения и Сертификаты</Heading>
                    <AchievSection>{content.achievements}</AchievSection>
                </Section>

                <Section>
                    <Heading>Образование</Heading>
                    <EduSection>{content.education}</EduSection>
                </Section>
            </Container>
        </div>
    );
}

export default App;
