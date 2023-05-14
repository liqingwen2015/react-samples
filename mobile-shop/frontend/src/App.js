import { Route, BrowserRouter as Router } from "react-router-dom"
import Header from "./components/Header"
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import Footer from "./components/Footer"

function App() {
    return (
        <Router>
            <Header />
            <main className='py-3'>
                <Container>
                    <Route path='/' component={HomeScreen} exact />
                </Container>
            </main>
            <Footer/>
        </Router>

    )
}

export default App
