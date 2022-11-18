const ID = '/virtual-changelog'

export function ChangeLog(data) {
    return {
        name: 'changelog',
        resolveId(id) {
            return id === ID ? ID : null
        },
        load(id) {
            if (id !== ID)
                return null
            return `export default ${JSON.stringify(data)}`
        },
    }
}