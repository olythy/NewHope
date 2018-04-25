import React, {Component} from 'react'
import Select from 'react-select';

class PartnerSearch extends Component {
	
	constructor(props){
		super(props);
		this.state ={
			selectedOption: ''
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange (selectedOption) {
    	this.setState({ selectedOption });
  	}


	render(){

		const { selectedOption } = this.state;
		const value = selectedOption && selectedOption.value;

		return(
			<section className="PartnerSearch">
				<form className="PartnerSearch--form">
					<div className="PartnerSearch--input---wrp">
						<input className="PartnerSearch--input" type="text" placeholder="Search name, title, keyword.." />
						<button className="PartnerSearch--button"></button>
					</div>
					<Select
				        name="form-field-name"
				        value={value}
				        onChange={this.handleChange}
				        options={[
				          { value: 'one', label: 'One' },
				          { value: 'two', label: 'Two' },
				          { value: 'three', label: 'Three' },
				          { value: 'four', label: 'Four' },
				        ]}
				    />

				</form>
			</section>
		)
	}
}

export default PartnerSearch