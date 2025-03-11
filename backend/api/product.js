module.exports = app => {
    const get = async (req, res) => {
        await app.db('products')
            .select('id', 'name', 'price', 'text')
            .then(products => res.json(products))
    }

    return {get}
}