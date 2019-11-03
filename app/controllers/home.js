

exports.default = async (req, res) => {
    res.send('Hello Poket-Pet!')
};

exports.redirectTo = async (req, res) => {
    res.redirect('/');
};

