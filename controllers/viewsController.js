const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getOverview = catchAsync(async (req, res) => {
  const tours = await Tour.find();

  res.status(200).render('overview', {
    title: 'All TOurs',
    tours
  });
});

exports.getTour = (req, res) => {
  res.status(200).render('tour', { title: 'The Forest Hiker Tour' });
};
