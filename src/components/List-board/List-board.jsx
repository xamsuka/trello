import React from "react";

const ListBoard = (props) => {
  return (
    <div className="lists__list list col-xl-3">
      <div className="list-header">
        <h3 className="list-header__title">TODO</h3>
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

export default ListBoard;
