export default function ChatScreen({ route, navigation /* Add this */ }) {
  const {user} = useContext(AuthContext);
  const {channel} = route.params;
  // Unchanged
}
