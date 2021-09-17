module.exports = function (length, cb) {
  var bytes = NSMutableData.dataWithLength(length);
  SecRandomCopyBytes(null, length, bytes.mutableBytes);
  var buf = Buffer.from(bytes.base64EncodedStringWithOptions(0), 'base64');

  if (cb) {
    cb (null, buf);
  } else {
    return buf;
  }
};