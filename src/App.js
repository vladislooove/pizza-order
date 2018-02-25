import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';
import Voice from 'material-ui/svg-icons/action/settings-voice';

import axios from 'axios';
import './App.css';

import { Pizza } from './components/Pizza'

class App extends Component {
    constructor(props) {
        super(props);

        let recognition = new window.webkitSpeechRecognition();
        recognition.continious = true;
        recognition.onend = this.onEndRecording.bind(this);
        recognition.onresult = this.onResultRecording.bind(this);

        this.state = {
            formData: {
                input: 'large pan veggie pizza plus pepperoni, heavy garlic, leave out the onions, well done with white sauce half mushrooms and extra olives and half light green peppers and pineapple',
                errorText: ''
            },
            result: null,
            isLoading: false,
            speech: {
                isRecording: false,
                recognition: recognition
            }
        }
    }

    handleVoiceRecording() {
        if(this.state.speech.isRecording) {
            this.state.speech.recognition.stop();
            this.setState({
                speech: {
                    isRecording: false,
                    recognition: this.state.speech.recognition                    
                }
            })
        } else {
            this.state.speech.recognition.start();
            this.setState({
                speech: {
                    isRecording: true,
                    recognition: this.state.speech.recognition
                }
            })
        }
    }

    onEndRecording() {
        this.setState({
            speech: {
                isRecording: false,
                recognition: this.state.speech.recognition                    
            }
        })
    }

    onResultRecording(event) {
        let speechInput = '';

        for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                speechInput += event.results[i][0].transcript;
            }
        }

        this.setState({
            formData: {
                input: this.state.formData.input + speechInput
            }
        });

        this.onFormSubmit(event);
    }

    onInputChange(event) {
        this.setState({
            formData: {
                input: event.target.value,
                errorText: ''
            },
        });

        if(!event.target.value.length) {
            this.setState({
                formData: {
                    input: event.target.value,
                    errorText: 'This field is required'
                }
            })
        }
    }
    onFormSubmit(event) {
        event.preventDefault();

        if(this.state.formData.input.length) {
            
            //set loading state to show loader
            this.setState({ isLoading: true });
            
            const requestBody = new URLSearchParams();
            requestBody.append('text', this.state.formData.input);

            //configure axios request
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
                            isLoading: false,
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
        } else {
            this.setState({
                formData: {
                    input: this.state.formData.input,
                    errorText: 'This field is required'
                }
            })
        }
    }

    handleReset() {
        this.setState({
            result: null,
            formData: {
                input: '',
                errorText: ''
            }
        })
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    {/* render progress component if state is loading */}
                    {this.state.isLoading ? 
                        <LinearProgress mode="indeterminate"
                                        style={{ position: 'fixed', top: 0, right: 0, left: 0, zIndex: 1000 }}
                        />
                        : null                    
                    }

                    <div className="App">
                        <Paper style={{ marginBottom: '20px' }}>
                            <div className="App__form">
                                <RaisedButton
                                    label={this.state.speech.isRecording ? 
                                        'Click to finish record'
                                        :
                                        'Click to start record'}
                                    labelPosition="after"
                                    primary={this.state.speech.isRecording ? false : true}
                                    secondary={this.state.speech.isRecording ? true : false}
                                    icon={<Voice />}
                                    fullWidth={true}
                                    onClick={this.handleVoiceRecording.bind(this)}
                                />

                                <form onSubmit={this.onFormSubmit.bind(this)}>
                                    <TextField
                                        floatingLabelText="Type your text"
                                        multiLine={true}
                                        fullWidth={true}                    
                                        floatingLabelFixed={true}                            
                                        rows={2}
                                        value={this.state.formData.input}
                                        errorText={this.state.formData.errorText}                                        
                                        onChange={this.onInputChange.bind(this)}
                                    />
                                    <RaisedButton label="Extract" 
                                                  primary={true} 
                                                  fullWidth={true}
                                                  onClick={this.onFormSubmit.bind(this)}
                                                  disabled={this.state.formData.input.length ? false : true}
                                    />
                                </form>
                            </div>                
                            <Pizza data={this.state.result} resetClick={this.handleReset.bind(this)} />
                        </Paper>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
