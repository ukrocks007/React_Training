class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastName: "",
            stream: "",
            tnc: false
        };
    }

    updateData(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleCheckboxChecked(e) {
        this.setState({ [e.target.name]: e.target.checked })
    }

    handleSubmit(e) {
        //Overrides default submit behaviour
        e.preventDefault();
        const { email, password } = this.state;
        if (email !== "" && password !== "") {
            //Submit the data to server
        } else {
            //show error
        }
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                First Name: <input value={ this.state.firstname } type="firstname" onChange={ this.updateData } />
                Last Name: <input value={ this.state.lastName } type="lastName" onChange={ this.updateData } />

                Stream: <select value={ this.state.stream } onChange={ this.updateData } name="stream">
                    <option value="arts">Arts</option>
                    <option value="commerce">Commerce</option>
                    <option value="science">Science</option>
                </select>

                Terms &amp; Conditions: <checkbox name="tnc" checked={ this.state.tnc } onChange={ this.handleCheckboxChecked } />

                <input type="Submit">Signup</input>
            </form>
        );
    }
}