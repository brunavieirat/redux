import React, { Component } from "react";
import { connect } from "react-redux";
import { handleCategories } from "../actions/category";

class PostForm extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    //console.log(props);
    //const { title, body, author, category } = props;
    this.state = {
      ...props,
      error: ""
    }
  
}

onCategoryChange = e => {
  const category = e.target.value;
  this.setState(() => ({ category }));
};

onTitleChange = e => {
  const title = e.target.value;
  this.setState(() => ({ title }));
};

onAuthorChange = e => {
  const author = e.target.value;
  this.setState(() => ({ author }));
};

onDescriptionChange = e => {
  const body = e.target.value;
  this.setState(() => ({ body }));
};

onSubmit = e => {
  e.preventDefault();

  if (!this.state.body || !this.state.title) {
    this.setState(() => ({
      error: "Por favor preencher uma descrição e um titulo."
    }));
  } else {
    this.setState(() => ({ error: "" }));
    this.props.onSubmit({
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
      category: this.state.category
    });
  }


};
render() {

  console.log('form', this.props);
  return (
    <div>
      {this.state.error && <p>{this.state.error}</p>}
      <form className="formulario" onSubmit={this.onSubmit}>
        <div>
          <label>Categoria:</label>
          <select
            value={this.state.category}
            onChange={this.onCategoryChange}
          >
            <option value="Selecione uma categoria">Selecione uma categoria</option>
            {this.props.categories.map(category =>
              Object.keys(category).map((key, index) => {
                return <option key={category[index].name} value={category[key].name}>{category[key].name}</option>
              })
            )}
          </select>
        </div>
        <label>Titulo:</label>
        <input
          name="textinput"
          type="text"
          placeholder="titulo"
          value={this.state.title}
          onChange={this.onTitleChange}
        />
        <label>Autor:</label>
        <input
          id="textinput"
          name="textinput"
          type="text"
          placeholder="autor"
          value={this.state.author}
          onChange={this.onAuthorChange}
        />
        <div className="">
          <label>Descrição</label>
          <textarea
            name="Descricao"
            className="textarea"
            id="Descricao"
            value={this.state.body}
            onChange={this.onDescriptionChange}
          />
        </div>
        <button className="btn editar">Adiciona post</button>
      </form>
    </div>
  );
}
}

const mapStateToProps = ({ categories }) => {
  return {
    categories: Object.values(categories)
  };
};

export default connect(
  mapStateToProps,
  { handleCategories }
)(PostForm);
