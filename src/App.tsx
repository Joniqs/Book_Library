import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddBook from './components/AddBook';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/addbook' element={<AddBook />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
