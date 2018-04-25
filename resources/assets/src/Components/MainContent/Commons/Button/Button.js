import React,{Component} from 'react'
import {Link} from 'react-router-dom'

import Modal from 'react-modal';

import RegisterModal from '../../../Global/Modals/Register/RegisterModal'
import TopicModal from '../../../Global/Modals/Topic/TopicModal'

class Button extends Component {
	
	constructor (props) {
	    super(props);
	    this.state = {
	      showModal: false
    	};
    
	    this.handleOpenModal = this.handleOpenModal.bind(this);
	    this.handleCloseModal = this.handleCloseModal.bind(this);
	}

	componentDidMount() {
		document.body.classList.toggle('fxs', this.state.showModal)
	}
	componentDidUpdate(){
		document.body.classList.toggle('fxs', this.state.showModal)	
	}
  	componentWillUnmount() {
    	document.body.classList.remove('fxs')
  	}
  
	handleOpenModal () {
	    this.setState({ showModal: true });
	}
	  
	handleCloseModal () {
	    this.setState({ showModal: false });
	}

	RegisterModal () {
		return(
			<RegisterModal
          	handleCloseModal={this.handleCloseModal}
          	modalTitle={this.props.modalTitle}
          	modalText={this.props.modalText}
          	modalFormAction={this.props.modalFormAction}
          />
        )
	}

	TopicModal() {
		return(
			<TopicModal
          		handleCloseModal={this.handleCloseModal}
          		topicTitle={this.props.topicTitle}
          		topicText={this.props.topicText}
          	/>
		)
	}

	render(){

		return(
			<div>
				<button onClick={this.handleOpenModal} className={this.props.cls}>{this.props.name}</button>
				<Modal 
			           isOpen={this.state.showModal}
			           contentLabel="onRequestClose Example"
			           onRequestClose={this.handleCloseModal}
			           className="Modal"
			           overlayClassName="Overlay"
			        >
			         {this.props.topic ? this.TopicModal() : this.RegisterModal()} 			          
	        	</Modal>
			</div>
		)
	}
}

export default Button