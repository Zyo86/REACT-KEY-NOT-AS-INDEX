import React from 'react';

// noprotect
class Item extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label className="col-xs-4 control-label">{this.props.name}</label>
        <div className="col-xs-8">
          <input type="text" className="form-control" />
        </div>
      </div>
    );
  }
}

class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        { name: 'Foo1444610101010', id: 1444610101010 },
        { name: 'Bar1444600000000', id: 1444600000000 },
      ],
    };
  }

  addItem() {
    const id = +new Date();
    this.setState({
      list: [{ name: 'Baz' + id, id }, ...this.state.list],
    });
  }

  render() {
    return (
      <div>
        <b>How to use: </b>
        First write something in the inputs
        <br />
        <button className="btn btn-primary" onClick={this.addItem.bind(this)}>
          <b>Add item</b> to the beginning of the list
        </button>
        <h3>
          Dangerous <code>key=index</code>
        </h3>
        <form className="form-horizontal">
          {this.state.list.map((todo, index) => (
            <Item {...todo} key={index} />
          ))}
        </form>
        <h3>
          Better <code>key=id</code>
        </h3>
        <form className="form-horizontal">
          {this.state.list.map((todo) => (
            <Item {...todo} key={todo.id} />
          ))}
        </form>
        <hr />
        <a href="https://medium.com/p/e0349aece318">
          &laquo; Back to the article
        </a>
        .
      </div>
    );
  }
}

export default Example;
