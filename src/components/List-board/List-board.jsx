import React from "react";
import PropTypes from "prop-types";
import './List-board.css';

const ListBoard = (props) => {
  const { listData } = props;
  return (
    <div className="lists__list list mr-5">
      <div className="list-header">
        <h3 className="list-header__title">{listData.listName}</h3>
        <div className="list__card-list card-list">
          <div className="card-list__card card">
            <input type="text" />
            <img
              className="card__icon-edit"
              src="images/pencil-alt-solid.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ListBoard.propTypes = {
  listData: PropTypes.shape({
    listName: PropTypes.string.isRequired,
  }),
};

export default ListBoard;
