import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';
import './App.css';

import { Pizza } from './components/Pizza'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                input: ''
            }
        }
    }
    onInputChange(event) {
        this.setState({
            formData: {
                input: event.target.value
            },
            result: null
        });       
    }
    onFormSubmit(event) {
        event.preventDefault();
        
        const requestBody = new URLSearchParams();
        requestBody.append('__VIEWSTATE', '/wEPDwUKLTY0NDQ4NzM3MWRkVpqEVmLzI0aPuMy/JfiwS6tZUUeW037finBb/zSyXh4=');
        requestBody.append('__VIEWSTATEGENERATOR', 'CA0B0334');
        requestBody.append('__EVENTVALIDATION', '/wEdAATFD1eWdciEcBgOr2YKbFcgSO4IU2ebZhwIX2Zb/sl/53vO3wpLjOSwYMFxhp/fDVwgNLZfd1Be8hw438ja9tfdyu9VwJGxLaTW7MY1gvVOlDq5hNw038U0qL7xNQHJc1E=');
        requestBody.append('InputText', this.state.formData.input);
        requestBody.append('OutputText', '');
        requestBody.append('btnExtract', 'Extract')


        const request = {
            method: 'POST',
            url: 'https://api.intouchposenterprise.com:1602/',
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
                // get embedded xml from html
                const responseDocument = response.data;
                const inputResponse = responseDocument.getElementById('OutputText');
                const xmlLikeResponse = inputResponse.innerText;

                if(xmlLikeResponse.length) {

                    //convert xmlLike string to native xml
                    let xmlResponse = new DOMParser().parseFromString(xmlLikeResponse, 'text/xml');
                    xmlResponse = xmlResponse.querySelector('Root');
                    //convert xml response to json
                    const jsonResponse = xml2json(xmlResponse);
                    console.log(jsonResponse);
                    
                    this.setState({result: jsonResponse});
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
                console.log(error)
            })
    }
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
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
                        <button>OK</button>
                    </form>
                    <Pizza data={this.state.result} />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
