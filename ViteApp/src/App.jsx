import './App.css'
import Form from './components/Form';
import NavigationBar from './components/NavigationBar'
import NavigationBar2 from './components/NavigationBar2';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
        <div className='h-[100vh]'>
            {/* Right Section */}
            <div className='w-full'>
                <NavigationBar />
                <NavigationBar2 />
            </div>
            <Form />
        </div>
    )
}

export default App
