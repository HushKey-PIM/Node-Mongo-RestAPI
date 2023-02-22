module.exports.Token = require('./token.model');
module.exports.User = require('./user.model');

// Logins models
module.exports.Password = require('./logins/password.model');
module.exports.TwoFactor = require('./logins/twoFactor.model');
module.exports.Wifi = require('./logins/wifi.model');

// Identity models
module.exports.DriverLicense = require('./identity/driverLicense.model');
module.exports.IdCard = require('./identity/idCard.model');
module.exports.Membership = require('./identity/membership.model');
module.exports.Passport = require('./identity/passport.model');
module.exports.Tax = require('./identity/tax.model');
module.exports.Visa = require('./identity/visa.model');

// Finance models
module.exports.BankAccount = require('./finance/bankAccount.model');
module.exports.Card = require('./finance/card.model');
module.exports.CryptoWallet = require('./finance/cryptoWallet.model');
module.exports.Ledger = require('./finance/ledger.model');

// Records models
module.exports.Certificate = require('./records/certificate.model');
module.exports.Insurance = require('./records/insurance.model');
module.exports.Invoice = require('./records/invoice.model');
module.exports.Medical = require('./records/medical.model');

// Note models
module.exports.Note = require('./notes/note.model');
