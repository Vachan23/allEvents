import React from "react";
import { connect } from "react-redux";
import { addDataToState } from "../redux/actions";

//uuid
import {v4 as uuidv4 } from 'uuid'

class BasicDetailsApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            eventName: '',
            startTime: '',
            endTime: '',
            location: '',
            descreption: '',
            // cat: ''
        }
    }

    onChangeEventName(eventName) {
        this.setState({
            eventName: eventName,
        })
    }

    onChangeStartTime(startTime) {
        this.setState({
            startTime,
        })
    }

    onChangeEndTime(endTime) {
        this.setState({
            endTime,
        })
    }

    onChangeLocation(location) {
        this.setState({
            location,
        })
    }

    onChangeDescreption(descreption) {
        this.setState({
            descreption,
        })
    }

    // onChangeCategory(cat) {
    //     this.setState({
    //         cat: cat,
    //     })
    // }

    handleSubmit =(e)=>{
        e.preventDefault();
        const data = {
            id : uuidv4(),
            ...this.state,
        }
        this.props.addData(data);
    }

    render(){
    return(
        <div className="detailsOfEvent" >
            <form className="eventName" onSubmit={this.handleSubmit}>
                <div className="eventName">
                    <label>Event Name: </label>
                    <input type="text" value={this.state.eventName} onChange = {event => this.onChangeEventName(event.target.value)}/>
                    <br/>

                    <label>Start time: </label>
                    <input type='text' value = {this.state.startTime} onChange = {event => this.onChangeStartTime(event.target.value)}/><br/>

                    <label>End time: </label>
                    <input type='text' value = {this.state.endTime} onChange = {event => this.onChangeEndTime(event.target.value)}/><br/>
                    <label>Location: </label>
                    <input type='text' value = {this.state.location} onChange = {event => this.onChangeLocation(event.target.value)}/><br/>
                    <label>Descreption: </label>
                    <textarea value = {this.state.descreption} onChange = {event => this.onChangeDescreption(event.target.value)}/><br/>
                    <input type="submit" value="submit" /><br/>
                    
                    {/* <label>Category: </label>
                    <input type='text' value = {this.state.cat} onChange = {event => this.onChangeCategory(event.target.value)}/><br/> */}
                </div>
            </form>
            {/* <div>
                {this.props.events.map(el => (
                    <div>
                        Event Name: {el.eventName}<br/>
                        Start Time: {el.startTime}<br/>
                        End Time: {el.endTime}<br/>
                        Location: {el.location}<br/><br/>
                    </div>
                ))}
            </div> */}
        </div>
    )
}
}

const mapStateToProps =(state)=>{
    return {
        events : state.events,
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {
        addData : (data)=> dispatch(addDataToState(data)),
    }
}

const BasicDetails = connect(mapStateToProps , mapDispatchToProps)(BasicDetailsApp);

export default BasicDetails;

