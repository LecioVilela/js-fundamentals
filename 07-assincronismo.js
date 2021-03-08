
const fs = require('fs')
const readFile = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, content) => {
            if (!err) {
                resolve(content.toString())
            } else {
                reject(err)
            }
        })
    })
}

readFile('05-hof.js')
    .then(content => {
        console.log(content)
    })

const run = async () => {
    const content = await readFile('05-hof.js')
    console.log(content)
    return 111
}
run()

