import React, { useState } from "react";
import * as S from "./styles";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
type Props = {};

const SearchBar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleOpenBar = () => {
    setIsOpen(true);
  };

  const handleCloseBar = () => {
    setIsOpen(false);
    console.log(isOpen);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    navigate(`/search?q=${search}`);
  }

  return (
    <S.Wrapper
      onClick={() => {
        !isOpen && handleOpenBar();
      }}
      className={`${isOpen && "isOpen"}`}
    >
      <IoSearchOutline
        className="searchBar__icon"
        onClick={() => {
          isOpen && handleCloseBar();
        }}
      />
      {isOpen && (
        <form onSubmit={handleSubmit}>
          <S.Input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </form>
      )}
    </S.Wrapper>
  );
};

export default SearchBar;
