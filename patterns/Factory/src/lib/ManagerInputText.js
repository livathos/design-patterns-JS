import Validator from './Validator'
import InputText from '../interface/InputText'

class ManagerInputText extends Validator {
    makeFieldValidator ({field}) {
        return new InputText({field})
    }
}

export default ManagerInputText