import React, { Component } from 'react'
import data from '../Data/Test JSON.json'
import ReactModal from 'react-modal'
import icon from "../Images/Usericon.png"
import "../Styles/userlist.css"
import { Card, Button } from "react-bootstrap"
import MyCalendar from "./MyCalendar"
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import {activityRecord} from "../Actions/Actions"

class Userlist extends Component {
    state = {
        userrecord: [],
        showModal: false        
    }

    handleOpenModal = (n) => {
        this.setState({ 
            showModal: true            
        });
        this.props.activityRecord(n.activity_periods)
    }

    handleCloseModal = () => {
        this.setState({ showModal: false });
    }

    componentDidMount() {
        this.setState({
            userrecord: data.members
        })
    }

    render() {
        const { userrecord } = this.state
        return (
            <div className="list">
                {userrecord.map(n =>
                    <Card className="cardStyle" >
                        <Card.Img variant="top" src={icon} height="250" />
                        <Card.Body>
                            <Card.Title>{n.real_name}</Card.Title>
                            <Card.Text>
                                {n.tz}
                            </Card.Text>
                            <Button variant="primary" onClick={() => this.handleOpenModal(n)}>Activity Track</Button>
                        </Card.Body>
                    </Card>
                )}
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                >
                    <button onClick={this.handleCloseModal}>Close Modal</button>
                    <MyCalendar />
                </ReactModal>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {activityRecord}, dispatch
    )
}

export default connect(null, mapDispatchToProps)(Userlist)