import Result from './components/result';
import Input from './components/input';
import Button from './components/button';
import {useState} from 'react';

function PTB2(props) {

    const [result, setResult] = useState('');
    const [namea, setnamea] = useState(0);
    const [nameb, setnameb] = useState(0);
    const [namec, setnamec] = useState(0);

    let geta = (event) => {
        let valA = event.target.value;
        setnamea(valA);
    }

    let getb = (event) => {
        let valB = event.target.value; 
        setnameb(valB);
    }
    
    let getc = (event) => {
        let valC = event.target.value; 
        setnamec(valC);
    }

    let delta = () => {
        let del = nameb * nameb - (4*namea*namec);
        console.log(del);
        if(del < 0) {
            setResult('phuong trinh vo nghiem');
        }

        else if(del > 0) {
            setResult(`co 2 nghiem phan biet x1 = ${(-nameb + Math.sqrt(del))/2*namea } , x2 = ${(-nameb - Math.sqrt(del))/2*namea }`);
        }
        else
        {
            setResult(`co 2 nghiem kep x1 = x2 = ${(-nameb/2*namea)}`);
        }
    }


    return (
        <>
            <Input getvalue={geta}  type='number' name={namea} />
            <Input getvalue={getb} type='number' name={nameb} />
            <Input getvalue={getc} type='number' name={namec} />
            <Button result={delta}>Result</Button>
            <Result result={result} />

        </>
    )
}

export default PTB2;