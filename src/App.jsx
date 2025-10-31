import NewChatPopup from "./Components/NewChatPopup";
import GroupChatPopup from "./GroupChatPopup";
import NewChatInterface from "./SingleChatModal";
import UserList from "./UserList";

function App() {
  return (
    <div>
      <NewChatPopup />
      <GroupChatPopup />
      <UserList />
      <NewChatInterface />
      <h2>hello</h2>
    </div>
  );
}

export default App;
