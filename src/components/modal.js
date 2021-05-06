import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

class Popup extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        modalState: true
    };

   componentDidMount(){
        let visited = localStorage["alreadyVisited"];
        if(visited) {
            this.setState({modalState:false})
        } else {
            localStorage["alreadyVisited"] = true;
            this.setState({modalState:true})
        }
    }

    closeModal = () => this.setState({modalState: false});

    render() {
        return (
            <Modal show={this.state.modalState} onHide={this.closeModal}>
                <div className={"modal-wrapper"}>
                    <Modal.Header closeButton>
                        <Modal.Title>Donate</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>If you want to support our theatre program and students, please consider donating!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeModal}>
                            Close
                        </Button>
                        <Button style={{backgroundColor: 'white'}} className="donate-button" variant="primary" onClick={this.closeModal}>
                            <a style={{display: "table-cell", color: "black"}} href="https://vrhs-drama-boosters.square.site/" target="_blank">Donate</a>
                        </Button>
                    </Modal.Footer>
                </div>
            </Modal>
        );
    }
}

export default Popup;