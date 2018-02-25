import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';

import axios from 'axios';
import './App.css';

import { Pizza } from './components/Pizza'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                input: 'large pan veggie pizza plus pepperoni, heavy garlic, leave out the onions, well done with white sauce half mushrooms and extra olives and half light green peppers and pineapple'
            },
            result: null,
            isLoading: false
        }
    }
    onInputChange(event) {
        this.setState({
            formData: {
                input: event.target.value
            },
        });       
    }
    onFormSubmit(event) {
        event.preventDefault();

        //set loading state to show loader
        this.setState({ isLoading: true });
        
        const requestBody = new URLSearchParams();
        requestBody.append('text', this.state.formData.input);


        const request = {
            method: 'POST',
            url: 'https://api.intouchposenterprise.com:1602/Convert.asmx/Xml',
            data: requestBody,
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Cache-Control': 'max-age=0',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Upgrade-Insecure-Requests': '1'
            },
            responseType: 'document'
        };
        
        axios(request)
            .then((response) => {
                if(response.data) {

                    //get string with xml content
                    const xmlLikeResponse = response.data
                        .querySelector('string')
                        .textContent;

                    //convert xmlLike string to native xml
                    const xmlResponse = new DOMParser().parseFromString(xmlLikeResponse, 'text/xml');
                    
                    //convert xml response to json
                    const jsonResponse = xml2json(xmlResponse.querySelector('Root'));
                    
                    this.setState({
                        result: jsonResponse,
                        isLoading: false
                    });
                }

                // function from stackoverflow to parse xml
                function xml2json(xml) {
                    try {
                        var obj = {};
                        if (xml.children.length > 0) {
                        for (var i = 0; i < xml.children.length; i++) {
                            var item = xml.children.item(i);
                            var nodeName = item.nodeName;
                    
                            if (typeof (obj[nodeName]) == "undefined") {
                            obj[nodeName] = xml2json(item);
                            } else {
                            if (typeof (obj[nodeName].push) == "undefined") {
                                var old = obj[nodeName];
                    
                                obj[nodeName] = [];
                                obj[nodeName].push(old);
                            }
                            obj[nodeName].push(xml2json(item));
                            }
                        }
                        } else {
                        obj = xml.textContent;
                        }
                        return obj;
                    } catch (e) {
                        console.log(e.message);
                    }
                }                                      
            })
            .catch((error) => {
                console.log(error);
                this.setState({ isLoading: false })
            })
    }
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    {/* render progress component if state is loading */}
                    {this.state.isLoading ? 
                        <LinearProgress mode="indeterminate" />
                        : null                    
                    }

                    <div className="App">
                        <Paper style={{ marginBottom: '20px' }}>
                            <div className="App__form">
                                <form onSubmit={this.onFormSubmit.bind(this)}>
                                    <TextField
                                        floatingLabelText="Type your text"
                                        multiLine={true}
                                        fullWidth={true}                    
                                        floatingLabelFixed={true}                            
                                        rows={2}
                                        value={this.state.formData.input}
                                        onChange={this.onInputChange.bind(this)}
                                    />
                                    <RaisedButton label="Extract" 
                                                  primary={true} 
                                                  fullWidth={true}
                                                  onClick={this.onFormSubmit.bind(this)}
                                    />
                                </form>
                            </div>                    
                        </Paper>
                        {/* <Pizza data={this.state.result} /> */}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
