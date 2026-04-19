import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  enquiry?: string;
  country?: string;
};

function isValidEmail(email: string) {
  return /^\S+@\S+\.\S+$/.test(email);
}

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { success: false, error: "RESEND_API_KEY is not configured." },
        { status: 500 },
      );
    }

    const body = (await req.json()) as ContactPayload;

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const city = body.city?.trim() ?? "";
    const enquiry = body.enquiry?.trim() ?? "";
    const country = body.country?.trim() ?? "";

    if (!name || !email || !phone || !city || !enquiry || !country) {
      return Response.json(
        { success: false, error: "All fields are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const data = await resend.emails.send({
      from: "Eien Global <onboarding@resend.dev>",
      to: ["info@eienglobal.com"],
      subject: `New Query Form Submission from ${name}`,
      html: `
        <h2>New Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Enquiry:</strong> ${enquiry}</p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to send email.",
      },
      { status: 500 },
    );
  }
}
