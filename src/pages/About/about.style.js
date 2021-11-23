import styled from 'styled-components';

export const AboutSection = styled.div`
position: relative;
    height: 100%;
    width: 100%;
    background: ${props => props.theme.white};
    display: grid;
        grid-template-columns: 10% 48% 42%;
        grid-template-rows: 40vh 90vh;
`;

export const ImageContainer = styled.div`
    overflow: hidden;
    grid-column: 2/ 4;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 10rem;
    z-index: 2;
`;

export const TeamPic = styled.img`
    width: 100%;
    object-position: 0 7rem;
    object-fit: cover;
`;

export const LeftPane = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: yellow;
`;

export const LeftMain = styled.div`
    height: 100%;
    background: ${props => props.theme.white};
`;

export const RightMain = styled.div`
    height: 100%;
    background: ${props => props.theme.primary};
`;