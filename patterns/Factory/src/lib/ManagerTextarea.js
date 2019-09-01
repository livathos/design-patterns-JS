import Validator from './Validator'
import Textarea from '../interface/Textarea'

class ManagerTextarea extends Validator {
    makeFieldValidator ({field}) {
        return new Textarea({field})
    }
}

export default ManagerTextarea