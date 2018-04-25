import React, {Component} from 'react'
import Select from 'react-select';

class AgendaSearch extends Component {
	
	constructor(props){
		super(props);
		this.state ={
			selectedCategory: '',
			selectedDay: ''
		}
		this.handleCategoryChange = this.handleCategoryChange.bind(this);
		this.handleDayChange = this.handleDayChange.bind(this);
	}

	handleCategoryChange (selectedCategory) {
    	this.setState({ selectedCategory });
  	}
  	handleDayChange (selectedDay) {
    	this.setState({ selectedDay });
  	}


	render(){

		const { selectedCategory, selectedDay } = this.state;
		
		const valueCategory = selectedCategory && selectedCategory.value;
		const valueDay = selectedDay && selectedDay.value;

		return(
			<section className="PartnerSearch">
				<form className="PartnerSearch--form">
					<div className="PartnerSearch--input---wrp">
						<input className="PartnerSearch--input" type="text" placeholder="Search name, title, keyword.." />
						<button className="PartnerSearch--button"></button>
					</div>
					<Select
				        name="Agenda--category"
				        value={valueCategory}
				        onChange={this.handleCategoryChange}
				        options={[
				          { value: 'Going Digital', label: 'Going Digital' },
				          { value: 'Learning', label: 'Learning' },
				          { value: 'Data', label: 'Data' },
				          { value: 'Anything else', label: 'Anything else' },
				        ]}
				    />
					<Select
				        name="form-field-name"
				        value={valueDay}
				        onChange={this.handleDayChange}
				        options={[
				          { value: 'Day 1', label: 'Day 1' },
				          { value: 'Day 2', label: 'Day 2' }
				        ]}
				    />

				</form>
			</section>
		)
	}
}

export default AgendaSearch