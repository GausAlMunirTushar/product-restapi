const getAllProducts = async (req, res) => {
    res.status(200).json({"message": "All products"});
}

module.exports = {getAllProducts};