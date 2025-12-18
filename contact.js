// /api/contact.js
export default function handler(req, res) {
  if (req.method === "POST") {
    const { fname, lname, email, message } = req.body; // your form data

    console.log({ fname, lname, email, message }); // just log for now

    return res.status(200).json({ success: true, message: "Form submitted!" });
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

