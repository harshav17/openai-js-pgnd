import OpenAI from "openai";

const openai = new OpenAI();

/**
 * {
  message: {
    role: 'assistant',
    content: "This image is an illustration that depicts a bustling market scene, likely inspired by the streets of India given the architectural style and clothing of the people. Dominating the foreground is a large, animated rendering of a young girl with big, expressive eyes and a look of wonder. She rests her chin on her hands and peers into the distance. Behind her, intricately detailed buildings with ornate designs suggest an older, perhaps historical part of a city. The middle ground shows a lively street market crowded with people. You can see vendors selling colorful spices, fruits, and goods, while various individuals walk past the stalls. Traditional Indian attire such as sarees can be seen, adding to the cultural atmosphere of the scene. Above the buildings, there are birds flying and the sky is a soft blue with hints of clouds. The illustration appears warm and vibrant, full of life and activity, and conveys a sense of curiosity and enchantment through the girl's point of view."
  },
  finish_details: { type: 'stop', stop: '<|fim_suffix|>' },
 */
async function main() {
  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "What’s in this image?" },
          {
            type: "image_url",
            image_url: {
                url: "https://oaidalleapiprodscus.blob.core.windows.net/private/org-kSZT8c04e5hpXRYrbMt8gC84/user-5tpSOZrDFwVZxjJ1rgz3fOVe/img-s3stFZTE1IH9Ni02N7s56avT.png?st=2023-11-07T04%3A47%3A40Z&se=2023-11-07T06%3A47%3A40Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-11-06T15%3A36%3A17Z&ske=2023-11-07T15%3A36%3A17Z&sks=b&skv=2021-08-06&sig=0FUSYbtme/TAaQT75lvw7O7DWHBSlw1f%2B6k6m8KF/lc%3D",
            },
          },
        ],
      },
    ],
    max_tokens: 4096,
  });
  console.log(response.choices[0]);
}
main();