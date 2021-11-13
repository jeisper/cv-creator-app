import { Button, Flex, Input, Text } from "@chakra-ui/react";
import axios from "axios";

import React, { Component } from "react";

class ImageUpload extends Component {
  state = {
    selectedFile: null,
  };

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    axios.post("api/uploadfile", formData);
  };

  // File content to be displayed after
  // file upload is complete
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <Flex>
          <Text></Text>
        </Flex>
      );
    }
  };

  render() {
    return (
      <Flex justify="center" direction="column" m="2">
        <Text fontWeight="bold" m="2">
          Upload your Photo
        </Text>
        <Flex justify="center" dir="row">
          <Input type="file" onChange={this.onFileChange} />
          <Button ml="2" onClick={this.onFileUpload}>
            Upload
          </Button>
        </Flex>
        {this.fileData()}
      </Flex>
    );
  }
}

export default ImageUpload;
