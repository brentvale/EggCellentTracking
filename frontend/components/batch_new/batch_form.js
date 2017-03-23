import React from 'react';
import { withRouter } from 'react-router';

import FileInput from 'react-file-input';
import ChickenThumbnailSelect from '../chicken_show/chicken_thumbnail_select';



class BatchForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
				imageFile: null,
				imageUrl: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this);
			this.uploadFile = this.uploadFile.bind(this);
    }
    
    handleSubmit(event){
      event.preventDefault();
			let file = this.state.imageFile;
			let formData = new FormData();

			formData.append("batch[batch_photo]", file);
			this.props.createBatch(formData)
				.then((data) => {
					this.props.router.push(`/batch_edit/${data.batch.id}`)}
				);
    }

    linkState(key) {
      // here we use '[key]' to set the key to be the value of the 'key' variable,
      // as opposed to a string of 'key'
      return (event => this.setState({[key]: event.currentTarget.value}));
    }
		
		uploadFile(event){
      event.preventDefault();
			let reader = new FileReader();
		  let file = event.currentTarget.files[0];
			let that = this;
			
		  reader.onloadend = () => {
				that.setState({imageUrl: reader.result, imageFile: file});
		  }
			if(file){
				reader.readAsDataURL(file);
			} else {
				this.setState({imageUrl: "", imageFile: null});
			}
		}

    render () {
			const { chickens } = this.props;
		  
      return (
        <form onSubmit={this.handleSubmit}>
					<input  type="file" 
									onChange={(e)=>this.uploadFile(e)} /><br/>
					<input type="submit" value="Submit" />
        </form>
      );
    }
}
  
export default withRouter(BatchForm);