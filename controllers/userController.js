const User = require('./../models/userModel');
const AppError = require('../utils/appError');

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

exports.updateMe = (req, res, next) => {
  if (req.body.password || req.boy.confirmPssword) {
    return next(new AppError('use another link to update password', 403));
  }
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
