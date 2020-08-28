import React from "react"

function Display(props) {
    let element = "Loading..."
    if (props.name.data.category !== undefined) {
        element = (
            <div className="Display">
                
                <strong>Question:</strong> {props.name.data.question}
                <br />
                <strong>Point Value:</strong> {props.name.data.value}
                <br />
                <strong>Title:</strong> {props.name.data.category.title}
                <br />
                <strong>Score:</strong> <div id="score">{props.name.score}</div>
                <br />
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <label htmlFor="userAnswer">Your Answer Here:</label>
                        <input
                            type="text"
                            name="userAnswer"
                            value={props.name.formData.userAnswer}
                            onChange={props.handleChange}
                        />
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
    return (
        <div>
            {element}
        </div>
    );
}

export default Display