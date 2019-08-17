const User = require('./../models/userModel');

const catchAsync = require('../utils/catchAsync');

exports.getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find();

  res.status(200).send({
    status: 'success',
    results: users.length,
    data: {
      users
    }
  });
});

exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'errors',
    message: 'under development'
  });
};

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'errors',
    message: 'under development'
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'errors',
    message: 'under development'
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'errors',
    message: 'under development'
  });
};
