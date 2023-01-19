import config from '../../config.js'
import PersonsFileDao from './PersonsFile.dao.js';
import PersonsMemDao from './PersonsMem.dao.js';
import PersonsMongoDao from './PersonsMongo.dao.js';

class PersonsDaoFactory {

  static getPersonDao(){
    console.log('config.dao.target', config.dao.target);
    switch (config.dao.target) {
      case 'file':
        return PersonsFileDao.getInstance()
      case 'mongo':
        return PersonsMongoDao.getInstance()
      default:
        return PersonsMemDao.getInstance();
    }
  }

}

export default PersonsDaoFactory