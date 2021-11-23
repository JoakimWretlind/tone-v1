import {
    AboutSection,
    ImageContainer,
    LeftPane,
    LeftMain,
    RightMain,
    TeamPic
} from "./about.style"
import Team from '../../assets/images/note.jpg';

const About = () => {
    return (
        <AboutSection>
            <ImageContainer>
                <TeamPic src={Team} />
            </ImageContainer>
            <LeftPane>
            </LeftPane>
            <LeftMain>
                <h1>about</h1>
            </LeftMain>
            <RightMain></RightMain>
        </AboutSection>
    )
}

export default About
