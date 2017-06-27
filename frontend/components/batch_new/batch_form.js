import React from 'react';
import { withRouter } from 'react-router';

import Exif from 'exif-js';
window.EXIF_IMAGE = Exif;

import FileInput from 'react-file-input';
import * as ReactKonva from 'react-konva';
import ChickenThumbnailSelect from '../chicken_show/chicken_thumbnail_select';



class BatchForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
				uploadedFile: null,
				imagePreview: "",
				submitted: false
      };
      this.handleSubmit = this.handleSubmit.bind(this);
			this.handleNoImageUploadedAlert = this.handleNoImageUploadedAlert.bind(this);
			this.handleChange = this.handleChange.bind(this);
    }
    
    handleSubmit(event){
      event.preventDefault();
		
			let formData = new FormData();

			let canvas = document.createElement("canvas");
			let height = this.state.imagePreview.height/5;
			let width = this.state.imagePreview.width/5;

			canvas.width = width;
			canvas.height = height;

			let ctx = canvas.getContext("2d");
			ctx.drawImage(this.state.imagePreview, 0, 0, width, height);

			let dataurl = canvas.toDataURL("image/jpeg");

			formData.append("batch[batch_photo]", dataurl);
			this.props.createBatch(formData)
				.then((data) => {
						this.props.router.push(`/batch_edit/${data.batch.id}`)
					}
				);
			this.setState({submitted: true});
    }
		
		handleNoImageUploadedAlert(e){
			e.preventDefault();
			alert("upload an image first");
		}

    linkState(key) {
      // here we use '[key]' to set the key to be the value of the 'key' variable,
      // as opposed to a string of 'key'
      return (event => this.setState({[key]: event.currentTarget.value}));
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

    render () {
			const { chickens } = this.props;
		  const submitButton = (this.state.uploadedFile && !this.state.submitted) ? <input type="submit" value="Submit" /> : <input type="submit" value="Submit" onClick={this.handleNoImageUploadedAlert}/>;
			
			
			const imageHeight = 150;
			const imageWidth = 200;
			let imagePreview = (this.state.imagePreview) ? <div style={{width: "100%", textAlign: "center", marginBottom: "1em"}}>
																											<ReactKonva.Stage height={imageHeight} width={imageWidth} >
				        																				<ReactKonva.Layer style={{textAlign:"center"}}>
																													<ReactKonva.Image image={this.state.imagePreview} height={imageHeight} width={imageWidth}/>
																								        </ReactKonva.Layer>
																											</ReactKonva.Stage>
																										 </div>:
																										<div style={{height: imageHeight, width: imageWidth, marginBottom: "1em"}} className="center-block"></div>;	
			let spinnerUploadDisplay = (this.state.submitted) ? <div style={{padding:"1em"}}>
																															<i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i><br/>
																															<span>Uploading Image...</span><br/>
																															<span>This can take a while, check your browser for upload progress (bottom left)</span>
																															<span className="sr-only">Uploading Image...</span>
																													</div>: "";																			
								
      return (
				<div className="col-xs-12" style={{textAlign:"center"}}>
					<form onSubmit={this.handleSubmit} className="center-block" style={{marginTop: "3em", width: imageWidth}}>
						{imagePreview}
		        <FileInput name="companyDocument"
		                   accept=".jpg,.jpeg,.pdf"
		                   className="image-upload hand-on-hover"
		                   onChange={this.handleChange}
											 placeholder="Upload Photograph"/>
				
		       { submitButton }
		      </form>
					{ spinnerUploadDisplay }
				</div>
        
      );
    }
}
  
export default withRouter(BatchForm);