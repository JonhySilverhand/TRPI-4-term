import React, { useState } from 'react';

const AddButton = () => {
    const [showSquare, setShowSquare] = useState(false);

    const handleButtonClick = () => {
        setShowSquare(true);
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Add Square</button>
            {showSquare && <div style={{ width: '100px', height: '100px', background: 'red' }}></div>}
        </div>
    );
};

export default AddButton;
