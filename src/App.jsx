import React from "react";
import ChirpDisplay from './components/ChirpDisplay'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chirps: [
                { username: `Frank`, message: `frank's message` },
                { username: `Keisha`, message: `keisha's message` },
                { username: `Mike`, message: `mike's message` }
            ],
            username: ``,
            message: ``
        }
    }

    handleSubmit(e) {
        if (this.state.username === '' || this.state.message === '') {
            alert('You must enter both a username and a message!')
        } else {
            e.preventDefault();
            this.setState({
                chirps: [...this.state.chirps, { username: this.state.username, message: this.state.message }]
            })
        }
    }

    render() {
        return (
            <main className="container" style={{ display: 'flex', flexDirection: 'row' }}>
                <div id="container" className="m-3" style={{ maxWidth: '18rem', borderRadius: '1em' }}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input value={this.state.chirps.username} onChange={e => this.setState({ username: e.target.value })} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>
                    <div className="input-group mb-3">
                        <textarea value={this.state.chirps.message} onChange={e => this.setState({ message: e.target.value })} className="form-control" aria-label="With textarea" placeholder="What do you want to say?"></textarea>
                    </div>
                    <div>
                        <button className="btn btn-info" onClick={e => this.handleSubmit(e)}>Chirp Away!</button>
                    </div>
                </div>
                <div id="chirpContainer" className='container card-group col-md-6 mt-3' style={{ maxWidth: '18rem' }}>
                    {this.state.chirps.map((chirp, id) => <ChirpDisplay key={id} chirp={chirp} />)}
                </div>
            </main>
        )
    }
}

export default App;