const Razorpay = require("razorpay");

exports.getRazorpayInstance = () => {
	const { RAZORPAY_KEY, RAZORPAY_SECRET } = process.env;

	if (!RAZORPAY_KEY || !RAZORPAY_SECRET) {
		throw new Error("Razorpay credentials are not configured");
	}

	return new Razorpay({
		key_id: RAZORPAY_KEY,
		key_secret: RAZORPAY_SECRET,
	});
};
