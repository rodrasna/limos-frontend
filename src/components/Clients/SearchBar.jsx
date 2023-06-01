import React, { Component } from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            openDialog: false,
            newClient: {
                name: "",
                lastName: "",
                birthDate: "",
            },
        };
    }

    handleInputChange = (event) => {
        const searchTerm = event.target.value;
        const { onSearch } = this.props;
        onSearch(searchTerm);
        this.setState({ searchTerm: searchTerm });
        console.log(searchTerm, this.state);
    };

    render() {
        const { searchTerm } = this.state;
        return (
            <div>
                <input
                    type="text"
                    placeholder="Buscar cliente..."
                    value={searchTerm}
                    onChange={this.handleInputChange}
                />
            </div>
        );
    }
}

export default SearchBar;
