import React, { Component } from 'react';

import Field from './Field';

let fields = [];

export default class Grid extends Component {
  render() {
    console.log(this.props.grid);
    getGridInfo(this.props.grid);

    const item = [];

    for (let index = 0; index < fields.length; index++) {
      item.push(
        <Field
          name={fields[index].name}
          caption={fields[index].caption}
          width={fields[index].width}
          align={fields[index].align}
        />
      );
    }

    return <div>{item}</div>;
  }
}

async function getGridInfo(grid) {
  const res = await fetch('http://localhost:30300/grid/0');
  const json = await res.json();

  console.log(json);

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
