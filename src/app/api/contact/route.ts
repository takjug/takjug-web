import { NextResponse } from "next/server";

interface ContactRequestBody {
  firstName?: string;
  lastName?: string;
  name?: string;
  email: string;
  company?: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const body: ContactRequestBody = await req.json();

    if (!body.email || !body.message) {
      return NextResponse.json(
        { error: "Email and message are required fields." },
        { status: 400 }
      );
    }

    let fName = (body.firstName || "").trim();
    let lName = (body.lastName || "").trim();

    if ((!fName || !lName) && body.name) {
      const parts = body.name.trim().split(/\s+/);
      if (parts.length === 1) {
        fName = fName || parts[0];
        lName = lName || parts[0];
      } else {
        fName = fName || parts[0];
        lName = lName || parts.slice(1).join(" ");
      }
    }

    if (!fName) fName = "Prospective";
    if (!lName) lName = "Partner";

    const comp = (body.company || "").trim() || `${fName} ${lName}` || "Venture Inquiry";
    const email = body.email.trim();
    const message = body.message.trim();
    const fullName = `${fName} ${lName}`;
    const timestamp = new Date().toISOString();

    console.log(`[Contact Protocol] Incoming transmission from ${email} (${fullName}, Company: ${comp})`);

    // 1. Check for Zoho Webhook or Web-to-Lead endpoint in environment variables
    const zohoWebhookUrl = process.env.ZOHO_WEBHOOK_URL;
    const zohoCrmFormUrl = process.env.ZOHO_CRM_FORM_URL;
    const web3formsAccessKey = process.env.WEB3FORMS_ACCESS_KEY;

    let dispatched = false;

    // Dispatch to Zoho Webhook / Zoho Flow if provided
    if (zohoWebhookUrl) {
      try {
        const zohoRes = await fetch(zohoWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            first_name: fName,
            last_name: lName,
            name: fullName,
            email,
            company: comp,
            message,
            source: "Takjug Systems Engineering Web Modal",
            submitted_at: timestamp,
          }),
        });
        if (zohoRes.ok) dispatched = true;
      } catch (err) {
        console.error("[Contact Protocol] Error posting to Zoho webhook:", err);
      }
    }

    // Dispatch to Zoho CRM Web-to-Lead if form URL and parameters are set
    if (!dispatched && zohoCrmFormUrl) {
      try {
        const formData = new URLSearchParams();
        if (process.env.ZOHO_CRM_XNQSJSDP) formData.append("xnQsjsdp", process.env.ZOHO_CRM_XNQSJSDP);
        if (process.env.ZOHO_CRM_XMIWTLD) formData.append("xmIwtLD", process.env.ZOHO_CRM_XMIWTLD);
        formData.append("actionType", process.env.ZOHO_CRM_ACTION_TYPE || "TGVhZHM=");
        formData.append("returnURL", "");
        formData.append("zc_gad", "");

        formData.append("First Name", fName);
        formData.append("Last Name", lName);
        formData.append("Email", email);
        formData.append("Company", comp);
        formData.append("Description", message);
        formData.append("Lead Source", "takjug.com");

        const crmRes = await fetch(zohoCrmFormUrl, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: formData.toString(),
          redirect: "follow",
        });

        console.log(`[Contact Protocol] Zoho CRM response status: ${crmRes.status}`);
        if (crmRes.ok || crmRes.status === 200 || crmRes.status === 302) {
          dispatched = true;
        }
      } catch (err) {
        console.error("[Contact Protocol] Error posting to Zoho CRM Web-to-Lead:", err);
      }
    }

    // Dispatch to Web3Forms / Instant Email Forwarding if configured
    if (!dispatched && web3formsAccessKey) {
      try {
        const emailRes = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: web3formsAccessKey,
            name: fullName,
            email,
            company: comp,
            message,
            subject: `[Takjug Systems] Inquiry from ${fullName} (${comp})`,
            to_email: "dev@takjug.com",
          }),
        });
        if (emailRes.ok) dispatched = true;
      } catch (err) {
        console.error("[Contact Protocol] Error posting to Web3Forms:", err);
      }
    }

    return NextResponse.json({
      success: true,
      dispatched,
      message: dispatched
        ? "Transmission received and forwarded to Takjug engineering desk."
        : "Transmission recorded. Connect your Zoho webhook or email API key in .env.local for automated instant forwarding.",
    });
  } catch (error) {
    console.error("[Contact Protocol] Internal processing error:", error);
    return NextResponse.json(
      { error: "Internal transmission error. Please use direct email to dev@takjug.com." },
      { status: 500 }
    );
  }
}

