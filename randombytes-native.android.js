module.exports = function (length, cb) {
  var output = Array.create("byte", length);
  new java.security.SecureRandom().nextBytes(output);
  var buf = Buffer.from(android.util.Base64.encodeToString(output, android.util.Base64.DEFAULT), 'base64');

  if (cb) {
    cb (null, buf);
  } else {
    return buf;
  }
};