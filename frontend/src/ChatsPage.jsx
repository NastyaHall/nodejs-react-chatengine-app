import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('72488758-4bbb-442d-b253-b620a9b2d36c',
        props.user.username,
        props.user.secret
    );
    return <div style={{ height: '100vh' }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
    </div>
}
export default ChatsPage;