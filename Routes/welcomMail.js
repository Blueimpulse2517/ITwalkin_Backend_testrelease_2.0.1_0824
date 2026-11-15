
require("dotenv").config();

const { Resend } = require("resend")
const resend = new Resend(process.env.RESEND_API_KEY);


async function sendWelcomeEmail(user, message) {
    try {
        const userName = user.name || "there";
        const userEmail = user.email;
        const htmlTemplate = `

                    <html lang="en">

                        <head>

                            <meta charset="UTF-8">

                                <meta name="viewport"
                                    content="width=device-width, initial-scale=1.0">

                                    <title>Welcome to It walkin</title>

                                </head>


                                <body
                                    style="
        margin:0;
        padding:0;
        background-color:#f4f7fb;
        font-family:Arial, Helvetica, sans-serif;
    "
                                >


                                    <!-- Main Container -->

                                    <table
                                        width="100%"
                                        cellpadding="0"
                                        cellspacing="0"
                                        border="0"
                                        style="
            background-color:#f4f7fb;
            padding:35px 15px;
        "
                                    >

                                        <tr>

                                            <td align="center">


                                                <!-- Email Card -->

                                                <table
                                                    width="600"
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    border="0"
                                                    style="
                        max-width:600px;
                        width:100%;
                        background:#ffffff;
                        border-radius:14px;
                        overflow:hidden;
                        box-shadow:0 4px 15px rgba(0,0,0,0.08);
                    "
                                                >


                                                    <!-- ========================= -->
                                                    <!-- HEADER -->
                                                    <!-- ========================= -->

                                                    <tr>

                                                        <td
                                                            align="center"
                                                            style="
                                background:#1769e0;
                                padding:30px 25px;
                            "
                                                        >

                                                            <div
                                                                style="
                                    font-size:30px;
                                    font-weight:bold;
                                    color:#ffffff;
                                "
                                                            >
                                                                It walkin
                                                            </div>


                                                            <div
                                                                style="
                                    margin-top:8px;
                                    color:#eaf2ff;
                                    font-size:15px;
                                "
                                                            >
                                                                Your career journey starts here 🚀
                                                            </div>

                                                        </td>

                                                    </tr>

                                                    <tr>

                                                        <td
                                                            style="
                                padding:40px 35px;
                            "
                                                        >


                                                            <!-- Greeting -->

                                                            <h1
                                                                style="
                                    margin:0 0 15px 0;
                                    color:#222222;
                                    font-size:25px;
                                    line-height:1.3;
                                "
                                                            >

                                                                Welcome, ${userName}! 👋

                                                            </h1>



                                                            <!-- Intro -->

                                                            <p
                                                                style="
                                    margin:0 0 18px 0;
                                    color:#555555;
                                    font-size:16px;
                                    line-height:1.7;
                                "
                                                            >

                                                                Congratulations! Your account has been
                                                                successfully created on
                                                                <strong>It walkin Portal</strong>.

                                                            </p>


                                                            <p
                                                                style="
                                    margin:0 0 25px 0;
                                    color:#555555;
                                    font-size:16px;
                                    line-height:1.7;
                                "
                                                            >

                                                                We're excited to have you with us.
                                                                You can now discover new opportunities,
                                                                build your professional profile and
                                                                take the next step in your career.

                                                            </p>
<p  style="
                                    margin:0 0 25px 0;
                                    color:#555555;
                                    font-size:16px;
                                    line-height:1.7;
                                ">${message}</p>


                                                            <!-- ========================= -->
                                                            <!-- WHAT YOU CAN DO -->
                                                            <!-- ========================= -->

                                                            <div
                                                                style="
                                    background:#f7f9fc;
                                    border-radius:10px;
                                    padding:22px;
                                    margin-bottom:28px;
                                "
                                                            >

                                                                <h2
                                                                    style="
                                        margin:0 0 18px 0;
                                        color:#222222;
                                        font-size:19px;
                                    "
                                                                >

                                                                    What you can do on It walkin

                                                                </h2>


                                                                <p
                                                                    style="
                                        margin:12px 0;
                                        color:#444444;
                                        font-size:15px;
                                    "
                                                                >
                                                                    ✅ Explore the latest opportunities
                                                                </p>


                                                                <p
                                                                    style="
                                        margin:12px 0;
                                        color:#444444;
                                        font-size:15px;
                                    "
                                                                >
                                                                    ✅ Create and update your professional profile
                                                                </p>


                                                                <p
                                                                    style="
                                        margin:12px 0;
                                        color:#444444;
                                        font-size:15px;
                                    "
                                                                >
                                                                    ✅ Create your professional resume
                                                                </p>


                                                                <p
                                                                    style="
                                        margin:12px 0;
                                        color:#444444;
                                        font-size:15px;
                                    "
                                                                >
                                                                    ✅ Connect with potential employers/Jobseekers
                                                                </p>

                                                            </div>



                                                            <!-- ========================= -->
                                                            <!-- CTA BUTTON -->
                                                            <!-- ========================= -->

                                                            <table
                                                                cellpadding="0"
                                                                cellspacing="0"
                                                                border="0"
                                                                align="center"
                                                                style="
                                    margin:25px auto 30px auto;
                                "
                                                            >

                                                                <tr>

                                                                    <td
                                                                        align="center"
                                                                        style="
                                            background:#1769e0;
                                            border-radius:8px;
                                        "
                                                                    >

                                                                        <a
                                                                            href="https://www.itwalkin.com/"
                                                                            target="_blank"
                                                                            style="
                                                display:inline-block;
                                                padding:15px 32px;
                                                color:#ffffff;
                                                text-decoration:none;
                                                font-size:16px;
                                                font-weight:bold;
                                            "
                                                                        >

                                                                            Explore It walkin →

                                                                        </a>

                                                                    </td>

                                                                </tr>

                                                            </table>



                                                            <!-- Closing Message -->

                                                            <p
                                                                style="
                                    margin:0;
                                    color:#666666;
                                    font-size:14px;
                                    line-height:1.7;
                                    text-align:center;
                                "
                                                            >

                                                                Complete your profile and start
                                                                exploring opportunities today.

                                                            </p>


                                                        </td>

                                                    </tr>



                                                    <!-- ========================= -->
                                                    <!-- FOOTER -->
                                                    <!-- ========================= -->

                                                    <tr>

                                                        <td
                                                            align="center"
                                                            style="
                                background:#f8f9fb;
                                padding:25px 20px;
                                border-top:1px solid #eeeeee;
                            "
                                                        >

                                                            <p
                                                                style="
                                    margin:0 0 8px 0;
                                    color:#777777;
                                    font-size:13px;
                                "
                                                            >

                                                                © ${new Date().getFullYear()} It walkin.
                                                                All rights reserved.

                                                            </p>


                                                            <p
                                                                style="
                                    margin:0;
                                    color:#999999;
                                    font-size:12px;
                                    line-height:1.5;
                                "
                                                            >

                                                                This is an automated email.
                                                                Please do not reply to this email.

                                                            </p>

                                                        </td>

                                                    </tr>


                                                </table>

                                                <!-- End Email Card -->


                                            </td>

                                        </tr>

                                    </table>


                                </body>

                            </html>

                            `;

        const { data, error } = await resend.emails.send({
            from: "PakkaJob <noreply@pakkajob.in>",
            to: userEmail,
            subject: "🎉 Welcome to It walkin – Your Account is Ready!",
            html: htmlTemplate

        });
        if (!error) {
            return "mail sent"
        }


    } catch (error) {
        return false;
    }
}

module.exports = sendWelcomeEmail;