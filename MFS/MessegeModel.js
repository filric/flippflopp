exports.newMessege = (email, messege) => {
    var messege = new Messege({
        email: email,
        messege: messege

    })
    return messege
}
exports.getAllMesseges = async () => {
    let messeges = await Messege.find({})
    return messeges
}