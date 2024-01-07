import React, { FC } from 'react';

import { SelectType } from '../types';

const Select: FC<SelectType> = ({ handleClick, pokemon, children }) => {
	return <button onClick={() => handleClick(pokemon)}>{children}</button>;
};

export default Select;
