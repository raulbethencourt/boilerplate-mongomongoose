require('dotenv').config();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// connection to database
mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const personSchema = new Schema({
	name: { type: String, required: true },
	age: Number,
	favoriteFoods: [String],
});

let Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
	let luther = new Person({
		name: 'Luther Blissett',
		age: 23,
		favoriteFoods: ['pizza', 'helado'],
	});

	luther.save((err, data) => {
		if (err) return console.error(err);
		done(null, data);
	});
};

var arrayOfPeople = [
	{
		name: 'Luther Blissett',
		age: 75,
		favoriteFoods: ['pizza', 'helado'],
	},
	{ name: 'John Difool', age: 39, favoriteFoods: ['soma', 'burger'] },
	{
		name: 'Robert Paulson',
		age: 23,
		favoriteFoods: ['chili', 'ensaladq', 'tacos'],
	},
];

const createManyPeople = (arrayOfPeople, done) => {
	Person.create(arrayOfPeople, (err, people) => {
		if (err) return console.log(err);
		done(null, people);
	});
};

const findPeopleByName = (personName, done) => {
	Person.find({ name: personName }, (err, personFound) => {
		if (err) return console.error(err);
		done(null, personFound);
	});
};

const findOneByFood = (food, done) => {
	Person.findOne({ favaoriteFoods: food }, (err, personFound) => {
		if (err) return console.error(err);
		done(null, personFound);
	});
};

const findPersonById = (personId, done) => {
	Person.findById({ _id: personId }, (err, personFound) => {
		if (err) return console.error(err);
		done(null, personFound);
	});
};

const findEditThenSave = (personId, done) => {
	const foodToAdd = 'hamburger';

	Person.findById(personId, (err, person) => {
		if (err) return console.error(err);

		person.favoriteFoods.push(foodToAdd);

		person.save((err, updatePerson) => {
			if (err) return console.error(err);
			done(null, updatePerson);
		});
	});
};

const findAndUpdate = (personName, done) => {
	const ageToSet = 20;

	done(null /*, data*/);
};

const removeById = (personId, done) => {
	done(null /*, data*/);
};

const removeManyPeople = (done) => {
	const nameToRemove = 'Mary';

	done(null /*, data*/);
};

const queryChain = (done) => {
	const foodToSearch = 'burrito';

	done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
