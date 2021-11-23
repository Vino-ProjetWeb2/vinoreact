import { Button, ButtonBackUp } from '../components/styles/Button.styled';
import { Input } from '../components/styles/Input.styled';


const TestStyle = () => {


    const test = () => {
        console.log('test');
    }

    return (
        
        <div>
            <Button  onClick={()=>test()} bg="#fff" color="#303031" colorHover='#fff' bgHover="#303031">AJOUTER</Button>
            <Button bg="#303031" color="#fff">BOIRE</Button>
            <Input placeholder="Nom Usager"></Input>
            <ButtonBackUp></ButtonBackUp>
        </div>
    )
}

export default TestStyle;