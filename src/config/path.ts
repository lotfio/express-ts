/**
 * @package Express ts example
 * @license MIT 
 * @version 0.1.0
 * @author lotfio lakehal
 * 
 */
import path from "path";

 export default {

    'views'         : path.join(path.join(path.dirname(__dirname), "app"), 'views'),
    'controllers'   : path.join(path.join(path.dirname(__dirname), "app"), 'controllers'),
    'models'        : path.join(path.join(path.dirname(__dirname), "app"), 'models'),
};