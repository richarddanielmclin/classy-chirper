const ChirpDisplay = (props) => {
    return (
        <div>
            <div id="chirp-card" className="card border-light mb-3" style={{maxWidth: '18rem', minWidth: '18rem'}}>

                <h5 className="card-header">@{props.chirp.username}</h5>
                <div className="card-body">
                    <p className="card-title">{props.chirp.message}</p>
                </div>

            </div>
        </div>
    )
}

export default ChirpDisplay;