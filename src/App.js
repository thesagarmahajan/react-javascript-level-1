import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import UsersCrudReducer from './hooks/use_reducer/UsersCrudReducer';

function App() {
   return (
      <div>
        <UsersCrudReducer />
      </div>
    );
}

export default App;
