import React, { Component } from "react";
import LoginContext from "../context/LoginContext";

export default class TestComponent extends Component{

    static contextType = LoginContext;
    render() {

        return (
            <LoginContext.Consumer>
                {value => (
                <p>
                    {value.user_id}
                </p>
                )}
            </LoginContext.Consumer>
        );
    }
}