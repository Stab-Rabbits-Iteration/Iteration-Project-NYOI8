const userController = {};
userController.verifyUser = async (req, res, next) => {
try {
    const sqlquery = 'SELECT p, species.name AS species, planets.name AS homeworld FROM people LEFT JOIN planets ON people.homeworld_id = planets._id LEFT JOIN species ON people.species_id = species._id';
    const data = await db.query(sqlquery);
    if (data === null) {
    
    } else {
    res.locals.dataFromDatabase = data.rows;
    }
    return next()
} catch (error) {
    return next(error);
}

  module.exports = userController;