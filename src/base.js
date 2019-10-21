import Rebase from 're-base';
import firebaseApp from './fbase';


const fbase = Rebase.createClass(firebaseApp.database());

export default fbase