import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const image = await openai.images.generate({ model: "dall-e-3", prompt: "A procrastinating kid named Lila" });

  console.log(image.data);
}
main();