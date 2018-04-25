import React,{Component} from 'react'

import Modal from 'react-modal';

import RegisterModal from '../../../Global/Modals/Register/RegisterModal'

class BecomeCard extends Component{
	
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

	render(){
		return(
			<div className="ModalCard">
				<div className={ this.props.className + " BecomeCard"} onClick={this.handleOpenModal} >
					<h2>{this.props.name}</h2>
					<h5>{this.props.slogen}</h5>
				</div>
				<Modal 
			           isOpen={this.state.showModal}
			           contentLabel="onRequestClose Example"
			           onRequestClose={this.handleCloseModal}
			           className="Modal"
			           overlayClassName="Overlay"
			        >
			          <RegisterModal
			          	handleCloseModal={this.handleCloseModal}
			          	modalTitle={this.props.name}
			          	modalText={this.props.modalText}
			          	modalFormAction={this.props.modalFormAction}
			          />
	        
	        	</Modal>
	        </div>
		)
	}
}

export default BecomeCard