import React from 'react';

import FileInput from 'react-file-input';
import * as ReactKonva from 'react-konva';

import { uniqueId } from '../../util/idGenerator'

class ChickenForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        chicken_name: (props.chicken) ? props.chicken.chicken_name : "", 
        biography: (props.chicken) ? props.chicken.biography : "", 
        arrival_date: (props.chicken) ? props.chicken.arrival_date : "", 
        departure_date: (props.chicken) ? props.chicken.departure_date : "",
				chicken: props.chicken || null,
				uploadedFile: (props.chicken) ? props.chicken.thumbnail_photo : null,
				imagePreview: null,
				editing: props.editing || null
      };
      this.handleSubmit = this.handleSubmit.bind(this);
			this.handleChange = this.handleChange.bind(this);
    }
		
	  handleChange(e){
			let that = this;
			let uploadedFile = e.target.files[0];

			let reader = new FileReader();
		
			reader.onload = function(e) {
				const image = new window.Image();
				image.src = e.target.result;
				that.setState({ uploadedFile: uploadedFile, imagePreview: image });
			}
			reader.readAsDataURL(e.target.files[0]);
	  }
		
	  handleSubmit(e) {
	    e.preventDefault();
	    let reader = new FileReader();
	    let that = this;

	    reader.onloadend = function() {
	      let formData = new FormData();

				if(that.state.uploadedFile){
					formData.append("chicken[photo]", that.state.uploadedFile);
				}
	      formData.append("chicken[biography]", that.state.biography);
				formData.append("chicken[chicken_name]", that.state.chicken_name);
				formData.append("chicken[arrival_date]", that.state.arrival_date);
				
				//uses "n/a" if departure date has not yet occured.
				if(that.state.departure_date === ""){
					formData.append("chicken[departure_date]", "n/a");
				} else {
					formData.append("chicken[departure_date]", that.state.departure_date);
				}
				
				let url, method;
				if(that.state.editing){
					url = `api/chickens/${that.state.chicken.id}`;
					method = "PATCH";
				} else {
					url = `api/chickens`;
					method = "POST";
				}
				
				//CREATE IMAGE
				$.ajax({
					url: url,
		      method: method,
		      data: formData,
		      processData: false,
		      contentType: false,
		      dataType: 'json',
					success: (resp) => {
						console.log("chicken saved");
						if(that.props.handleToggleEditing){
							that.props.handleToggleEditing();
						} else if(that.props.toggleChickenForm) {
							that.props.toggleChickenForm();
						}
					},
					error: (resp) => {
						console.log("errored out creating the photo")
					}
				});
	    }

	    if (this.state.uploadedFile) {
				console.log(this.state.uploadedFile)
	      reader.readAsDataURL(this.state.uploadedFile);
	    } 
	  }

    linkState(key) {
      // use '[key]' to set the key to be the value of the 'key' variable,
      // as opposed to a string of 'key'
      return (event => this.setState({[key]: event.currentTarget.value}));
    }

    render () {
			const imageHeight = 150;
			const imageWidth = 200;
			let imagePreview = (this.state.imagePreview) ? <div style={{width: "100%", textAlign: "center", marginBottom: "1em"}}>
																											<ReactKonva.Stage height={imageHeight} width={imageWidth} >
				        																				<ReactKonva.Layer style={{textAlign:"center"}}>
																													<ReactKonva.Image image={this.state.imagePreview} height={imageHeight} width={imageWidth}/>
																								        </ReactKonva.Layer>
																											</ReactKonva.Stage>
																										 </div>:
																										<div className="center-block"></div>;												
      return (
        <form onSubmit={this.handleSubmit}>
					<div className={this.props.klass}>
	          <label>Chicken Name
	            <input onChange={this.linkState('chicken_name')} value={this.state.chicken_name}/>
	          </label><br/>
	          <label>Biography
	            <input onChange={this.linkState('biography')} value={this.state.biography}/>
	          </label><br/>
	          <label>Arrival Date
	            <input onChange={this.linkState('arrival_date')} value={this.state.arrival_date}/>
	          </label><br/>
	          <label>Departure Date
	            <input onChange={this.linkState('departure_date')} value={this.state.departure_date}/>
	          </label>
					</div>
					<div className={this.props.klass} style={{height:"2em", zIndex: "10", width: "100%"}}>
	 					{imagePreview}
	 	        <FileInput name="companyDocument"
	 	                   accept=".jpg,.jpeg,.pdf,.png"
	 	                   className="image-upload"
	 	                   onChange={this.handleChange}
	 										 placeholder="Upload Photograph"
											 style={{backgroundColor:"white"}}/>
					</div>
          <input type="submit" value="Enter" />
        </form>
      );
    }
}
  
export default ChickenForm;