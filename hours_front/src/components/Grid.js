import React, { Component } from 'react';

import Field from './Field';

let fields = [];

export default class Grid extends Component {
  render() {
    console.log(this.props.grid);
    getGridInfo(this.props.grid);

    return (
      <div>
        {fields.map((element) => {
          <Field data={element} />;
        })}
      </div>
    );
  }
}

async function getGridInfo(grid) {
  const res = await fetch('http://localhost:30300/grid/0');
  const json = await res.json();

  // console.log(json);

  fields = json.map((data) => {
    return {
      id: data.id,
      name: data.name,
      caption: data.caption,
      width: data.width,
      align: data.align,
    };
  });

  console.log(fields);
}

class field extends Component {}
