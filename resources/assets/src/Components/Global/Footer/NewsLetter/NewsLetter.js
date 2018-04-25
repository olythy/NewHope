import React, {Component} from 'react'
import Modal from 'react-modal';

import NewsLetterModal from '../../Modals/NewsLetter/NewsLetterModal'

Modal.setAppElement('#root');

class NewsLetter extends Component {
	
	constructor () {
	    super();
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
			<div className="newsLetter">
				<button className="newsLetter--btn" onClick={this.handleOpenModal} >Subscribe to our newsletter</button>

				<Modal 
		           isOpen={this.state.showModal}
		           contentLabel="onRequestClose Example"
		           onRequestClose={this.handleCloseModal}
		           className="Modal"
		           overlayClassName="Overlay"
		        >
		          <NewsLetterModal handleCloseModal={this.handleCloseModal} />
		        
		        </Modal>
			</div>
		)
	}
}

export default NewsLetter