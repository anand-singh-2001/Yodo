import React, { useState } from "react";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

  const [searchTerm,setSearchTerm]= useState('')

  const navigate=useNavigate()
  
  const handleSubmit=(e)=>{
    e.preventDefault()

    if(searchTerm){
      navigate(`/search/${searchTerm}`)

      setSearchTerm('')
    }
  }
  return (
    <Paper
      component="form"
      onSubmit={(e) => handleSubmit(e)}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        me: { sm: 5 },
      }}>
      {" "}
      {/**pl is shortform for padding left, we can use shortforms using sx. */}
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        sx={{border:'none'}}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{p: '10px', color:'red'}}>
        <Search/>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
