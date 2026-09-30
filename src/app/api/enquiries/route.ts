import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "dummy_key");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Server-side validation
    if (!body.fullName || !body.phone || !body.location || !body.projectType) {
      return NextResponse.json(
        { error: "Missing required fields: fullName, phone, location, or projectType." },
        { status: 400 }
      );
    }

    // Connect to the database
    await connectToDatabase();
    
    // Create new enquiry
    const enquiry = await Enquiry.create({
      ...body,
      status: "New"
    });

    // Send emails if API key is configured
    if (process.env.RESEND_API_KEY) {
      const typeLabel = body.enquiryType === "Contact" ? "Contact Message" : "Consultation Request";
      
      // 1. Notify the company
      await resend.emails.send({
        from: "Acme <onboarding@resend.dev>", // replace with verified domain later
        to: ["greenenergysolutions78@gmail.com"],
        subject: `New ${typeLabel} from ${body.fullName}`,
        html: `
          <h3>New ${typeLabel}</h3>
          <p><strong>Name:</strong> ${body.fullName}</p>
          <p><strong>Phone:</strong> ${body.phone}</p>
          <p><strong>Email:</strong> ${body.email || "N/A"}</p>
          <p><strong>Location:</strong> ${body.location || "N/A"}</p>
          <p><strong>Project Type:</strong> ${body.projectType || "N/A"}</p>
          <p><strong>Message:</strong> ${body.message || "None"}</p>
        `,
      });

      // 2. Send acknowledgement to the user (if email is provided)
      if (body.email) {
        const userSubject = body.enquiryType === "Contact" 
          ? "We received your message - Green Energy Solutions" 
          : "We received your request - Green Energy Solutions";
        
        const userBody = body.enquiryType === "Contact"
          ? `<p>Thank you for contacting Green Energy Solutions. We have received your message and will get back to you shortly.</p>`
          : `<p>Thank you for reaching out to Green Energy Solutions. We have received your request for a ${body.projectType} consultation.</p>
             <p>One of our solar experts will review your details and get back to you shortly.</p>`;

        await resend.emails.send({
          from: "Green Energy Solutions <onboarding@resend.dev>",
          to: [body.email],
          subject: userSubject,
          html: `
            <p>Hi ${body.fullName},</p>
            ${userBody}
            <br/>
            <p>Best Regards,</p>
            <p><strong>Green Energy Solutions Team</strong></p>
          `,
        });
      }
    }
    
    return NextResponse.json(
      { message: "Enquiry submitted successfully", enquiry },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating enquiry:", error);
    return NextResponse.json(
      { error: "Failed to submit enquiry" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    
    return NextResponse.json({ enquiries }, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching enquiries:", error);
    return NextResponse.json(
      { error: "Failed to fetch enquiries" },
      { status: 500 }
    );
  }
}
