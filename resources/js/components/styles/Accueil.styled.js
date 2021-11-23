import styled from 'styled-components'


export const AccueilMain = styled.main`
    height: 100vh;
    overflow: hidden;
    display:flex;
    flex-direction: column;
    font-family: 'Gotham Black';
    font-size: 1.2rem;
    font-weight: 300;
    justify-content:center;
    position: relative;

    h2 {
        text-align: center;
        align-self:center;
        margin-left:40px;
        margin-right:40px;

    }
    img:nth-of-type(1) {
        position:absolute;
        top:-40px;
    }

    //bouteille
    img:nth-of-type(2) {
        max-width:50px;
        align-self:center;
        margin-top:20px;
    }

    // logo vino
        img:nth-of-type(3) {
        margin-top:20px;
        max-width:25%;
        min-widht:40px;
        align-self:center;
    }

    select{
        align-self:center;
        max-width:75%;
    }

    img:nth-of-type(4) {
        position:absolute;
        bottom:-60px;
    }



`