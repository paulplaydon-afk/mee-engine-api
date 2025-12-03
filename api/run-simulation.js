// api/run-simulation.js
// Dummy MEE Engine endpoint for wiring & testing
// CORS enabled for all responses

export default function handler(req, res) {
  // Always set CORS headers on every response
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Max-Age", "86400");

  // Handle preflight (browser check before the real POST)
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Reject non-POST methods
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  const body = req.body || {};
  console.log("Incoming simulation request:", body);

  // Dummy data for wiring
  const dummyResponse = {
    paths: {
      A: "Path A — example text showing a grounded, intentional response.",
      B: "Path B — example text showing the old stuck pattern.",
      C: "Path C — example text that blends growth and old habits."
    },
    futureSelfLetter:
      "Dear present you,\n\nThis is an example Future-Self Letter from MEE. In the real version, this will be deeply personalised to your avatar, scenario and emotional architecture.\n\nFor now, this is just a placeholder so we can wire the system.",
    whatIfTimeline:
      "What-If Timeline — example text describing how things might have unfolded emotionally if a key moment in the past had gone differently.",
    reflectionPrompts: [
      "Where did your reaction feel most familiar, and what older story did it echo?",
      "If you paused that story for a moment, what other interpretation might be possible?"
    ],
    integrationInsights: [
      "This is an example Integration Insight. In the real engine, these will summarise the deeper emotional pattern behind your reactions.",
      "For now, this placeholder proves that the wiring between the UI and engine is working."
    ]
  };

  return res.status(200).json(dummyResponse);
}
