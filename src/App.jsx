import {Routes,BrowserRouter,Route} from 'react-router-dom'
import Header from './component/Header'
import PageNotFound from './component/PageNotFound'
function App() {
  

  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Header />}>
          <Route path="home" element={<h1>Hello</h1>}/>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
