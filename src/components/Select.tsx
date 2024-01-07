import React from 'react';

import { SelectType } from '../types';

const Select = ({ handleClick, pokemon, children }: SelectType) => {
	return <button onClick={() => handleClick(pokemon)}>{children}</button>;
};

export default Select;
