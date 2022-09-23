import React from "react";

const Card = ({todo , index}) => {

    const {task , description} = todo;

  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
  ];

  return (
    <div className="card-wrapper m-3">
      <div className="card-top" style={{"backgroundColor": colors[index%5].primaryColor}}></div>
      <div className="task-holder">
        <span className="card-heading" style={{"backgroundColor": colors[index%5].secondaryColor}}>{task}</span>
        <p className="mt-3 p-3">{description}</p>

        <div className="task-icons" style={{"color": colors[index%5].primaryColor}}>
          <i className="uil uil-edit task-icon"></i>
          <i className="uil uil-trash-alt task-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
