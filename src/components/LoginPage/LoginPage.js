import React, { Component } from 'react'
import event from  '../../events'
import { Grid, Header, Icon, Form, Message } from 'semantic-ui-react';

export class LoginPage extends Component {
  state = {
    nickname: '',
    error: ''
  }
  
  isvalid = ({ nickname }) => nickname

  setUser = ({ user, isUser }) =>  {
    if( isUser ) {
      this.setState({ error: 'Name already in use'})
    } else {
      this.setState({ error : '' })
      this.props.setUser( user )
    }
  }

  handleChange = e => {
    this.setState({ nickname: e.target.value })
  }

  
  handleSubmit = () => {
    let { socket } = this.props
    let { nickname } = this.state
    this.isvalid( this.state ) ? socket.emit( event.IS_USER, nickname, this.setUser ) :
    this.setState({ error : 'Input Username'})
  }

  render() {
    return (
      <Grid
        style={{backgroundColor: '#4F016D',height: '100vh', padding: '0px', margin: '0px' }}
        textAlign='center'
        verticalAlign='middle'
      >
        <Grid.Column computer={ 6 } tablet={ 8 } mobile={ 14 } >
          <Header as='h2' icon textAlign='center' inverted>
            <Icon name='discord' />
            ChatsApp
          </Header>
          <Form size='large' onSubmit={this.handleSubmit}>
            <Form.Input 
              name='nickname'
              type='text'
              placeholder='Username'
              onChange={this.handleChange}
              autoFocus
              icon={<Icon name='add user' link circular inverted color='purple' onClick={ this.handleSubmit } />}
            />
            { this.state.error && (
              <Message color='red'>{ this.state.error }</Message>
            )}
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default LoginPage
