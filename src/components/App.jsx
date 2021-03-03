import React from 'react';
import Logo from '../Assets/logo.jpg';


class App extends React.Component {
    state = {
        user: '',
        value: '',
        chirps: [
            { user: "Jane Doe", value: "My husband needs this app!" },
            { user: "John Doe", value: "Im so glad my wife doesnt have this app ." },
            { user: "Elon Musk", value: "My full name is Elongated Muskrat" }
        ],
    }

    handleUserChange = (event) => {
        this.setState({ user: event.target.value });
    };



    handleValueChange = (event) => {
        this.setState({ value: event.target.value });
    };

    // addChirp = (event) => {
    //     event.preventDefault();
    //     const newChirp = this.state.chirps.slice()
    //     newChirp.unshift(this.state.value);
    //     this.setState({ value: '', chirps: newChirp });
    // };

    addChirp = (event) => {
        event.preventDefault();
        this.setState({ chirps: [...this.state.chirps, { user: this.state.user, value: this.state.value }] });
    };

    render() {
        return (

            <div>
                <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img src={Logo} alt="" width="30" height="24" class="d-inline-block align-top" />
                               Chirper 2.0
                     </a>
                    </div>
                </nav>
                <div className="container">
                    <section className="row justify-content-center">
                        <article className="col-md-10">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">CHIRP IT !</h5>
                                    <form className="form-group">
                                        <input type="text" value={this.state.user} onChange={this.handleUserChange} />
                                        <textarea
                                            className="shadow-lg form-control mb-2"
                                            calibri-label="With textarea"
                                            value={this.state.value}
                                            onChange={this.handleValueChange}
                                        />
                                        <button
                                            className="btn btn-secondary btn-md btn-outline-light btn-shadow-lg"
                                            onClick={this.addChirp}
                                        >Post To Timeline</button>
                                    </form>
                                </div>
                            </div>
                        </article>
                    </section>
                </div>
                <>
                    {this.state.chirps.map((chirp, index) => {
                        return (
                            <div className="col-lg-12" key={index}>
                                <div className="card mb-3">
                                    <div className="card-body shadow-lg">
                                        <h5 className="card-title">{chirp.user}</h5>
                                        <p className="card-text">{chirp.value}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </>
                {/* <div className="col-lg-12">
                    <div className="card mb-3">
                        <div className="card-body shadow-lg">
                            <h5 className="card-title">John Doe</h5>
                            <p className="card-text">So glad my wife doesn't have this app  !</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="card mb-3">
                        <div className="card-body shadow-lg">
                            <h5 className="card-title">Jane Doe</h5>
                            <p className="card-text">My husband John needs to see this !</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="card mb-3">
                        <div className="card-body shadow-lg">
                            <h5 className="card-title">Elon Musk</h5>
                            <p className="card-text">My full name is Elongated Muskrat</p>
                        </div>
                    </div>
                </div> */}
            </div >
        )
    }
}

export default App;