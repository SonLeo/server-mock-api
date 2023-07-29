const { response } = require('express')

module.exports = function (request, res) {
    let users = require('../../users/GET.json')
    let user = users.find(user => user.id == request.params.user_id)

    response.json({
        id: user.id,
        name: user.name
    })
}