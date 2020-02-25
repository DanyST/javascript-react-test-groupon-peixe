import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";

const SearchForm = props => {
    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        props.onSubmit(value);
    }

    return (
        <Form inline onSubmit={handleSubmit}>
            <FormControl
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}                              
                placeholder="Search a movie"
                className="mr-sm-2"
            />
        </Form>
    );
};

SearchForm.defaultProps = {
    onSubmit: () => {}
}

export default SearchForm;