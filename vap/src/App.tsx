import { RecoilRoot } from 'recoil'
import { BrowserRouter as Router } from 'react-router-dom'
import RouteContent from './routes'

function App() {
  return (
    <Router basename="/vsp">
      <RecoilRoot>
        <RouteContent />
      </RecoilRoot>
    </Router>
  )
}
export default App
