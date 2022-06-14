const db = require('../firebase')

//parameter /:id passed
getMockPoint = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log("before");
        console.log(id);
        console.log("after")

        const doc = await db.collection('mockpoints').doc(id).get().then(doc=> {
            console.log("The doccument received is", doc)
            console.log(doc.exists)
            
            if(!doc.exists){
                console.log("No such Doc exists")
                throw new Error("No such Doc Exist");
            };
            console.log("The doc is", doc);
            res.status(200).json(doc.data());
        })
      
        
    } catch (error) {
        error.status = 400;
        next(error);
        
    }
};



notFound = (req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
}


// most of the site errors could be 404 but in cases if something horrible 
// happens and err doesn't gets passed
// Status = 500, message = Something Went Wrong
errors = (err, req, res, next) => {

    res.status(err.status || 500)
    .json({
        error: err.message || "Something went wrong"
    }); 
};

module.exports = {
    getMockPoint,
    notFound,
    errors
    
}
