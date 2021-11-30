import './App.css';

// Profile task
import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';

// Statistics task
import Statistics from './components/Statistics/Statistic';
import data from './components/Statistics/data.json';

// FriendList task
import FriendList from './components/FriendsList/FriendListItem';
import friends from './components/FriendsList/friends.json';

// FriendList task
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

function App() {
  console.log(user);
  return (
    <div className="App">
      <Profile
        profileImg={user.avatar}
        profileName={user.username}
        profileTag={user.tag}
        profileLoc={user.location}
        profileFoll={user.stats.followers}
        profileViews={user.stats.views}
        profileLikes={user.stats.likes}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
