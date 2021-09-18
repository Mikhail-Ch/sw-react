import React from "react"
import ErrorMsg from "../ErrorMsg/ErrorMsg";

export default class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }
    render() {
        if(this.state.hasError) {
            return <ErrorMsg/>
        }

        return this.props.children
    }
}
