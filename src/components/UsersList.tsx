import React, { useState, useEffect } from 'react';
import './style/UsersList.css';

export interface GithubList {
	usersList: {
		items: [items]
	}
}

export interface items {
	html_url: string,
	avatar_url: string,
	login: string,
}

export const UsersList = ({ usersList }:GithubList) => {
	const [selectedItem, setSelectedItem] = useState(0);
	const [maxValue, setMaxValue] = useState(0);
	
	useEffect(() => {
		setSelectedItem(0);
		setMaxValue(usersList?.items?.length || 0);
	}, [usersList]);

	document.onkeydown = function(event) {
		switch (event.key) {
			case 'ArrowUp':
				if(selectedItem - 1<= maxValue &&  selectedItem - 1 >= 0) {
					setSelectedItem(selectedItem - 1);
				}
				break;
			case 'ArrowDown':
				if(selectedItem + 1<= maxValue) {
					setSelectedItem(selectedItem + 1);
				}
				break;
			case 'Enter':
				if(selectedItem !== 0) {
					window.open(usersList?.items[selectedItem - 1]?.html_url , "_blank");
				}
				break;
		}
	};
	return (
		<ul className="github-users">
			
			{ usersList && usersList?.items?.map((data:items,index:number):JSX.Element | null => {
				if (data) {
					return (
						<li key={data.login} className={selectedItem === index + 1 ? 'selected' : ''} onClick={() => window.open(data?.html_url , "_blank")}>
							<img src={data.avatar_url} />
							<p>{data.login}</p>
						</li>
					)
				}
				return null
			}) }
		</ul>
	);
}
