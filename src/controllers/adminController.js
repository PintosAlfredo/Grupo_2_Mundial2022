const adminController = {
    adminView: function (req, res, next) {
        res.render('administrator')
    },
    adminCrear: function (req, res, next) {
        res.render('crear')
    },
    adminModificar: function (req, res, next) {
        res.render('modificar')
    }
}

module.exports = adminController