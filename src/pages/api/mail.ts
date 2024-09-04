import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  if (req.method === "POST") {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `IOM Site Notifications "${process.env.EMAIL_USER}"`,
      to: "iom.creators.ua@gmail.com",
      subject: "Notification from site",
      html: `<html>
      <head>
      <style>
      body {
          font-family: Arial, sans-serif;
          margin: 20px;
      }
      table {
          border-collapse: collapse;
          width: 100%;
          margin-top: 20px;
      }
      th, td {
          border: 1px solid #436F65;
          text-align: left;
          padding: 12px;
      }
      th {
          text-transform: capitalize;
          background-color: #F38173;
      }
      strong {
          font-weight: bold;
      }
  </style>
      </head>
      <body>
        <table>
           ${Object.entries(req.body)
             .map((field) => {
               return `
                  <tr>
                      <th>${field[0].replace("_", " ")}</th>
                      <td>${field[1]}</td>
                  </tr>
                `;
             })
             .join("")}
      </table>
      </body>
      </html>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ status: "Email sent successfully" });
    } catch (error: any) {
      res.status(500).json({
        status: "Error sending email",
        error: error.message,
      });
    }
  } else {
    res.status(405).json({ status: "Method not allowed" });
  }
}
