const fs = require('fs');
const Tour = require('./../models/tourModel');

//const tours = JSON.parse(fs.readFileSync('./dev-data/data/tours-simple.json'));

// exports.checkId = (req, res, next, val) => {
//   if (req.params.id * 1 > tours.length) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'invalid Id'
//     });
//   }
//   next();
// };

// exports.checkBody = (req, res, next) => {
//   if (!req.body.name || !req.body.price) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'no price or name'
//     });
//   }
//   next();
// };

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();

    res.status(200).send({
      status: 'success',
      results: tours.length,
      data: {
        tours
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        tour
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    console.log('123');
    // const newTour = new Tour({})
    // newTour.save()

    const newTour = await Tour.create(req.body);
    console.log(newTour);
    console.log('456');
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'invalid data sent'
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(204).json({
      status: 'updated',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'deleted',
      data: {
        tour
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

// exports.deleteTour = (req, res) => {
//   const { id } = req.params;
//   tours.splice(id, 1);
//   fs.writeFileSync('./dev-data/data/tours-simple.json', JSON.stringify(tours));
//   const toursNew = JSON.parse(
//     fs.readFileSync('./dev-data/data/tours-simple.json')
//   );
//   res.status(200).json({
//     status: 'sucess _ deleted',
//     data: {
//       toursNew
//     }
//   });
// };
