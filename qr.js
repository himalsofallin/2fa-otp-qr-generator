function makeURI(secret) {
	var algorithm = "SHA256"
	var account = "Merhaba Dünya!"
	var digits = "6";
	var period = "30";
	var image = ""
	var lock = "false";
	var type = "hotp";
	var uri = "otpauth://" + type + "/";

	uri += encodeURIComponent(account);
	uri += "?secret=" + secret;
	uri += "&algorithm=" + algorithm;
	uri += "&digits=" + digits;
	uri += "&period=" + period;
	uri += "&lock=" + lock;

	if (type == "hotp")
		uri += "&counter=0";

	if (image.length > 0)
		uri += "&image=" + encodeURIComponent(image);

	return uri;
}

function onImageError() {
  document.getElementById("image").classList.add("error");
  document.getElementById("preview").src = "img/logo.png";
}

function onValueChanged(secret) {
  var prv = document.getElementById("preview");
  prv.src = "img/logo.png"

  var uri = makeURI(secret);
	qrcode.clear();
	qrcode.makeCode(uri);
  document.getElementById("urilink").href = uri;
}
