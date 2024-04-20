import React, {useState} from 'react';


function TestComponent() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);

    const updateName = () => {
        setName("Spongebob");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    return(
        <div className='useStateDemo'>
            <p className='nameText'>Name: {name}</p>
            <button className="updateNameButton" onClick={updateName}>Set Name</button>

            <p className='ageTest'>Age: {age}</p>
            <button className='incrementAgeButton' onClick={incrementAge}>Increment Age</button>
        </div>
    );

}

export default TestComponent;