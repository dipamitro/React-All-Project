// ForIconInput.js
import React from 'react';
import { IconContext } from 'react-icons';
import { InputGroup, FormControl } from 'react-bootstrap';

const ForIconInput = ({ name, icon: Icon, placeholder, ...props }) => {
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>
            <Icon />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          name={name}
          placeholder={placeholder}
          {...props}
        />
      </InputGroup>
    </div>
  );
};

export default ForIconInput;
