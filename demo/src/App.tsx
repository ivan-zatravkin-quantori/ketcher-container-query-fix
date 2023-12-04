import {Editor} from 'ketcher-react'
import {Ketcher} from 'ketcher-core'
import {StandaloneStructServiceProvider} from 'ketcher-standalone'
import 'ketcher-react/dist/index.css'
// import './fix.css' // uncomment this line to fix the issue

const structServiceProvider = new StandaloneStructServiceProvider()

const App = () => {
    return (
        <div id="parent" style={{
            width: "800px",
            height: "800px",
        }}><Editor
            staticResourcesUrl={process.env.PUBLIC_URL}
            structServiceProvider={structServiceProvider}
            errorHandler={(err) => console.log(err)}
            onInit={(ketcher: Ketcher) => {
                ;(global as any).ketcher = ketcher
                ;(global as any).KetcherFunctions = KetcherAPI(global.ketcher)
            }}
        />
        </div>
    )
}

export default App
