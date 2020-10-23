import React from "react";
import PropTypes from 'prop-types';
import ListBoard from "../List-board/List-board.jsx";
import "./Lists-board.css";

const ListsBoard = (props) => {
  const { listsData } = props;

  return (
    <div className="page-main__list lists row flex-nowrap">
      {listsData.map((list, index) => {
        return <ListBoard listData={list} key={`${list.listName} ${index}`} />
      })}
      <div className="lists__card-add">
        <button type="button">Add new card</button>
      </div>
    </div>
  );
};

ListBoard.propTypes = {
  listsData: PropTypes.arrayOf(PropTypes.shape({
    listName: PropTypes.string.isRequired,
  })),
};

export default ListsBoard;
