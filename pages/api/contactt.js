const mail = require("@sendgrid/mail");

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

mail.setApiKey(SENDGRID_API_KEY);

console.log(SENDGRID_API_KEY);

const handler = async (req, res) => {
  console.log("CONTACT ROUTE HIT ON SERVER");

  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
    `;

  const data = {
    to: "launchpadcontactweb@gmail.com",
    from: "launchpadcontactweb@gmail.com",
    subject: `LP Contact Form: New message from ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };

  let result = await mail.send(data);

  console.log(result);

  return res.status(200).json({ status: "OK" });
  // console.log(body);
};

export default handler;
