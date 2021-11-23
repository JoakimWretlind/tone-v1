import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { motion } from "framer-motion";
import {
    HomeSection,
    LeftPane, LeftPaneOverlay, LeftHRTop, SocialBox, LeftHRBottom, TextBox,
    MidLeft, TopContainer, BottomContainer, H1, H2, HR, P, Button,
    MidRight, ImgContainer, Img, OverlayTop, OverlayBottom

} from './home.style';
import { AiFillLinkedin, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";
import Img1 from '../../assets/images/img-1.jpg'
import Img2 from '../../assets/images/img-2.jpg'


const Home = () => {
    const topRef = useRef(null);
    const bottomRef = useRef(null);
    const lineRef = useRef(null);
    const overLayTopRef = useRef(null);
    const overLayBottomRef = useRef(null);
    const leftPaneRef = useRef(null);

    // Text with Framer-motion
    const line1 = "This page is created with my friend at Note design studio in mind.";
    const line2 = "To visit them, click the button below."

    const letter = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 2, staggerChildren: 0.08, }
        /*
        initial: { opacity: 0, y: 50 },
        transition: { delay: 2 },
        visible: { opacity: 1, y: 0 }
        */
    }

    useEffect(() => {
        let tl = gsap.timeline();
        tl.from(lineRef.current, 1.5, { width: "0" }, 0.5);
        tl.from(bottomRef.current, 1.5, { bottom: "-45rem" }, "<");
        tl.from(topRef.current, 1.5, { top: "40rem" }, "<");
        tl.from(overLayTopRef.current, 1.5, { height: "50%" }, "<0.5");
        tl.from(overLayBottomRef.current, 1.5, { height: "50%" }, "<");
        tl.from(leftPaneRef.current, 1.5, { height: "54vh" }, "<0.5 ")
    }, []);

    return (
        <HomeSection>
            <LeftPane>
                <LeftPaneOverlay ref={leftPaneRef} />
                <LeftHRTop />
                <SocialBox>
                    <AiFillLinkedin className="socialIcon" />
                    <AiFillInstagram className="socialIcon" />
                    <AiFillTwitterSquare className="socialIcon" />
                </SocialBox>
                <LeftHRBottom />
            </LeftPane>
            <MidLeft>
                <TopContainer>
                    <H1 ref={topRef}>Tone</H1>
                </TopContainer>
                <HR ref={lineRef} />
                <BottomContainer>
                    <H2 ref={bottomRef}>design studio</H2>
                </BottomContainer>
                <TextBox >
                    {line1.split("").map((char, i) => (
                        <P as={motion.span}
                            key={char + "-" + i}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ staggerChildren: 1 }}
                        >
                            {char}
                        </P>
                    )
                    )}
                    <br />
                    {line2.split("").map((char, index) => {
                        return (
                            <P as={motion.span}
                                key={char + "-" + index}
                                variants={letter}
                            >
                                {char}
                            </P>
                        )
                    })}
                </TextBox>
                <Button>Note</Button>
            </MidLeft>
            <MidRight>
                <ImgContainer>
                    <Img src={Img2} alt="livingroom from above" />
                    <OverlayTop ref={overLayTopRef} />
                    < OverlayBottom ref={overLayBottomRef} />
                </ImgContainer>
            </MidRight>
        </HomeSection>
    )
}

export default Home
