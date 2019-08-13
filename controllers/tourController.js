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

exports.getAllTours = (req, res) => {
  res.status(200).send({
    status: 'success',
    time: req.requestTime
    // results: tours.length,
    // data: {
    //   tours
    // }
  });
};

exports.getTour = (req, res) => {
  // const tour = tours.find(el => el.id === req.params.id * 1);
  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour
  //   }
  // });
};

// exports.createTour = async (req, res) => {
//   try {
//     console.log(req.body);
//     const newTour1 = await Tour.create(req.body);
//     res.status(201).json({
//       status: 'success 123',
//       data: {
//         tour: newTour1
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail ',
//       message: err
//     });
//   }
// };

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

exports.updateTour = (req, res) => {
  //const id = req.params.id;
  res.status(200).json({
    status: 'status',
    data: {
      tour: 'updated'
    }
  });
};

exports.deleteTour = (req, res) => {
  res.status(200).json({
    status: 'sucess _ deleted',
    data: null
  });
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
