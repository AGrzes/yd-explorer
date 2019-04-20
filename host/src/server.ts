import * as express from 'express'
import {cwd} from 'process'
const app = express()
app.use(express.static('web/dist'))
app.use(express.static('static'))
app.get('*', (req, res) => {
    res.sendFile(`${cwd()}/static/index.html`)
})
export default app
