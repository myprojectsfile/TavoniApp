import Parse from 'parse'
import * as ServerConfig from '../../server.config'

Parse.initialize(
  ServerConfig.TAVONI_PARSE_APP_ID,
  ServerConfig.TAVONI_PARSE_JAVASCRIPT_KEY
)
Parse.serverURL = ServerConfig.TAVONI_PARSE_SERVER_URI

export default ({ Vue }) => {
  Vue.prototype.$parse = Parse
}

export { Parse }
