import styled from 'styled-components';

export const HomeSection = styled.section`
    height: 92vh;
    width: 100%;
    background: ${props => props.theme.white};
    display: grid;
        grid-template-columns: 10% 48% 42%;
`;

/** FAR LEFT **/
export const LeftPane = styled.div`
    position: relative;
    height: 92vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LeftPaneOverlay = styled.div`
    position: absolute;
    bottom: 19vh;
    left: 50%;
    transform: translateX( -50%);
    height: 0;
    width: 4vw;
    background: ${props => props.theme.white};
`;

export const LeftHRTop = styled.hr`
    height: 30vh;
    border: .1rem solid rgba(0,0,0,.3);
    
`;

export const LeftHRBottom = styled.hr` 
    height: 10vh;
    border: none;
    width: .1rem;
    background: rgba(0,0,0,.2);
`;

export const SocialBox = styled.div`
    height: 14vh;
    width: min-content;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 2rem;
`;

/** MID LEFT **/
export const MidLeft = styled.div` 
    position: relative; 
    padding-right: 7rem;
    height: 92vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TopContainer = styled.div`
    position: relative;
    height: 21.8rem;
    width: 110%;
    overflow: hidden;
`;

export const BottomContainer = styled.div`
    position: relative;
    height: 7rem;
    width: 100%;
    overflow: hidden;
`;

export const H1 = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: clamp(5rem, 30vw, 26rem);
    text-transform: uppercase;
    letter-spacing: 2rem;    
    font-weight: 500;
`;

export const H2 = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: clamp(2rem, 4vw, 2.6rem);
    letter-spacing: 4rem;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
    font-weight: 300;
`;

export const HR = styled.hr`
    height:.1rem;
    border: none;
    width: 42vw;
    background: rgba(0,0,0,.5);
`;

export const TextBox = styled.div`
    margin: 4rem 0 4rem;
    text-align: center;
`;

export const P = styled.p`
    margin: 2rem 0;
    font-size: clamp(1.4rem, 3vw, 2rem);
    letter-spacing: .1rem;
    font-weight: 200;
    text-align: center;
`;

export const Button = styled.span`
    background: ${props => props.theme.black};
    color: ${props => props.theme.white};
    padding: 1rem 6rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: .5rem;
    border-radius: .3rem;
`;

/** MID RIGHT **/
export const MidRight = styled.div`
    height: 90vh;
    padding: 5vh 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ImgContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Img = styled.img`
    width: 100%;
    object-fit: contain;
`;

export const OverlayTop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    height: 0;
    width: 100%;
    background: ${props => props.theme.white};
`;

export const OverlayBottom = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    overflow: hidden;
    height: 0;
    width: 100%;
    background: ${props => props.theme.white};
`;
