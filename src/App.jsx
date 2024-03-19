import './App.css'
import AuthorsList from './components /authorsList/AuthorsList'
import { Banner } from './components /banner/Banner'
import { BookList } from './components /bookList/BookList'
import { Header } from './components /header/Header'

function App() {
  return(
    <>
    <Header/>
    <Banner/>
    <BookList/>
    <AuthorsList/>
    </>
  )
}

export default App
