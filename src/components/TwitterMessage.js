import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {maxChars: this.props.maxChars};
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  handleText = event => {
    this.setState({
      textLength: event.target.value.length
     
    })
  }

  render() {
    return (
      <div>
        <form onSubmit = {event => this.handleSubmit(event)}>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleText(event)} value={this.state.maxChars}/>
      </form>
      </div>
    );
  }
}

export default TwitterMessage;
