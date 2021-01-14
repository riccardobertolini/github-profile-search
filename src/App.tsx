import React, { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { UsersList, items } from './components/UsersList';
import './style/App.css';

interface defaultList {
    items: [
        items
    ],
}

export const App = () => {
  const [input, setInput] = useState('');
  const [githubUserList, setGithubUserList] = useState<defaultList>();
  
  const fetchData = async (input:string) => {
    return await fetch(`https://api.github.com/search/users?q=${input}&per_page=20&page=1`)
        .then(response => response.json())
        .then(data => {
            setGithubUserList(data)
        });
  }

  const updateSearch = async (input:string) => {
    fetchData(input)
    setInput(input);
  }
  
  
    return (
      <div className={'app'}>
        <img src={'/github_logo.png'} alt="GitHub Logo" />
        <h1>Users search</h1>
          <p>Navigate using keyboard arrow ↑ and ↓, then press ENTER to open the profile link, or just click on it.</p>
        <SearchBar
            input={input}
            onChange={updateSearch}
        />
          {githubUserList && <UsersList usersList={githubUserList} />}
          <div className="credit">Made with 🖤 by <a href={"https://github.com/riccardobertolini/"}>riccardobertolini</a></div>
      </div>
  );
}

export default App;
