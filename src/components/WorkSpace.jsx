import React from "react";
import Ticket from "./Ticket";

const WorkSpace = () => {
  return (
    <div>
      <div className="WorkSpaceContainer">
        
        <div className="WorkSpaceLeftSide">
          <div className="titleComponent">Имя заявки</div>
        </div>

        <div className="WorkSpaceRightSide">
          <div className="titleComponent">Статус</div>
        </div>
      </div>

      <Ticket />
    </div>
  );
};

export default WorkSpace;
