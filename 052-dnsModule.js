// DNS Module an interpret domain name
var dns = require("dns");
// The syntax to get an IP address from a website is as follows:
// dns.lookup(website, callback);

var dns = require("dns");
dns.lookup("www.yahoo.com", function (err, address) {
  console.log("The IP of www.yahoo.com: ", address);
  if (err) {
    console.log(err.stack);
  }
});

// The syntax to get a domain name from an IP address
// dns.reverse(address, callback)

var dns = require("dns");
dns.reverse("72.30.35.9", function (err, domain_name) {
  if (err) {
    console.log(err.stack);
  }
  console.log("The domain name of 72.30.35.9 is:");
  console.log(domain_name);
});
