import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@material-ui/core'

class Add extends Component {
    state = {
        open: false,
        name: '',
        description: '',
        hours: '',
        address: '', 
    }

    toggleDialog = () => this.setState({ open: !this.state.open })

    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const payload = { ...this.state }
        delete payload.open;
        console.log("THE BUSINESS", payload);
        //this.props.addBusiness(payload);
        this.setState({open: false});
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                name: '',
                description: '',
                hours: '',
                address: '',
            })
        }
    }

    render() {
        return (
            <Fragment>
                <div style={{ textAlign: 'center' }}>
                    <h1>Add Small Business:</h1>
                    <Button
                        variant="contained"
                        className="add-car"
                        onClick={this.toggleDialog}
                    >
                        Add Business
                    </Button>
                </div>
                <div>
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle>Add New Small Business</DialogTitle>
                        <DialogContent>
                            <form 
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                                <TextField 
                                    id="name" 
                                    label="Name"
                                    value={this.state.name} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="description" 
                                    label="Description" 
                                    value={this.state.description} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="hours" 
                                    label="Hours" 
                                    value={this.state.hours} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="address" 
                                    label="Address" 
                                    value={this.state.address} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <br />
                                <Button variant="contained" color="primary" type="submit">Submit</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </Fragment>
        )
    }
}

export default Add;