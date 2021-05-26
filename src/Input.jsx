import React from 'react';

function Input({ type, name, placeholder }) {
    return (
        <div>
           <input
                type={type}
                name={name}
                className="mdc-textfield__input"
                placeholder={placeholder}
                required                
            />
        </div>
    );
}

export default Input;