import React, { Component } from 'react'
import { Segment, Header, Icon } from 'semantic-ui-react';

export class MessageHeader extends Component {
  render() {
    let { activeChannel } = this.props
    return (
      <Segment style={{ background: '#4F016D'}}>
        <Header as="h2" style={{ color: '#eee'}}>
          <Icon name='chat' inverted />
          <Header.Content style={{ color: '#eee'}}>{ activeChannel.name[0].toUpperCase() + activeChannel.name.slice(1) }</Header.Content>
          <Header.Subheader style={{ color: '#eee'}}>
            About : <span>{activeChannel.description[0].toUpperCase() + activeChannel.description.slice(1)}</span>
          </Header.Subheader>
        </Header>
      </Segment>
    )
  }
}

export default MessageHeader
