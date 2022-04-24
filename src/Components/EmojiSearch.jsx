import React,{useState} from 'react';
import EmojiData from "./data";

export default function EmojiSearch() {
  const [search, setSearch] = useState('');

  function handleSubmit(e) {
      e.preventDefault();
     console.log(search);
  }
    return (
      <div className='search'>
          <form onSubmit={handleSubmit}>
              <input type="search" placeholder="Search your Emoji here..." value={search} onChange={(e)=>setSearch(e.target.value)}/>
              <button type="submit">Search</button>
          </form>
          {EmojiData.filter((val)=>{
              if(search === ''){
                  return val;
              } else if(val.keywords.toLowerCase().includes(search.toLowerCase())){
                  return val;
              }
          }).map((data, key) => {
            return <div className='display'><div className='item' key={key}>{data.symbol}</div></div>;
          })}
      </div>
    )
}
