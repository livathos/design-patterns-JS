class Toggler {
    constructor () {
        this.commands = []
    }

    storeAndExecute (command) {
        this.commands.push(command)
        command.execute()
    }
}

export default Toggler
