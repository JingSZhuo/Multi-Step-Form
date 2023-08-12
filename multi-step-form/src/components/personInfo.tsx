import { useState } from "react";

interface PersonalInfoComponentProps{
    comp: () => void;
}

const PersonalInfoComponent: React.FC<PersonalInfoComponentProps> = ({comp}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const [nameErr, setNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [numberErr, setNumberErr] = useState(false);

    const handleNameChange = (event: any) => {
        setName(event.target.value);
    }
    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    }
    const handleNumberChange = (event: any) => {
        setNumber(event.target.value);
    }

    const handleSubmit = () => {
        if ((name.trim() === '' ) || (email.trim() === '') || (number.trim() === '')){
            if(name.trim() === ''){
                setNameErr(true);
            } else setNameErr(false);

            if (email.trim() === '') {
                setEmailErr(true);
            } else setEmailErr(false);

            if (number.trim() === ''){
                setNumberErr(true);
            } else setNumberErr(false);

            console.log('empty')
        } else {
            setNameErr(false); setEmailErr(false); setNumberErr(false);
            console.log('not empty')
            comp();
        }
    }

    return(
        <div className='flex flex-col'>
              <h2 className="text-2xl font-bold text-Marine-blue mt-3">Personal info</h2>
              <span className="mt-3 text-base text-Cool-gray">Please provide your name, email address, and phone number</span>
              <div className="flex flex-col mt-6">
                <div className="flex flex-row items-center justify-between">
                    <label htmlFor="name" className="text-sm">Name</label>
                    <p className={nameErr? 'err-display' : 'err-hidden'}>This field is required</p>
                </div>
                <input type="text" id="name" className="border border-l mt-1 px-4 py-2 rounded-md" onChange={handleNameChange} placeholder="e.g Stephen King"/>
              </div>
              <div className="flex flex-col mt-6">
                <div className="flex flex-row items-center justify-between">
                    <label htmlFor="email" className="text-sm">Email Address</label>
                    <p className={emailErr? 'err-display' : 'err-hidden'}>This field is required</p>
                </div>
                <input type="email" id="email" className="border border-l mt-1 px-4 py-2 rounded-md" onChange={handleEmailChange} placeholder="e.g stephenking@lorem.com"/>
              </div>
              <div className="flex flex-col mt-6">
                <div className="flex flex-row items-center justify-between">
                    <label htmlFor="number" className="text-sm">Phone Number</label>
                    <p className={numberErr? 'err-display' : 'err-hidden'}>This field is required</p>
                </div>
                <input type="number" id="number" className="border border-l mt-1 px-4 py-2 rounded-md" onChange={handleNumberChange} placeholder="e.g +1 234 567 890"/>
              </div>
              <div onClick={handleSubmit}>Next</div>
        </div>
    )
}

export default PersonalInfoComponent;