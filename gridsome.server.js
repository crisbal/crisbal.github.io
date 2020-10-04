module.exports = function (api) {
    api.loadSource(async store => {
        store.addMetadata('contactEmail', 'cristian@baldi.me')
    })

    api.loadSource(async actions => {
        const Photos = actions.addCollection({
            typeName: 'Photos'
        })
        require('./src/content/photos/photos.json').map(p => {
            p.src = require.resolve(p.src)
            Photos.addNode(p)
        });
    })
}