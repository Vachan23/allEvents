import React from "react";
import BasicDetailsApp from "./basicDetails";
import { connect } from "react-redux";

const mapStateToProps =(state)=>{
    return {
        events : state.events,
    }
}

const Home = () =>{
    return(
        <div>
            {this.props.events.map(el => (
                    <div>
                        Event Name: {el.eventName}<br/>
                        Start Time: {el.startTime}<br/>
                        End Time: {el.endTime}<br/>
                        Location: {el.location}<br/><br/>
                    </div>
                ))}
        </div>
    )
}

const HomePage = connect(mapStateToProps)(BasicDetailsApp);

export default Home;
