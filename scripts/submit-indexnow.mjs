import fs from "fs";

const payload = JSON.parse(fs.readFileSync(new URL("../indexnow.json", import.meta.url), "utf-8"));

async function submitIndexNow() {
  console.log(`Submitting ${payload.urlList.length} URLs to IndexNow (Bing & participating search engines)...`);
  
  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    console.log(`Response Status: ${res.status} ${res.statusText}`);
    if (res.status === 200 || res.status === 202) {
      console.log("Success! URLs have been accepted by IndexNow.");
    } else {
      const text = await res.text();
      console.log("Response Body:", text);
    }
  } catch (err) {
    console.error("Submission failed:", err);
  }
}

submitIndexNow();
