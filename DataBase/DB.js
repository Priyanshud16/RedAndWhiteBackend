const {connect}=require("mongoose")

const ConnectDB=connect("mongodb+srv://priyanshuharrdy:iJi9KGQWtlMAgDdA@cluster0.7m0np.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

module.exports=ConnectDB