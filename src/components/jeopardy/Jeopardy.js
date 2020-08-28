import React from 'react';
import JeopardyService from "../../jeopardyService"
import Display from "../jeopardyDisplay/jeopardyDisplay"


class Jeopardy extends React.Component {

    constructor(props) {
        super(props);
        this.client = new JeopardyService();
        this.state = {
            data: {},
            score: 0,
            formData: {
                userAnswer: ""
            }

        }
    }

    getNewQuestion() {
        return this.client.getQuestion().then(result => {
            console.log(result)
            this.setState({
                data: result.data[0]
            })
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.setState({
            submitted: true
        })
        if (this.state.data.answer === this.state.formData.userAnswer) {
            this.setState((prevState) => {
                return { score: prevState.score + prevState.data.value }
            })

        } else {
            this.setState((prevState) => {
                return { score: prevState.score - prevState.data.value }
            })
        }
        this.getNewQuestion();
    }

    handleChange = (event) => {
        let formData = this.state.formData
        formData[event.target.name] = event.target.value

        this.setState({ formData })
    }

    componentDidMount() {
        this.getNewQuestion();
    }

    render() {
        return (
            <Display
                name={this.state}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit} />
        )
    }
}
export default Jeopardy;