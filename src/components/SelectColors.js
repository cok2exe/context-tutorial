// 함수형
import React, { useContext } from "react";
import ColorContext from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColors = () => {
  const { actions: {setColor, setSubcolor} } = useContext(ColorContext);
  return (
    <div>
      <h2>색상을 선택하세요</h2>
      <div style={{ display: "flex" }}>
        {colors.map(color => (
          <div
            key={color}
            style={{
              backgroundColor: color,
              width: "24px",
              height: "24px",
              cursor: "pointer"
            }}
            onClick={() => setColor(color)}
            onContextMenu={e => {
              e.preventDefault(); // 마우스 오른쪽 버튼 클릭 시 메뉴가 뜨는 것을 무시함
              setSubcolor(color);
            }}
          />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default SelectColors;

// 클래스형
/*
import React, { Component } from "react";
import ColorContext from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

class SelectColors extends Component {
  static contextType = ColorContext;

  handleSetColor = color => {
    this.context.actions.setColor(color);
  };

  handleSetSubcolor = subcolor => {
    this.context.actions.setSubcolor(subcolor);
  };

  render() {
    return (
      <div>
        <h2>색상을 선택하세요.</h2>
        <div style={{ display: "flex" }}>
          {colors.map(color => (
            <div
              key={color}
              style={{
                backgroundColor: color,
                width: "24px",
                height: "24px",
                cursor: "pointer"
              }}
              onClick={() => this.handleSetColor(color)}
              onContextMenu={e => {
                e.preventDefault();
                this.handleSetSubcolor(color);
              }}
            />
          ))}
        </div>
        <hr />
      </div>
    );
  }
}

export default SelectColors;
*/
