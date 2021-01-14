import React from 'react';

type SearchProps = {
	input: string,
	onChange(value:string): void,
}

export const SearchBar = ({input,onChange}:SearchProps) => {
	const BarStyling = {width: "100%", background: "white", border: "1px solid #999",  padding: "0.5rem",  height: "40px", fontSize: "20px"};
	return (
		<input
			style={BarStyling}
			key="random1"
			value={input}
			placeholder={"Search a profile"}
			onChange={(event) => onChange(event.target.value)}
		/>
	);
}