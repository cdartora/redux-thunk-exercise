import React from 'react';
// import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { thunk } from '../store/actions';
import './SearchForm.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      characterSearched: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitName = this.submitName.bind(this);
  }

  handleChange(e) {
    this.setState({
      inputText: e.target.value,
      characterSearched: '',
    })
  }

  submitName(e) {
    e.preventDefault();
    const { inputText } = this.state;
    const {fetchCharacter} = this.props;

    this.setState({

      inputText: '',
      characterSearched: inputText,

    }, () => {
      const {characterSearched} = this.state;

      // insira a action a ser despachada para o thunk
      fetchCharacter(characterSearched);
    })

  }

  render() {
    const { inputText } = this.state;
    return (
      <div>
        <form onSubmit={this.submitName}>
          <h1>Type a character below:</h1>
          <input onChange={this.handleChange} 
          placeholder="Enter Character"
          value={inputText}
          />
          <div className="buttonSection">
            <button className="submitButton" type="submit" >Search!</button>
          </div>
        </form>
      </div>
    )
  }
};

// mapeie as ações despachadas como propriedade do componente
const mapDispatchToProps = (dispatch) => ({
  fetchCharacter: (query) => dispatch(thunk(query)),
});

// conecte as ações despachadas ao redux
export default connect(null, mapDispatchToProps)(SearchForm);

