module.exports = (err, req, res, next) => {
    console.error(`❌ Error: ${err.message}`, err.details ? `Details: ${err.details}` : '');
    res.status(err.status || 500).json({
      message: err.message || 'An unexpected error occurred',
      details: err.details || 'No additional details provided',
    });
  };
  