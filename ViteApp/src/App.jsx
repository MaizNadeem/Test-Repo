import './App.css'
import Form from './components/Form';
import NavigationBar from './components/NavigationBar'
import NavigationBar2 from './components/NavigationBar2'
import NavigationBar3 from './components/NavigationBar3'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
        <div className='h-[100vh] w-[100vw]'>
            {/* Right Section */}
            <div className='w-[100%]'>
                <NavigationBar />
                <NavigationBar2 />
                <NavigationBar3 />
            </div>
            <Form />
        </div>
    )
}

export default App
