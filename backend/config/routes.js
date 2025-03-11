module.exports = app => {
    app.route('/products')
        .get(app.api.product.get)
}