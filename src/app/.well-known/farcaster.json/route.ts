import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl =
    process.env.NEXT_PUBLIC_URL ||
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      header: "eyJmaWQiOjg2OTk5OSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDc2ZDUwQjBFMTQ3OWE5QmEyYkQ5MzVGMUU5YTI3QzBjNjQ5QzhDMTIifQ",
      payload: "eyJkb21haW4iOiJqYWJiYS1vcGVuc2VhbmZ0bWludGluZy52ZXJjZWwuYXBwIn0",
      signature: "MHgwZDljMmM4MzQyMDlhOGY0NjhjZmQyODE1ZjlhNzIzMzlkMTA4MGM2YTMyZGI3YzEyM2QwOWQ2OWVmYTc1MjZjNzJhMGJiZjQ2MWQ1ZWI4ZTY5MDZiM2RiMGY5OTM1ZGY2Yjk1OTc0Y2ExZGUyOTdiOTU2NjFlYzUwM2E4ZTE5ZDFj",
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/og.png`,
      buttonTitle: "Open",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
      primaryCategory: "art-creativity",
      tags: ["nft", "minting", "collection", "crypto", "digital"],
    },
  };

  return Response.json(config);
}
