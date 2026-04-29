import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const filePath = path.join(process.cwd(), "src/app/dhruv-venkat-resume.pdf");
  const file = await readFile(filePath);

  return new Response(new Uint8Array(file), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="dhruv-venkat-resume.pdf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
