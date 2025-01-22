import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Haal JSON-body op van het verzoek
    const body = await req.json();
    const { name, email, message } = body;

    // Controleer of alle velden aanwezig zijn
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, message: "Alle velden zijn verplicht." }),
        { status: 400 }
      );
    }

    // Nodemailer configuratie voor Outlook SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false, // Gebruik TLS
      auth: {
        user: 'merijn@vanhien.com', // Je Outlook-e-mailadres process.env.SMTP_USER
        pass: 'M@rijn2006', // Je Outlook-wachtwoord of app-specifiek wachtwoord process.env.SMTP_PASS
      },
    });

    // E-mail verzenden
    await transporter.sendMail({
      from: email, // Afzender (formulier-invuller)
      to: 'merijn@vanhien.com', // Je eigen e-mailadres om berichten te ontvangen process.env.SMTP_USER
      subject: `Nieuw bericht van ${name}`,
      text: message,
    });

    // Succesvolle reactie
    return new Response(
      JSON.stringify({ success: true, message: "E-mail succesvol verzonden!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Fout bij het verzenden van de e-mail:", error);
    return new Response(
      JSON.stringify({ success: false, message: "E-mail verzenden mislukt." }),
      { status: 500 }
    );
  }
}
export async function GET(req) {
    return new Response(
      JSON.stringify({ success: false, message: "E-mail verzenden mislukt." }),
      { status: 500 }   );
}