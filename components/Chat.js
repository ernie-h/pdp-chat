import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Fire from '../Fire';
import { GiftedChat } from 'react-native-gifted-chat';

class Chat extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: (navigation.state.params || {}).name || 'Chat!',
    });

    state = {
        messages: [],
    };
    // 1.
    componentDidMount() {
        Fire.shared.on(message =>
            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, message),
            }))
        );
    }
    // 2.
    componentWillUnmount() {
        Fire.shared.off();
    }
    get user() {
        // Return our name and our UID for GiftedChat to parse
        return {
            name: this.props.navigation.state.params.name,
            _id: Fire.shared.uid,
        };
    }

    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={Fire.shared.send}
                user={this.user}
            />
        );
    }
}
const styles = StyleSheet.create({});
export default Chat;