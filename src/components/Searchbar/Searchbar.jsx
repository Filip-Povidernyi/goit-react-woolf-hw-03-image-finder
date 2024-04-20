import { Component } from "react";
import searchbarStyle from './style.module.css'


export class Searchbar extends Component {
    state = {
        searchQuery: '',
    }

    changeHandler = (e) => {
        console.log('e.target.value', e.target.value)
        this.setState({ searchQuery: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.onSubmit(e.target.elements.search.value.trim());
        e.target.reset();
  };

    render() {
        return (
            <header className={searchbarStyle.searchbar}>
                <form className={searchbarStyle.form} onSubmit={this.submitHandler}>
                    <button type="submit" className={searchbarStyle.button}>
                        <span className={searchbarStyle.buttonLabel}>Search</span>
                    </button>

                    <input
                        className={searchbarStyle.input}
                        name='search'
                        type="text"
                        autoComplete="off"
                        autoFocus
                        value={this.state.searchQuery}
                        placeholder="Search images and photos"
                        onChange={this.changeHandler}
                    />
                </form>
            </header>
        )
    }
    
}

export default Searchbar