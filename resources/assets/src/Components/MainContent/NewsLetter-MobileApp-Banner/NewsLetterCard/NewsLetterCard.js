import React, {Component} from 'react'
import Modal from 'react-modal';

import NewsLetterModal from '../../../Global/Modals/NewsLetter/NewsLetterModal'

Modal.setAppElement('#root');

class NewsLetterCard extends Component {
	
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
			<div className="Event-card newsLetter">
    			<h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
    			<p>Do you want more? Do you want to get all these goodies on a daily basis? Join us in our movement for a better future!</p>
    			<button className="newsLetter-signUp" onClick={this.handleOpenModal} >Sign up</button>

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

	export default NewsLetterCard